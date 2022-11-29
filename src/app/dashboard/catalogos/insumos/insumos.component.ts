import { Component, OnInit } from '@angular/core';
import { Insumos } from 'src/app/interfaces/data-insumos.interface';
import { MatDialog } from '@angular/material/dialog';
import { AgregarComponent } from './agregar/agregar.component';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {
 
  deshabilitar = true;
  item !: Insumos;

  titulos : string[]= ['id', 'nombre', 'codigo', 'seleccion'];
  data : Insumos[]=[
    {
    'id': 1,
    'nombre': 'Tornillo',
    'codigo': 'T-01'
  },
   {
    'id': 2,
    'nombre': 'Pintura-Roja',
    'codigo': 'P-R05'
  }];
  constructor(public dialog: MatDialog) { }
 
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
