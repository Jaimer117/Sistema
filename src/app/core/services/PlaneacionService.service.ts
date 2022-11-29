import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataPlaneacion, Planeacion } from "src/app/interfaces/data-planeacion.interface";

@Injectable({
    providedIn: 'root'
  })
  export class PlaneacionService {
    data: Planeacion[] = [
      {
        id: 1,
        plan: 'plan 1',
        proyecto: 'Fsc-01',
        fechaInicio: '13/08/2022',
        fechaFin: '16/12/2022',
        estado: 'Activo',
      },
      {
        id: 2,
        plan: 'plan 2',
        proyecto: 'Fsc-02',
        fechaInicio: '13/08/2022',
        fechaFin: '16/12/2022',
        estado: 'Suspendido',
      },
      {
        id: 3,
        plan: 'plan 3',
        proyecto: 'Fsc-02',
        fechaInicio: '13/08/2022',
        fechaFin: '16/12/2022',
        estado: 'Suspendido',
      },
      {
        id: 4,
        plan: 'plan 4',
        proyecto: 'Fsc-02',
        fechaInicio: '13/08/2021',
        fechaFin: '16/12/2021',
        estado: 'Suspendido',
      },
      
  
       ];
     
    private tablaplaneacionData: BehaviorSubject<DataPlaneacion> = new BehaviorSubject<DataPlaneacion>({
      'data': [{
          'id': 0,
          'plan': '',
          'proyecto': '',
          'fechaInicio': '',
          'fechaFin': '',
          'estado': ''
        }]
  });
  get gettablaplaneacionData() {
      return this.tablaplaneacionData.asObservable();
  }
  set settablaplaneacionData(data: DataPlaneacion) {
      this.tablaplaneacionData.next(data);
  }
    EnviarMensajeConsola( mensaje : string){
   console.log(mensaje)
    }
  }
