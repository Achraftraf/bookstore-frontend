import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule, // Add CommonModule here
    FormsModule, // Add FormsModule here
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  book: Book = { id: undefined, title: '', author: '', price: 0, description: '' };

  constructor(
    private bookService: BookService, // Injecting the book service
    private router: Router // Inject Router for navigation
  ) {}

  // Method to handle form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.book.id) {
        // Update existing book
        this.bookService.updateBook(this.book).subscribe({
          next: (updatedBook) => {
            console.log('Book updated successfully', updatedBook);
            this.redirectToMainPage(); // Redirect to main page after update
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
            this.redirectToMainPage(); // Redirect to main page after adding
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

  // Method to redirect to the main page
  redirectToMainPage(): void {
    this.router.navigate(['/books']); // Replace '/' with your main page route
  }
}