import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Book } from 'src/app/model/books';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book$!: Observable<Book>;
  wishlist: { [id: string]: string } = this.wishlistService.getWishlist();

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.booksService.getBookById(params.get('bookId')!))
    )
  }

  wishlistHandler(book: Book, add: boolean) {
    if (add) {
      this.wishlistService.setInWishlist(book.id, book.volumeInfo.title);
    } else {
      this.wishlistService.deleteFromWishlist(book.id);
    }
  }
}
