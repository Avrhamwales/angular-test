import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { Book, BooksRes } from '../model/books';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksRes: Subject<BooksRes> = new Subject();
  books: BehaviorSubject<BooksRes> = new BehaviorSubject(<BooksRes>{ king: '', totalItems: 0, items: [] })
  searchValue: string = ''
  // books: Book[] = []

  constructor(private http: HttpClient) { }

  getBooks(query: string, page = 1) {
    const startIndex = (page - 1) * 20
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&startIndex=${startIndex}&orderBy=newest`
    this.http.get<BooksRes>(url).subscribe(res => {
      this.searchValue = query
      this.books.next(res)
    });
  }

  getBookById(bookId: string) {
    const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    return this.http.get<Book>(url);
  }
}
