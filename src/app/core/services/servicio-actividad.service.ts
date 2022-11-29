import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actividades, DataActividades } from 'src/app/interfaces/data-Actividades.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioActividadService {
  data :Actividades[]= [
    {
      'id': 1,
      'descripcion': 'Soldar',
      'tiempoestimado': '2 horas',
      'fechainicio': '14/08/2022',
      'fechafin': '16/12/2022',
      'supervisor': 'Pedro',
      'estado': 'Activo'
      
    },
    { 'id': 2,
    'descripcion': 'pintar',
    'tiempoestimado': '4 horas',
    'fechainicio': '14/08/2022',
    'fechafin': '16/12/2022',
    'supervisor': 'Jose',
    'estado': 'Finalizado'},
    { 'id': 3,
    'descripcion': 'colocar',
    'tiempoestimado': '1 horas',
    'fechainicio': '14/08/2022',
    'fechafin': '16/12/2022',
    'supervisor': 'Ramos',
    'estado': 'Suspendido'}
  ];
  constructor() { }
  private tablaActividadesData: BehaviorSubject<DataActividades> = new BehaviorSubject<DataActividades>({
    'data': [{
        'id': 0,
        'descripcion': '',
        'tiempoestimado': '',
        'fechainicio': '',
        'fechafin': '',
        'supervisor':'',
        'estado': ''
      }]
});
get gettablaActividadesData() {
    return this.tablaActividadesData.asObservable();
}
set settablaActividadesData(data: DataActividades) {
    this.tablaActividadesData.next(data);
}
EnviarConsola( mensaje : string){
    console.log(mensaje)
     }
}
