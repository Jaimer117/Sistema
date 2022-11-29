import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataUsuarios, Usuarios } from "src/app/interfaces/data-usuarios.interface";

@Injectable({
    providedIn: 'root'
  })
  export class UsuariosService {
    data : Usuarios[]= [
      {
        'id': 1,
        'nombre': 'Pedro',
        'usuario': 'Pedro12h',
        'contrasena': '12337*99',
        'fechacreacion': '27/09/2022',
        'rol': 'Supervisor'
        
      },
      {
        'id': 2,
        'nombre': 'Juan',
        'usuario': 'Pedro12h',
        'contrasena': '12337*99',
        'fechacreacion': '27/09/2022',
        'rol': 'Administrador'
        
      }
    ];
   

    private tablausuarioData: BehaviorSubject<DataUsuarios> = new BehaviorSubject<DataUsuarios>({
      'data': [{
          'id': 0,
          'nombre': '',
          'usuario': '',
          'contrasena': '',
          'fechacreacion': '',
          'rol': ''
        }]
  });
  get gettablausuarioData() {
      return this.tablausuarioData.asObservable();
  }
  set settablausuarioData(data: DataUsuarios) {
      this.tablausuarioData.next(data);
  }
    EnviarMensajeConsola( mensaje : string){
   console.log(mensaje)
    }
  }
