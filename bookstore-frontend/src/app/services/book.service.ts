import { Injectable } from '@angular/core';
import axios from 'axios';  // Import axios
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';  // Your backend API URL

  constructor() {}

  // Get all books
  getBooks(): Observable<Book[]> {
    return new Observable(observer => {
      axios.get<Book[]>(this.apiUrl)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // Add a new book
  addBook(book: Book): Observable<Book> {
    return new Observable(observer => {
      axios.post<Book>(this.apiUrl, book)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // Update an existing book
  updateBook(book: Book): Observable<Book> {
    return new Observable(observer => {
      axios.put<Book>(`${this.apiUrl}/${book.id}`, book)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  // Delete a book
  deleteBook(id: number): Observable<void> {
    return new Observable(observer => {
      axios.delete<void>(`${this.apiUrl}/${id}`)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
export type { Book };

