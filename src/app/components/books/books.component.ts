import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  books: Book[] = [];
  itemsInPage = 20;
  page = 1;
  totalPages = 0;
  form = new FormGroup({
    query: new FormControl(this.booksSrevice.searchValue, Validators.required)
  })

  constructor(private router: Router, public booksSrevice: BooksService) {
    this.booksSrevice.books.subscribe(res => {
      this.books = res.items
      // cala total pages
      this.totalPages = Math.ceil(res.totalItems / this.itemsInPage);
    })
  }

  search() {
    const { query } = this.form.getRawValue();
    if (query) {
      this.router.navigate(['/home/books'])
      this.booksSrevice.getBooks(query)
    }
  }
  navPage(plus: boolean) {
    const page = plus ? ++this.page : --this.page;
    this.booksSrevice.getBooks(this.booksSrevice.searchValue, page)
  }
}
