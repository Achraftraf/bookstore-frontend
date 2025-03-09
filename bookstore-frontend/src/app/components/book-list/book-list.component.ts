import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { EditBookDialogComponent } from '../edit-book-dialog/edit-book-dialog.component';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  imports: [FormsModule,MatIcon,MatTableModule]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];  // Array to hold the list of books

  constructor(
    private bookService: BookService,  // Injecting the book service
    public dialog: MatDialog  // Injecting Angular Material Dialog service
  ) {}

  ngOnInit(): void {
    this.fetchBooks();  // Fetch books when component initializes
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;  // Assign the fetched books to the component's books array
      },
      (error: any) => {
        console.error('Error fetching books:', error);  // Error handling
      }
    );
  }

  editBook(book: Book): void {
    const dialogRef = this.dialog.open(EditBookDialogComponent, {
      width: '250px',
      data: book  // Pass the current book data to the dialog
    });

    dialogRef.afterClosed().subscribe(updatedBook => {
      if (updatedBook) {
        this.bookService.updateBook(updatedBook).subscribe(
          (data) => {
            // Find the index of the book being updated and replace it with the updated book
            const index = this.books.findIndex(b => b.id === updatedBook.id);
            if (index !== -1) {
              this.books[index] = updatedBook;
            }
            console.log('Book updated successfully', data);  // Log the update success
          },
          (error) => {
            console.error('Error updating book:', error);  // Error handling for updating book
          }
        );
      }
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(
      () => {
        this.books = this.books.filter(book => book.id !== id);  // Remove the deleted book from the list
        console.log('Book deleted successfully');  // Log the deletion success
      },
      (error: any) => {
        console.error('Error deleting book:', error);  // Error handling for deleting book
      }
    );
  }
}
