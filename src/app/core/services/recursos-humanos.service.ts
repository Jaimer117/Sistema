import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject } from 'rxjs';
import { Nomina, NominaDetalle, DiasLaborados,Proyectos,HorasExtra } from "src/app/interfaces/data-recursos-humanos.interface";

@Injectable({
  providedIn: 'root'
})
export class RecursosHumanosService {

  api: string = "http://traylfer-sop1:8083/";
  headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJhZG1pbiIsIm5iZiI6MTY2Mjk5Njc0OCwiZXhwIjoxNjY4MTgwNzQ4LCJpYXQiOjE2NjI5OTY3NDh9.lxb6ydoN4yXRXUznmzE5AjDL3x6v1S-Hf8-jUDmt7u0');
  constructor(private http: HttpClient) {}

  /****************************NOMINA**************************** */
  getNomina(): Observable<Nomina> {
    let direccion = this.api + "api/RH/Nomina";
    return this.http.get<Nomina>(direccion, { headers: this.headers });
  }

    /************DETALLE NOMINA DIRECTA E INDIRECTA************* */
  getNominaIndirectaDetalle(idNomina: string): Observable<NominaDetalle> {
    let direccion = this.api + "api/RH/Nomina/Indirecta?nominaId="+idNomina;
    return this.http.get<NominaDetalle>(direccion, { headers: this.headers });
  }
  getNominaDirectaDetalle(idNomina: string): Observable<NominaDetalle> {
    let direccion = this.api + "api/RH/Nomina/Directa?nominaId="+idNomina;
    return this.http.get<NominaDetalle>(direccion, { headers: this.headers });
  }

  /*****************MODALES NOMINA INDIRECTA********************** */
  getDiasLaborados(idNominaDetalle: string): Observable<DiasLaborados> {
    let direccion = this.api + "api/RH/Nomina/DiasLab?idNominaDetalle="+idNominaDetalle;
    return this.http.get<DiasLaborados>(direccion, { headers: this.headers });
  }
  postDiasLaborados(data: any, idNominaDetalle: string): Observable<DiasLaborados> {
    let direccion = this.api + "api/RH/Nomina/DiasLab?idNominaDetalle="+idNominaDetalle;
    return this.http.post<DiasLaborados>(direccion, data, { headers: this.headers }).pipe(catchError(err=>throwError(alert(err.error.Mensaje))));
  }

  getHorasExtra(idNominaDetalle: string): Observable<HorasExtra> {
    let direccion = this.api + "api/RH/Nomina/HorasExtra?idNominaDetalle="+idNominaDetalle;
    return this.http.get<HorasExtra>(direccion, { headers: this.headers });
  }
  postHorasExtra(data: any, idNominaDetalle: string): Observable<HorasExtra> {
    let direccion = this.api + "api/RH/Nomina/HorasExtra?idNominaDetalle="+idNominaDetalle;
    return this.http.post<HorasExtra>(direccion, data, { headers: this.headers }).pipe(catchError(err=>throwError(alert(err.error.Mensaje))));
  }

  getProyectos(): Observable<Proyectos> {
    let direccion = this.api + "api/RH/Nomina/Proyectos";
    return this.http.get<Proyectos>(direccion, { headers: this.headers });
  }
  
}
