import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, NgForm,} from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookService, Book } from '../../services/book.service';  // Import BookService and Book interface

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,MatLabel
  ],
  templateUrl: './book-form.component.html',
})
export class BookFormComponent {
  book: Book = { id: undefined, title: '', author: '', price: 0, description: '' };  // Book object initialized

  constructor(private bookService: BookService) {}

  // Method to handle form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Check if it's an existing book or a new book
      if (this.book.id) {
        // If the book has an id, update the book
        this.bookService.updateBook(this.book).subscribe(
          (updatedBook) => {
            console.log('Book updated successfully', updatedBook);
            // You can redirect or show a success message here
          },
          (error) => {
            console.error('Error updating book', error);
            // Show an error message if the update fails
          }
        );
      } else {
        // If the book doesn't have an id, add a new book
        this.bookService.addBook(this.book).subscribe(
          (newBook) => {
            console.log('Book added successfully', newBook);
            // You can redirect or show a success message here
          },
          (error) => {
            console.error('Error adding book', error);
            // Show an error message if the add fails
          }
        );
      }
    } else {
      console.log('Form is not valid');
    }
  }
}
