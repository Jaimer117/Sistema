import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolesPermiso } from 'src/app/interfaces/data-roles-permisos.interface';
import { AgregarComponent } from './agregar/agregar.component';

@Component({
  selector: 'app-rol-permiso',
  templateUrl: './rol-permiso.component.html',
  styleUrls: ['./rol-permiso.component.css']
})
export class RolPermisoComponent implements OnInit {
  deshabilitar = true;
  item !: RolesPermiso;

  titulos : string[]= ['puesto','eliminar', 'agregar', 'editar'];
  data : RolesPermiso[]=[
    {
    'puesto': 'administrador',
    'eliminar': '',
    'agregar': '',
    'editar': ''
  },
  {
    'puesto': 'empleado',
    'eliminar': '',
    'agregar': '',
    'editar': ''
  },
  {
    'puesto': 'jefe de cuadrilla',
    'eliminar': '',
    'agregar': '',
    'editar': ''
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

}
