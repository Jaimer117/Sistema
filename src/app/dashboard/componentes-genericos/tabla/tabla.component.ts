import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginacionPipe } from 'src/app/pipes/paginacion.pipe';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  @Input() rutaDetalle!: string;
  @Input() rutaAgregar!: string;
  @Input() titulos!: any;
  @Input() data!: any;
  @Input() id!: string;
  @Input() accionsbutonact: boolean = false;
  @Output() enviarItem: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}
  originalOrder() {
    return 0;
  }


  items: any =[{}]

  detalle(detalleId: any) {
    if (this.accionsbutonact) {
      this.enviarItem.emit(detalleId);
    } else {
      this.router.navigate([this.rutaDetalle], {
        queryParams: { idDetalle: detalleId },
      });
    }
  }

  agregar() {
    this.router.navigate([this.rutaAgregar]);
  }
  page_size: number =1
  page_number: number=3

  ngOnInit() {

  }
  SeleccionarPagina(e : PageEvent){
    this.page_size= e.pageSize
    this.page_number= e.pageIndex + 1
console.log(e)

  }
  
}
