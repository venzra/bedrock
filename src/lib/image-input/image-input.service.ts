import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { fromEvent, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ImageInputService {

    private EXIF = (<any> window).EXIF;

    constructor(
        private http: HttpClient,
    ) { }

    public validate(data): File | boolean {
        const validTypes = [ 'image/png', 'image/jpg', 'image/jpeg' ];
        const file = data ? data.files[ 0 ] : null;

        if (file) {
            if (!validTypes.includes(file.type)) {
                return false;
            }
        }
        return file || true;
    }

    public loadImageOnCanvas(imagePath: string): Observable<HTMLCanvasElement> {
        const image = new Image();
        const canvas = <HTMLCanvasElement> document.createElement('canvas');
        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        return this.http.get(imagePath, { responseType: 'blob' }).pipe(
            mergeMap((data: Blob) => {
                image.src = URL.createObjectURL(data);
                return fromEvent(image, 'load');
            }),
            map(() => {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                return canvas;
            }),
        );
    }

    public optimiseOnCanvas(imageSrc: string, targetWidth: number, targetHeight: number): Observable<HTMLCanvasElement> {
        const image = new Image();
        const canvas = <HTMLCanvasElement> document.createElement('canvas');
        const context: CanvasRenderingContext2D = canvas.getContext('2d');

        const exif = this.EXIF.readFromBinaryFile(this.base64ToArrayBuffer(imageSrc));
        const orientation = exif.Orientation;

        image.src = imageSrc;

        return fromEvent(image, 'load').pipe(
            map(() => {
                const rotatedImage = this.rotateImage(image, orientation);
                const scaledImage = this.scaleDown(rotatedImage, targetWidth, targetHeight);
                canvas.width = scaledImage.width;
                canvas.height = scaledImage.height;
                context.drawImage(scaledImage, 0, 0);
                return canvas;
            }),
        );
    }

    private base64ToArrayBuffer(base64): ArrayBuffer {
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[ i ] = binaryString.charCodeAt(i);
        }
        return <ArrayBuffer> bytes.buffer;
    }

    private rotateImage(image: HTMLCanvasElement | HTMLImageElement, orientation: number): HTMLCanvasElement {
        const canvas = <HTMLCanvasElement> document.createElement('canvas');
        const context: CanvasRenderingContext2D = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        let rotation = 0;
        let flip = false;
        switch (orientation) {
            case 2:
                flip = true;
                break;
            case 3:
                rotation = 180;
                break;
            case 4:
                rotation = 180;
                flip = true;
                break;
            case 5:
                rotation = 90;
                flip = true;
                break;
            case 6:
                rotation = 90;
                break;
            case 7:
                flip = true;
                rotation = 270;
                break;
            case 8:
                rotation = 270;
                break;
        }

        const x = image.width / 2;
        const y = image.height / 2;
        context.translate(x, y);
        context.rotate(rotation * Math.PI / 180);

        if (flip) {
            context.scale(1, -1);
        }

        context.drawImage(image, -x, -y);

        return canvas;
    }

    private reduceSize(image: HTMLCanvasElement | HTMLImageElement, reduction = 0.5): HTMLCanvasElement {
        const canvas = <HTMLCanvasElement> document.createElement('canvas');
        const context: CanvasRenderingContext2D = canvas.getContext('2d');

        canvas.width = (image.width * reduction);
        canvas.height = (image.height * reduction);
        context.scale(reduction, reduction);
        context.drawImage(image, 0, 0);

        return canvas;
    }

    private scaleDown(image: HTMLCanvasElement | HTMLImageElement, width: number, height: number): HTMLCanvasElement {
        let reductionRate = 0.5;

        while (image.width / 2 > width && image.height / 2 > height) {
            image = this.reduceSize(image, reductionRate);
        }

        reductionRate = image.width > image.height ? height / image.height : width / image.width;
        image = this.reduceSize(image, reductionRate);

        return <HTMLCanvasElement> image;
    }

}
