import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InicioSesionService } from 'src/app/core/services/inicio-sesion.service';
import { DataSession } from 'src/app/interfaces/data-session.interface';

@Component({
  selector: 'app-tarjeta-opcion',
  templateUrl: './tarjeta-opcion.component.html',
  styleUrls: ['./tarjeta-opcion.component.css']
})
export class TarjetaOpcionComponent implements OnInit {
  @Input() permiso!: string;
  data: DataSession;
  data$: Observable<DataSession>;
  //Recibimos los datos guardados en la sesion
  constructor(private inicioSesionService: InicioSesionService) {
    this.data={'codigo':0, 'mensaje':'', 'objeto':[]};
    this.data$ = inicioSesionService.SesionObservable;
    this.data$.subscribe(data => this.data = data); //Nos subscribimos para obtener actualizados los datos
  }

  ngOnInit(): void {
  }

}
