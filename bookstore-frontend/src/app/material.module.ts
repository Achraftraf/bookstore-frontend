import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
