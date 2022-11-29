import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Planeacion } from 'src/app/interfaces/data-planeacion.interface';
import { PlaneacionService } from '../../../../core/services/PlaneacionService.service';


@Component({
  selector: 'app-planeacion-create',
  templateUrl: './planeacion-create.component.html',
  styleUrls: ['./planeacion-create.component.css'],
})
export class PlaneacionCreateComponent implements OnInit {
planeacion:Planeacion={fechaInicio:"",fechaFin:""};

  ngOnInit(): void {
    if (this.data) console.log(this.CreateNuevo.patchValue(this.data));
    //this.CreateNuevo.get('plan')?.setValue('plsc')
  }

  constructor(  private planeacionservice:PlaneacionService ,
    public dialogRef: MatDialogRef<PlaneacionCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any   ) {}

  cancelar(): void {
    this.dialogRef.close();
  }
  //formulario
  CreateNuevo = new FormGroup({
    id: new FormControl(''),
    plan: new FormControl('', Validators.required),
    proyecto: new FormControl('', Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
  });
  recibeCreateNuevo() {
    console.log(this.CreateNuevo.value);
  }

  agregar(): void {
    
   /*let planeacion: Planeacion = { 
      id: this.CreateNuevo.get(' ')?.value,
     plan: this.CreateNuevo.get('plan')?.value,
      proyecto: this.CreateNuevo.get(' proyecto')?.value,
   fechaInicio: this.CreateNuevo.get(' fechaInicio')?.value,
      fechaFin: this.CreateNuevo.get(' fechaFin')?.value,
      estado: this.CreateNuevo.get('estado')?.value,
    };*/
console.log(this.planeacion);
//this.planeacion.fechaInicio = this.CreateNuevo.get(' fechaInicio')?.value;
//this.planeacion.fechaFin =this.CreateNuevo.get(' fechaFin')?.value,
 this.planeacionservice.data.push(this.planeacion);
 console.log(this.planeacionservice.data)

    this.dialogRef.close();
    
    this.planeacionservice.EnviarMensajeConsola("persona: "+ this.planeacion)
    {
      alert('Se agrego correctamente.');
      return;
      
    }
   

    
  }
   
}
