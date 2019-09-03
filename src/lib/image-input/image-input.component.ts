import {
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostListener,
    Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { RockImage } from './image';
import { ImageInputService } from './image-input.service';

let uniqueId = 0;

@Component({
    selector: 'rock-image-input',
    templateUrl: './image-input.component.html',
    styleUrls: [ './image-input.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => ImageInputComponent),
        },
        ImageInputService
    ],
})
export class ImageInputComponent implements ControlValueAccessor {

    public state: 'accent' | 'error';
    public background: SafeStyle;
    public imageData: string;
    public isDisabled = false;

    @Input()
    public id = `rock-image-${++uniqueId}`;

    @Input()
    public label: string;

    @Input()
    public format: 'image/jpeg' | 'image/png' = 'image/jpeg';

    @Input()
    public width = 250;

    @Input()
    public height = 250;

    @Input()
    get name(): string {
        return this.id;
    }

    private hasChange: (value: RockImage) => void = () => { };
    private isTouched = () => { };

    constructor(
        private changeDetector: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        private imageService: ImageInputService,
    ) { }

    public registerOnChange(fn: (value: RockImage) => void): void {
        this.hasChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: string): void {
        if (!value) {
            return;
        }

        this.imageService.loadImageOnCanvas(value).subscribe((canvas) => {
            const name = value;
            this.imageData = canvas.toDataURL();
            this.background = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageData})`);
            canvas.toBlob((data: Blob) => this.setValue({ name, data }), this.format);
        });
    }

    private setValue(value: RockImage) {
        this.hasChange(value);
        this.isTouched();
    }

    @HostListener('dragenter', [ '$event' ])
    @HostListener('dragover', [ '$event' ])
    public onDragOver(event: any): void {
        event.preventDefault();

        if (this.isDisabled) {
            return;
        }

        const isValid = this.imageService.validate(event.dataTransfer);
        this.state = isValid ? 'accent' : 'error';
    }

    @HostListener('mouseleave')
    @HostListener('dragleave')
    public onDragLeave(): void {
        if (this.isDisabled) {
            return;
        }

        this.state = undefined;
    }

    @HostListener('drop', [ '$event' ])
    public onDrop(event: any): boolean {
        event.preventDefault();

        if (this.isDisabled) {
            return;
        }

        this.state = undefined;

        const file: File = this.imageService.validate(event.dataTransfer || event.target) as File;

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const name = file.name.replace(/\.[^/.]+$/, '');
            this.imageService.optimiseOnCanvas(<string> reader.result, this.width, this.height).subscribe((canvas) => {
                this.imageData = canvas.toDataURL();
                this.background = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageData})`);
                canvas.toBlob((data: Blob) => this.setValue({ name, data }), this.format);
            });
        });

        try {
            reader.readAsDataURL(file);
        } catch (error) {
            this.state = 'error';
        }

        return true;
    }

}
