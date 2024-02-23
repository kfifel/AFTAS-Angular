import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import * as sweetalert2 from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/**
 * Login-2 component
 */
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  showPassword: boolean = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  ngOnInit(): void {
    document.body.classList.add('auth-body-bg')
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  carouselOption: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
      680: {
        items: 1
      },
    }
  }

  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.isLoading = true;
      this.authenticationService.login(this.f.email.value, this.f.password.value)
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigateByUrl(this.returnUrl)
              .then(r => sweetalert2.default.fire({
                icon: 'success',
                title: 'Login Successful',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500
              }));
          },
          error: error => {
            console.error(error);
            this.error = error ? error.error?.message : '';
            this.isLoading = false;
          }
        });
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
