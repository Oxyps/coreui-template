import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = _formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  handleSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      console.log(this.loginForm);

      return;
    }

    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).toPromise()
      .then(response => {
        if (response && response.access_token) {
          this.authService.setToken(response.access_token);
          this.authService.setUser(response.user);

          this.router.navigateByUrl('/');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
}
