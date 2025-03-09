import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService, Book } from './book.service';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch books', () => {
    const mockBooks: Book[] = [
      { id: 1, title: 'Book One', author: 'Author One', price: 29.99 },
      { id: 2, title: 'Book Two', author: 'Author Two', price: 39.99 }
    ];

    service.getBooks().subscribe(books => {
      expect(books.length).toBe(2);
      expect(books).toEqual(mockBooks);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/books');
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });
});
