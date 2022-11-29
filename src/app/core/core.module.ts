import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InicioSesionService } from "./services/inicio-sesion.service";

@NgModule({
    imports: [CommonModule],
    providers: [InicioSesionService]
}) export class CoreModule {

}