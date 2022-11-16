import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private user: BehaviorSubject<string> = new BehaviorSubject('');

  setUser(username: string) {
    this.isLogin = true;
    this.user.next(username);

  }

  isLogin: boolean = false

  getUser(): Observable<string> {
    return this.user.asObservable()
  }
}
