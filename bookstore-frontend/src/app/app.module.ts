import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // for ngModel

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditBookDialogComponent } from './components/edit-book-dialog/edit-book-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    EditBookDialogComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,         // Add the required modules here
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,            // Add FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
