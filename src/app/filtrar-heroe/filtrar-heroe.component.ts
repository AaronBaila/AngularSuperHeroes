import { Component, OnInit } from '@angular/core';
import { ServicioInfoService } from '../servicio-info.service';

@Component({
  selector: 'app-filtrar-heroe',
  templateUrl: './filtrar-heroe.component.html',
  styleUrls: ['./filtrar-heroe.component.css']
})
export class FiltrarHeroeComponent implements OnInit {

  ngOnInit(): void {
  }

  //Se inicializa el servicio de datos.
  constructor(public servicioInfo: ServicioInfoService){}


  // *** VARIABLES ***

  //Array para almacenar los datos del servicio.
  arrayDatos: any[] = this.servicioInfo.get();

  //Variables para filtrar por Heroe.
  heroeFiltroNom:string;
  heroeFiltroImg = "assets/img/desconocido.png";
  heroeFiltroApa:string;
  heroeFiltroCasa:string;

  //Array que almacena la posicion en el arrayDatos de los heroes filtrados por casa.
  heroesCasa:any[] = [];

  //Variables que permiten mostrar texto en el HTML si no encuentra la busqueda con los filtros.
  noExisteCasa:boolean = false;
  noExisteHeroe:boolean = false;


 // *** METODOS ***

  //Metodo que recoge por parametro el input del HTML y filtra por el nombre de Heroe.
  obtenerHeroe(filtroHeroe:String){
    let posicionHeroe = -1; //Variable que permite saber la posicion en el arrayDatos del Heroe filtrado.
    let existe = false; //Variable que indica si el nombre filtrado existe en la lista.

    //For que recorre arrayDatos.
    for (let i = 0; i < this.arrayDatos.length; i++) {
      //Mediante el siguiente if compara cada uno de los nombres de arrayDatos con el string pasado desde el HTML.
      if(this.arrayDatos[i].nombre.toUpperCase().replace(/[^a-z0-9]/gi,'') === filtroHeroe.toUpperCase()){
        posicionHeroe = i;
        existe = true;
      }else if(this.arrayDatos[i].nombre.toUpperCase() === filtroHeroe.toUpperCase()){
        posicionHeroe = i;
        existe = true;
      }
    }

    //Si existe el nombre pasado por parametros, se rellenan las variables del personaje a mostrar.
    //Cambia la variable booleana que gestiona el texto de error (no encontrado).
    if(existe){
      this.noExisteHeroe = false;
      this.heroeFiltroNom = this.arrayDatos[posicionHeroe].nombre;
      this.heroeFiltroImg = this.arrayDatos[posicionHeroe].img;
      this.heroeFiltroApa = this.arrayDatos[posicionHeroe].aparicion;
      this.heroeFiltroCasa = this.arrayDatos[posicionHeroe].casa;
    }else{
      this.noExisteHeroe=true;
    }
  }

  //Metodo que recoge por parametro el input del HTML y filtra por la casa de los Heroes.
  filtrarCasa(nombreCasa:String){
    let posicionHeroes: any [] = []; //Array que almacena las posiciones en arrayDatos de los heroes que pertenecen a una casa en especifico.

    //For que recorre arrayDatos.
    for (let i = 0; i < this.arrayDatos.length; i++) {
      //Mediante el siguiente if compara cada uno de las casas de arrayDatos con el string pasado desde el HTML.
      if(this.arrayDatos[i].casa.toUpperCase() === nombreCasa.toUpperCase()){
        posicionHeroes.push(i);
      }else{
        //Indica que el parametro pasado por el HTML no existe y por lo tanto, permite mostrar en parrafo de error.
        this.noExisteCasa = true;
      }
    }

    //Mediante el siguiente for, recorro el array de posicionesHeroes para en la variable que finalmente se va a usar en el HTML almacenar los heroes filtrados.
    for (let index = 0; index < posicionHeroes.length; index++) {
      this.heroesCasa.push(this.arrayDatos[posicionHeroes[index]]);
      //Indica que el parametro pasado por el HTML Si existe.
      this.noExisteCasa = false;
    }
  }

  //Metodo para borrar todo lo filtrado.
  borrarFiltros(){
    this.heroesCasa = [];

    this.heroeFiltroNom = "";
    this.heroeFiltroImg = "assets/img/desconocido.png";
    this.heroeFiltroApa = "";
    this.heroeFiltroCasa = "";
  }
}