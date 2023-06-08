import { Component, OnInit } from '@angular/core';
import { ServicioInfoService } from '../servicio-info.service';

@Component({
  selector: 'app-todos-los-heroes',
  templateUrl: './todos-los-heroes.component.html',
  styleUrls: ['./todos-los-heroes.component.css']
})
export class TodosLosHeroesComponent implements OnInit {

  //Se inicializa el servicio de datos.
  constructor(public servicioInfo: ServicioInfoService){}

  // *** VARIABLES ***

  //Array para almacenar los datos del servicio. Se utilizara con la directiva ngFor en el HTML para mostrar la información.
  arrayDatos: any[] = this.servicioInfo.get();

  ngOnInit(): void {
  }

}