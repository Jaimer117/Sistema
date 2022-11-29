import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/core/services/UsuariosService.service';
import { Usuarios } from 'src/app/interfaces/data-usuarios.interface';
import { AgregarComponent } from './agregar/agregar.component';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  deshabilitar = true;
  item !: Usuarios;
  seleccionado:any;
  listatemporal:Usuarios[]=[];
  idfiltro:number=0;
  titulos: string[] =
   ['id',
   'Nombre', 
   'Usuario',
    'Contrasena', 
    'Fecha de Creacion',
      'Rol'];
  
      range = new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      });
  
  constructor(public dialog: MatDialog, public usuariosService:UsuariosService) {
    this.listatemporal=this.usuariosService.data;
  }


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
    this.item = this.usuariosService.data.find((item) => item.id == id)!;
    console.log(this.item);
  }
  openedit(): void {let dialogRef = this.dialog.open(AgregarComponent,{data:this.item} );
  dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');
 });
}


//eliminar 
Eliminar(){
  {}
  alert('Deseas eliminar este usuario .');
  
  let indexlista=this.usuariosService.data.findIndex(d=> d.id ==this.seleccionado);
  this.usuariosService.data.splice(indexlista,1);
 return
 }




 Filtro(){


  let id=this.idfiltro;
 // let ano=this.anofiltro;
  if( id>0  ){
    const temp = this.listatemporal.filter(function (d:Usuarios) {
      return d.id == id;
    });
    this.usuariosService.data=temp;
  }

  
  if (this.range.controls['start'].valid && this.range.controls['end'].valid && this.range.value.start != null && this.range.value.end != null){
    console.log("rango de fecah" ,this.range.value)
    }
    else{
      warningAlert()
    }
  };

  cancelarFiltro(){
    this.usuariosService.data=this.listatemporal;
    this.range.controls['start'].reset()
    this.range.controls['end'].reset()

   }

}
function warningAlert() {
  throw new Error('Function not implemented.');
}

