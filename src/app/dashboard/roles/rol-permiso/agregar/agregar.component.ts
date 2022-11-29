import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesPermiso } from 'src/app/interfaces/data-roles-permisos.interface';
import { RolPermisoComponent } from '../rol-permiso.component';

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
  constructor(  public dialogRef: MatDialogRef<RolPermisoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any   ) {}

  cancelar(): void {
    this.dialogRef.close();
  }
  //formulario
  NuevoUsuario = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    puesto: new FormControl('', Validators.required)
  });
  recibeCrearNuevo() {
    console.log(this.NuevoUsuario.value);
  }

  agregar(): void {
    let rolespermiso: RolesPermiso = {
      puesto: this.NuevoUsuario.get('puesto')?.value,
      eliminar: this.NuevoUsuario.get('eliminar')?.value,
      agregar: this.NuevoUsuario.get('agregra')?.value,
      editar: this.NuevoUsuario.get('editar')?.value
    };
    
console.log(rolespermiso)
  }

}
