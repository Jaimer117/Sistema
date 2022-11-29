import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpleadosComponent } from '../empleados.component';
import { Empleados } from 'src/app/interfaces/data-catalogos.interface';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  hide = true;
  ngOnInit(): void {
    if (this.data) console.log(this.NuevoEmpleado.patchValue(this.data));
    //this.CreateNuevo.get('plan')?.setValue('plsc')
  }
  constructor(  public dialogRef: MatDialogRef<EmpleadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any   ) {}

  cancelar(): void {
    this.dialogRef.close();
  }
  //formulario
  NuevoEmpleado = new FormGroup({
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
    console.log(this.NuevoEmpleado.value);
  }

  agregar(): void {
    let empleado: Empleados = { 
      id: this.NuevoEmpleado.get(' ')?.value,
      nombre: this.NuevoEmpleado.get('nombre')?.value,
      apellido: this.NuevoEmpleado.get('apellido')?.value,
      edad: this.NuevoEmpleado.get('edad')?.value,
      sexo: this.NuevoEmpleado.get('sexo')?.value,
      direccion: this.NuevoEmpleado.get('direccion')?.value,
      telefono: this.NuevoEmpleado.get('telefono')?.value,
      correo: this.NuevoEmpleado.get('correo')?.value,
      puesto: this.NuevoEmpleado.get('puesto')?.value
      
    };
    
console.log(empleado)
  }

}
