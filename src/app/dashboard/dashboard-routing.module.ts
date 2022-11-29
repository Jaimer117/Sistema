import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaneacionComponent } from './planeacion/planeacion.component';
import { DashboardComponent } from './dashboard.component';




import { PrincipalComponent } from './planeacion/principal/principal.component';
import { PlanDeProduccionComponent } from './planeacion/plan-de-produccion/plan-de-produccion.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { ConfiguracionComponent } from './administracion/configuracion/configuracion.component';

import { AdministracionComponent } from './administracion/administracion.component';
import { PerfilComponent } from './administracion/perfil/perfil.component';
import { DiagramaComponent } from './planeacion/diagrama/diagrama.component';
import { RolesComponent } from './roles/roles.component';
import { RolPermisoComponent } from './Roles/rol-permiso/rol-permiso.component';





const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent},
  
 
  { path: 'Planeacion', component: PlaneacionComponent ,
  children: [
    {  path: '', component:  PrincipalComponent},
    { path: 'Plan', component: PlanDeProduccionComponent },
    { path: 'Diagrama', component: DiagramaComponent } 
   ]
},
  { path:  'Administracion', component: AdministracionComponent,},
  { path:'Administracion/Usuario',component:UsuariosComponent},
  { path:'Administracion/Configuracion',component:ConfiguracionComponent},
  { path: 'Administracion/Perfil', component: PerfilComponent},


  { path:  'Roles', component: RolesComponent,},
  { path:  'Roles/Permisos', component: RolPermisoComponent,},
  
]},
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, CommonModule]
})
export class DashboardRoutingModule { }
