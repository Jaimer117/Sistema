import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataSession } from "src/app/interfaces/data-session.interface";

@Injectable() export class InicioSesionService {
    private sesionData: BehaviorSubject<DataSession> = new BehaviorSubject<DataSession>({
        "codigo": 0,
        "mensaje": "",
        "objeto": [{
            "idrol": 0,
            "clave": "",
            "nombre": "",
            "apaterno": "",
            "amaterno": "",
            "usuario": "",
            "status": 0,
            "rol": null,
            "permisos": [{
                "lectura": 0,
                "escritura": 0,
                "otros": 0,
                "permiso": "",
                "ruta": "",
                "icono": "",
                "status": 1,
                "submenu": [{
                    "nombre": "",
                    "url": "",
                    "icono": "",
                    "descripcion": "",
                    "lectura": 0,
                    "escritura": 0,
                    "otros": 0
                }]
            }],
            "token": ""
        }]
    });
    get SesionObservable() {
        return this.sesionData.asObservable();
    }
    set SesionObservableData(data: DataSession) {
        this.sesionData.next(data);
    }
}