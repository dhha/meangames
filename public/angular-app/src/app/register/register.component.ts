import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup;
  
  constructor(private _formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group({
      name: "",
      username: "",
      password: "",
      repeatPassword: ""
    });

    // this.registrationForm = new FormGroup({
    //   name: new FormControl("Jack"),
    //   username: new FormControl(),
    //   password: new FormControl(),
    //   repeatPassword: new FormControl(),
    // });
  }

  public submit() {
    console.log(this.registrationForm.value);
  }
}
