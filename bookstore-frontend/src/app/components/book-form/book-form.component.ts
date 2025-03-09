import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'], // Add styles for the form
})
export class BookFormComponent {
  book: Book = { id: undefined, title: '', author: '', price: 0, description: '' }; // Initialize book object

  constructor(private bookService: BookService) {}

  // Method to handle form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.book.id) {
        // Update existing book
        this.bookService.updateBook(this.book).subscribe({
          next: (updatedBook) => {
            console.log('Book updated successfully', updatedBook);
            // Optionally, reset the form or navigate to another page
          },
          error: (error) => {
            console.error('Error updating book', error);
          },
        });
      } else {
        // Add new book
        this.bookService.addBook(this.book).subscribe({
          next: (newBook) => {
            console.log('Book added successfully', newBook);
            // Optionally, reset the form or navigate to another page
          },
          error: (error) => {
            console.error('Error adding book', error);
          },
        });
      }
    } else {
      console.log('Form is not valid');
    }
  }
}