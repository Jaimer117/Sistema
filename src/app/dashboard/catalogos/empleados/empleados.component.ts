import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from './agregar/agregar.component';
import { Empleados } from 'src/app/interfaces/data-catalogos.interface';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  deshabilitar = true;
  item !: Empleados;

  titulos : string[]= ['id', 'nombre','apellido', 'edad', 'sexo','direccion','telefono','correo','puesto'];
  data : Empleados[]=[
    {
    'id': 1,
    'nombre': 'Joel',
    'apellido': 'Ramirez Perez',
    'edad': '25',
    'sexo': 'M',
    'direccion': 'Los Sauces',
    'telefono': '9821783128123',
    'correo': 'ejemplo@adf.com',
    'puesto': 'soldador'
  },
  {
    'id': 2,
    'nombre': 'Pedro',
    'apellido': 'Sanchez Gonzales',
    'edad': '30',
    'sexo': 'M',
    'direccion': '8 norte,Los Laureles',
    'telefono': '9821783128123',
    'correo': 'ejemplo2@adf.com',
    'puesto': 'soldador2'
  }];
  constructor(public dialog: MatDialog) {}
  
 //abrir dialogo modal
 openDialog(): void {
  let dialogRef = this.dialog.open(AgregarComponent, {});

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
  });
}

ngOnInit(): void {
}
actionbutton(id: any) {
  this.deshabilitar = false;
  this.item = this.data.find((item) => item.id == id)!;
  console.log(this.item);
}
openedit(): void {let dialogRef = this.dialog.open(AgregarComponent,{data:this.item} );
dialogRef.afterClosed().subscribe(result => {
 console.log('The dialog was closed');
});
}
}
