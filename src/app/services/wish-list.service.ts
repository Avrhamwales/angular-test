import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  private wishList: { [id: string]: string } = {};

  constructor() { }

  getWishList() {
    return this.wishList;
  }

  setWish(idBook: string, title: string) {
    this.wishList[idBook] = title;
  }
  deleteWish(idbook: string) {
    delete this.wishList[idbook];
  }
}
