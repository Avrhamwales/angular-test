import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookComponent } from './components/book/book.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'login' },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'books', component: BooksComponent, title: 'books', children: [
          { path: ':bookId', component: BookComponent }
        ]
      },
      {
        path: 'wishlist', component: WishlistComponent, title: 'wishlist', children: [
          { path: ':bookId', component: BookComponent }
        ]
      },
      { path: '', redirectTo: 'books', pathMatch: 'full' },

    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
