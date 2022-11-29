import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private Router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });}

  ngOnInit(): void {
  }
  acceder(form) {

    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'admin' && password == 'ADMIN') {
      //redireccionamos al password
      this.fakeLoading();
    } else {
      //mostramos un mensaje de error
      this.error();
      this.form.reset();
    }
    console.log(form)
  }

  error() {
    this._snackBar.open("Usuario o contraseña ingresado son invalidos", '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {

      this.Router.navigate(['inicio']);
    }, 1500);
  }

}
