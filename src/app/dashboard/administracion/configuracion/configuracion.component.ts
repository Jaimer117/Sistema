import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  deshabilitar = true;
 // item !: Actividades;
 
  titulos: string[] = [];
  data = [
    {
     
      
    }
  ];
 
  
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
    }

  ngOnInit(): void {
  }
  actionbutton(id: any){


  }
  openedit(): void {
  }

}
