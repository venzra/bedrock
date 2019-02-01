import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, HostListener, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { RockImage } from './image';
import { ImageInputService } from './image-input.service';
import { RockInputControl } from '../core/forms/input.control';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'rock-image-input',
    templateUrl: './image-input.component.html',
    styleUrls: [ './image-input.component.scss' ],
    providers: [ ImageInputService ],
})
export class ImageInputComponent implements AfterContentInit, AfterViewInit {

    public state: 'accent' | 'error';
    public background: SafeStyle;
    public imageData: string;
    public isDisabled = false;

    @ContentChild(RockInputControl)
    private input: RockInputControl;

    @Input()
    public label: string;

    @Input()
    public format: 'image/jpeg' | 'image/png' = 'image/jpeg';

    @Input()
    public width = 250;

    @Input()
    public height = 250;

    @Input()
    set name(value: string) {}
    get name(): string {
        return this.input.id;
    }

    constructor(
        private http: HttpClient,
        private changeDetector: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        private imageService: ImageInputService,
    ) { }

    public ngAfterContentInit(): void {
        const value = this.input.ngControl.value;

        if (!value) {
            return;
        }

        this.imageService.loadImageOnCanvas(value).subscribe((canvas) => {
            const name = value;
            this.imageData = canvas.toDataURL();
            this.background = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageData})`);
            canvas.toBlob((data: Blob) => this.setValue({ name, data, size: data.size, type: data.type }), this.format);
        });
    }

    public ngAfterViewInit(): void {
        this.isDisabled = coerceBooleanProperty(this.input.ngControl.disabled);
        this.changeDetector.detectChanges();
    }

    private setValue(value: RockImage) {
        this.input.ngControl.reset(value);

        if (value) {
            this.input.ngControl.control.markAsDirty();
            this.input.ngControl.control.markAsTouched();
            this.input.ngControl.control.updateValueAndValidity();
        }
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
                canvas.toBlob((data: Blob) => this.setValue({ name, data, size: data.size, type: data.type }), this.format);
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
