import { Component, OnInit } from '@angular/core';
import { ServicioInfoService } from '../servicio-info.service';

@Component({
  selector: 'app-heroe-fav',
  templateUrl: './heroe-fav.component.html',
  styleUrls: ['./heroe-fav.component.css']
})
export class HeroeFavComponent implements OnInit {

  //Se inicializa el servicio de datos.
  constructor(public servicioInfo: ServicioInfoService){}

  
  // *** VARIABLES ***

  //Array para almacenar los datos del servicio.
  arrayDatos: any[] = this.servicioInfo.get();

  //Variables para almacenar los datos de mi heroe fav, sabiendo ya su posicion en arrayDatos.
  //Estas variables son las que luego se muestran en el HTML, accediendo a ellas con {{}}.
  heroeFavNom = this.arrayDatos[5].nombre;
  heroeFavImg = this.arrayDatos[5].img;
  heroeFavApa = this.arrayDatos[5].aparicion;
  heroeFavCasa = this.arrayDatos[5].casa;

  ngOnInit(): void {
  }

}
