import {
  Component,
  OnInit,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Planeacion } from 'src/app/interfaces/data-planeacion.interface';
import { PlaneacionCreateComponent } from './planeacion-create/planeacion-create.component';
import { PlaneacionService } from '../../../core/services/PlaneacionService.service';
import { FormGroup, FormControl } from '@angular/forms';





@Component({
  selector: 'app-plan-de-produccion',
  templateUrl: './plan-de-produccion.component.html',
  styleUrls: ['./plan-de-produccion.component.css'],
})
export class PlanDeProduccionComponent implements OnInit {
  deshabilitar = true;
  item!: Planeacion;
  dataDialog!: any;
  seleccionado:any;
  listatemporal:Planeacion[]=[];
  idfiltro:number=0;
  anofiltro: number=0;


  titulos: string[] = [
    'id',
    'plan',
    'proyecto',
    'fecha de Inicio',
    'fecha de Fin',
    'Estado',
  ];

  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  
    
  constructor(public dialog: MatDialog, public planeacionservice:PlaneacionService ) {}
  ngOnInit(): void {

    this.listatemporal=this. planeacionservice.data;
  }


 //abrir dialogo modal
  openDialog(): void {
    let dialogRef = this.dialog.open(PlaneacionCreateComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dataDialog = result;
    });
  }

  
 //accion de los botones ditar y eliminar
  actionbutton(id: any) {
    this.deshabilitar = false;
    this.item = this.planeacionservice.data.find((item) => item.id == id)!;
    this.seleccionado=this.item.id;
    console.log(this.item);
  }
  //abrir dialogo modal para editar 
  openedit(): void {
    let dialogRef = this.dialog.open(PlaneacionCreateComponent, {
      data: this.item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dataDialog = result;
    });
  }

 //eliminar 
 Eliminar(){
  {}
  alert('Deseas eliminar este plan .');
  
  let indexlista=this.planeacionservice.data.findIndex(d=> d.id ==this.seleccionado);
  this.planeacionservice.data.splice(indexlista,1);
 return
 }




 Filtro(){


  let id=this.idfiltro;
 // let ano=this.anofiltro;
  if( id>0  ){
    const temp = this.listatemporal.filter(function (d: Planeacion) {
      return d.id == id;
    });
    this.planeacionservice.data=temp;
  }

  
  if (this.range.controls['start'].valid && this.range.controls['end'].valid && this.range.value.start != null && this.range.value.end != null){
    console.log("rango de fecah" ,this.range.value)
    }
    else{
      warningAlert()
    }
  };
 
/*

  if( ano>0  ){
    const temp = this.listatemporal.filter(function (d: Planeacion) {

   
      return d.fechaInicio.substring(6,10) == ano.toString();
  
      
    });
    this.planeacionservice.data=temp;
  }
  else{
    this.planeacionservice.data=this.listatemporal;
  }*/
 // console.log('Filtro');

   cancelarFiltro(){
    this.planeacionservice.data=this.listatemporal;
    this.range.controls['start'].reset()
    this.range.controls['end'].reset()

   }

 }



function warningAlert() {
  throw new Error('Function not implemented.');
}

