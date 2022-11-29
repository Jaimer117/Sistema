import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  hide = true;
  ngOnInit(): void {
   
    //this.CreateNuevo.get('plan')?.setValue('plsc')
  }
  constructor(  ) {}

  cancelar(): void {
   
  }
  //formulario
  NuevoUsuario = new FormGroup({
    id: new FormControl(''),
    usuario: new FormControl('', Validators.required),
    nuevousuario: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    nuevacontrasena: new FormControl('', Validators.required),
  
  });
  recibeCrearNuevo() {
    console.log(this.NuevoUsuario.value);
  }

  agregar(): void {
  
    

  }
}
