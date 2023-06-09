import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class Credential{
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // username!: string;
  // password!: string;
  
  user!: Credential;

  @ViewChild("loginForm")
  loginForm!: NgForm;

  public login() {
    console.log(this.loginForm.value);
  }

  ngOnInit() {
    this.user = new Credential("James", "1234");
    setTimeout(() => {
      this.loginForm.setValue(this.user);
    })
  }
}
