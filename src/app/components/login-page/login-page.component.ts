import { BackendServiceService } from './../../backend-service.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  displayError = false;
  displayLoading = false;


  loginForm = this._fb.group({
    username: [''],
    password: ['']
  });
  submit() {
    this.displayLoading = true;
    this._backend.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(result => {
      console.log('logged in');
      this.displayLoading = false;
      this._router.navigateByUrl('home');
      localStorage.setItem('login-token', result.token);
    }, err => {
      this.displayError = true;
      this.displayLoading = false;
    });
  }
  constructor(private _fb: FormBuilder, private _backend: BackendServiceService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('login-token') != null) {
      this._router.navigateByUrl('/home');
    }
    this.loginForm.valueChanges.subscribe(value => {
      this.displayError = false;
    });
  }

}
