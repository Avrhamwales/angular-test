import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user = '';

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUser().subscribe(user => { this.user = user });

  }

  ngOnInit(): void {
    if (!this.userService.isLogin) {
      this.router.navigate(['/'])
    }
  }

}
