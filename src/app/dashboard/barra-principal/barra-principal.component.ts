import { Component, OnDestroy } from '@angular/core';
import { InicioSesionService } from 'src/app/core/services/inicio-sesion.service';
import { DataSession } from 'src/app/interfaces/data-session.interface';

@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnDestroy {

  public fillerNav: DataSession = {
    "codigo": 200,
    "mensaje": "OK",
    "objeto": [{
      "idrol": 1,
      "clave": "ADMIN",
      "nombre": "Administrador",
      "apaterno": "",
      "amaterno": "",
      "usuario": "admin",
      "status": 1,
      "rol": null,
      "permisos": [{
        "lectura": 1,
        "escritura": 1,
        "otros": 1,
        "permiso": "Home",
        "ruta": "home",
        "icono": "home",
        "status": 1,
        "submenu": []
      }, 
       {
        "lectura": 1,
        "escritura": 1,
        "otros": 1,
        "permiso": "Planeacion",
        "ruta": "Planeacion",
        "icono": "schedule",
        "status": 1,
        "submenu": [{
          "nombre": "Plan de Produccion",
          "url": "Plan",
          "icono": "schedule",
          "descripcion": "Produccion",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        },
        {
          "nombre": "Diagrama Produccion",
          "url": "Diagrama",
          "icono": " pivot_table_chart",
          "descripcion": "Diagrama",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        }]
      }, 
       {
        "lectura": 1,
        "escritura": 1,
        "otros": 1,
        "permiso": "Reportes",
        "ruta": "Reportes",
        "icono": "task",
        "status": 1,
        "submenu": [{
          "nombre": "Reporte 1",
          "url": "nomina",
          "icono": "feed",
          "descripcion": "referente a reportes",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        }]
      },
      
      {
        "lectura": 1,
        "escritura": 1,
        "otros": 1,
        "permiso": "Administracion",
        "ruta": "Administracion",
        "icono": "settings_applications",
        "status": 1,
        "submenu": [{
          "nombre": "Usuario",
          "url": "Usuario",
          "icono": "group",
          "descripcion": "referente a  Usuarios",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        },
        {
          "nombre": "Perfil",
          "url": "Perfil",
          "icono": "person",
          "descripcion": "referente a Perfil ",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        },
        {
          "nombre": "Configuracion",
          "url": "Configuracion",
          "icono": "settings",
          "descripcion": "referente a Configuracion ",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        }]
      }
      , {
        "lectura": 1,
        "escritura": 1,
        "otros": 1,
        "permiso": "Roles",
        "ruta": "Roles",
        "icono": "manage_accounts",
        "status": 1,
        "submenu": [{
          "nombre": "Roles",
          "url": "Permisos",
          "icono": "manage_accounts",
          "descripcion": "referente a roles y permisos",
          "lectura": 1,
          "escritura": 1,
          "otros": 1
        }]
      } 
    
    ],
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhZG1pbiIsInVuaXF1ZV9uYW1lIjoiYWRtaW4iLCJuYmYiOjE2NjAxNzI2ODYsImV4cCI6MTY2NTM1NjY4NiwiaWF0IjoxNjYwMTcyNjg2fQ.7Q_zXQJOupe4PxNd3yTx8V-1Lv0OZ6hX3eth1BDZmhM"
    }]
  };

  //Se actualiza el servicio con un objeto de tipo DataSession
  constructor(inicioSesionService: InicioSesionService) {
    inicioSesionService.SesionObservableData = this.fillerNav;
  }

  ngOnDestroy() {

  }
}