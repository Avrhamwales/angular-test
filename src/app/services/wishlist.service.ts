import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: { [id: string]: string } = {};

  constructor() { }

  getWishlist() {
    return this.wishlist;
  }

  setInWishlist(idBook: string, title: string) {
    this.wishlist[idBook] = title;
  }

  deleteFromWishlist(idbook: string) {
    delete this.wishlist[idbook];
  }
}
