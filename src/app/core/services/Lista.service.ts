import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataListaDiaria, ListaDiaria } from "src/app/interfaces/data-Lista.interface";


@Injectable({
    providedIn: 'root'
  })
export class ListaService {

  data: ListaDiaria[]=  [{
    'id': 1,
    'proyecto': 'Fsc-01',
    'actividad': 'soldar',
    'fechaInicio': '14/08/2022',
    'fechaFin': '16/12/2022',
    'tiempoestimado': '2 horas',
    'duracion': '1:30 minutos',
    'empleado': 'Luis',
    'supervisor': 'Pedro',
    'estado': 'Finalizado'
  }
  ];
    private tablaListaData: BehaviorSubject<DataListaDiaria> = new BehaviorSubject<DataListaDiaria>({
        'data': [{
  
            'id': 0,
            'proyecto': '',
            'actividad': '',
            'fechaInicio': '',
            'fechaFin': '',
            'tiempoestimado': '',
            'duracion':'',
            'empleado':'',
            'supervisor':'',
            'estado': '',
          }]
    });
    get gettablaListaData() {
        return this.tablaListaData.asObservable();
    }
    set settablaListaData(data: DataListaDiaria) {
        this.tablaListaData.next(data);
    }
    
  }