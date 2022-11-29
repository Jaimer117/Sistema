import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/core/services/UsuariosService.service';
import { Usuarios } from 'src/app/interfaces/data-usuarios.interface';
import { UsuariosComponent } from '../usuarios.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  hide = true;
  ngOnInit(): void {
    if (this.data) console.log(this.NuevoUsuario.patchValue(this.data));
    //this.CreateNuevo.get('plan')?.setValue('plsc')
  }
  constructor( private usuarioservice: UsuariosService,
     public dialogRef: MatDialogRef<UsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any   ) {}

  cancelar(): void {
    this.dialogRef.close();
  }
  //formulario
  NuevoUsuario = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    fechacreacion: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
  });
  recibeCrearNuevo() {
    console.log(this.NuevoUsuario.value);
  }

  agregar(): void {
    let usuario: Usuarios = { 
      id: this.NuevoUsuario.get(' ')?.value,
      nombre: this.NuevoUsuario.get('nombre')?.value,
      usuario: this.NuevoUsuario.get('usuario')?.value,
      contrasena: this.NuevoUsuario.get('contrasena')?.value,
      fechacreacion: this.NuevoUsuario.get('fechacreacion')?.value,
      rol: this.NuevoUsuario.get('rol')?.value,
      
    };
    this.usuarioservice.EnviarMensajeConsola("Usuario: "+ usuario)
//console.log(usuario)
  }

}
