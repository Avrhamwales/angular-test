import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WishListComponent } from './components/wishlist/wish-list.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    WishListComponent,
    HomeComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
