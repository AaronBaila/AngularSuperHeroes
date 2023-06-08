import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioInfoService {

  heroes: any[]=[
    {
      nombre: "Aquaman",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",          
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",          
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",          
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",          
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }

    ];

  //Metodo add, para añadir información(No lo utilizo en este ejercicio)  
  add(dato: any){
    this.heroes.push(dato);
  }

  //Metodo get, se utiliza para obtener los datos desde fuera del servicio.
  get(){
    return this.heroes;
  }

  //Metodo clear, para limpiar la información(No lo utilizo en este ejercicio)  
  clear(){
    this.heroes = [];
  }

}
