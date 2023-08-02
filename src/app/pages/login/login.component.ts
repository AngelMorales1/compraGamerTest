import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dni: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

      localStorage.setItem("user", JSON.stringify(this.loginForm.value))

      this.snackBar.open('Usuario registrado correctamente', 'Close',);

      this.loginForm.reset();

    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get name() {
    return this.loginForm.get('name');
  }

  get surname() {
    return this.loginForm.get('surname');
  }

  get phone() {
    return this.loginForm.get('phone');
  }
  
  get dni() {
    return this.loginForm.get('phone');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
