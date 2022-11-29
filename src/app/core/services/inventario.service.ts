import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataInventario } from "src/app/interfaces/data-inventario.interface";

@Injectable() export class InicioSesionService {
    private tablaInventarioData: BehaviorSubject<DataInventario> = new BehaviorSubject<DataInventario>({
        'data': [{
            'id': 0,
            'inventario': '',
            'fechaInicio': '',
            'fechaFin': '',
            'estado': ''
          }]
    });
    get getTablaInventarioData() {
        return this.tablaInventarioData.asObservable();
    }
    set setTablaInventarioData(data: DataInventario) {
        this.tablaInventarioData.next(data);
    }
}