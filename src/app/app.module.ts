import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosLosHeroesComponent } from './todos-los-heroes/todos-los-heroes.component';
import { ServicioInfoService } from './servicio-info.service';
import { HeroeFavComponent } from './heroe-fav/heroe-fav.component';
import { FiltrarHeroeComponent } from './filtrar-heroe/filtrar-heroe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosLosHeroesComponent,
    HeroeFavComponent,
    FiltrarHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [ServicioInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
