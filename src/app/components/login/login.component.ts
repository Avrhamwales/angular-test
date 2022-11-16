import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  form = new FormGroup({
    username: new FormControl("", Validators.required)
  })

  ngOnInit(): void {

  }

  onSubmit() {
    const { username } = this.form.getRawValue();
    if (username) {
      this.userService.setUser(username);
      this.router.navigate(['/home']);
    }

  }

}
