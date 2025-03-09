import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.css']
})
export class EditBookDialogComponent {
  updatedBook: Book;  // Store the updated book data

  constructor(
    public dialogRef: MatDialogRef<EditBookDialogComponent>,  // Reference to close the dialog
    @Inject(MAT_DIALOG_DATA) public data: Book  // Inject the book data passed from the parent component
  ) {
    this.updatedBook = { ...data };  // Initialize with the data passed in
  }

  // Close the dialog without saving the changes
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Submit the updated book data
  onSave(): void {
    this.dialogRef.close(this.updatedBook);
  }
}
