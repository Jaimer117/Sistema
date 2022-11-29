import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/shared/material-module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { BarraPrincipalComponent } from './barra-principal/barra-principal.component';
import { TablaComponent } from './componentes-genericos/tabla/tabla.component';
import { TarjetaOpcionComponent } from './componentes-genericos/tarjeta-opcion/tarjeta-opcion.component';
import { HomeComponent } from './home/home.component';


import { NotFoundComponent } from './not-found/not-found.component';
import { PlanDeProduccionComponent } from './planeacion/plan-de-produccion/plan-de-produccion.component';
import { PlaneacionCreateComponent } from './planeacion/plan-de-produccion/planeacion-create/planeacion-create.component';
import { PlaneacionComponent } from './planeacion/planeacion.component';


import { ReportesComponent } from './reportes/reportes.component';
import {HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './planeacion/principal/principal.component';




import { ReporteComponent } from './reportes/reporte/reporte.component';
import { SpinnerComponent } from './componentes-genericos/spinner/spinner.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { EmpleadosComponent } from './catalogos/empleados/empleados.component';
import { InsumosComponent } from './catalogos/insumos/insumos.component';
import { ProyectosComponent } from './catalogos/proyectos/proyectos.component';

import { PaginacionPipe } from '../pipes/paginacion.pipe';

import { ConfiguracionComponent } from './administracion/configuracion/configuracion.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PerfilComponent } from './administracion/perfil/perfil.component';
import { AgregarComponent } from './administracion/usuarios/agregar/agregar.component';
import { EditarComponent } from './administracion/perfil/editar/editar.component';
import { DiagramaComponent } from './planeacion/diagrama/diagrama.component';
import { EditService, GanttModule, SelectionService, ToolbarService,} from '@syncfusion/ej2-angular-gantt';
import { RolesComponent } from './roles/roles.component';
import { RolPermisoComponent } from './Roles/rol-permiso/rol-permiso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxAllModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'
import { ButtonModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule, DropDownListModule, DropDownTreeModule, ListBoxModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [
    BarraPrincipalComponent,
    HomeComponent,
    SpinnerComponent,
    PlaneacionComponent,
    TablaComponent,
    TarjetaOpcionComponent,
    PlaneacionCreateComponent,
  
   
    NotFoundComponent,

    PlanDeProduccionComponent,
    DashboardComponent,

    ReportesComponent,
    PrincipalComponent,
    ReporteComponent,
    PaginacionPipe,
  

    
 
      CatalogosComponent,
      EmpleadosComponent,
      InsumosComponent,
      ProyectosComponent,

      //configuracion
      ConfiguracionComponent,UsuariosComponent,AdministracionComponent, PerfilComponent, AgregarComponent, EditarComponent, DiagramaComponent, RolesComponent, RolPermisoComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule ,
    GanttModule,
    DropDownListModule,
     CheckBoxAllModule,
     TextBoxAllModule, 
     NumericTextBoxAllModule,
     MultiSelectAllModule,
     SplitterModule,
     ListBoxModule,
     MenuModule,
     DropDownTreeModule,
       ButtonModule
   

     
  ],
  providers: [ToolbarService, EditService, SelectionService]
  
  
})
export class DashboardModule { }
