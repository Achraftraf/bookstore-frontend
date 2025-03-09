import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-edit-book-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.css'],
})
export class EditBookDialogComponent {
  updatedBook: Book; // Store the updated book data
  isSaving: boolean = false; // Track saving state

  constructor(
    public dialogRef: MatDialogRef<EditBookDialogComponent>, // Reference to close the dialog
    @Inject(MAT_DIALOG_DATA) public data: Book // Inject the book data passed from the parent component
  ) {
    this.updatedBook = { ...data }; // Initialize with the data passed in
  }

  // Close the dialog without saving the changes
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Submit the updated book data
  onSave(): void {
    this.isSaving = true; // Show loading spinner
    setTimeout(() => {
      this.dialogRef.close(this.updatedBook); // Simulate a delay for saving
      this.isSaving = false; // Hide loading spinner
    }, 1000); // Simulate a 1-second delay
  }

  // Check if the form is valid
  isFormValid(): boolean {
    return (
      !!this.updatedBook.title &&
      !!this.updatedBook.author &&
      this.updatedBook.price >= 0
    );
  }
}