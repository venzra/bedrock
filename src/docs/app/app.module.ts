import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
