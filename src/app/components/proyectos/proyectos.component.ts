import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectosList: any;
nombre : string = '';

constructor( private datosProyectos: PortfolioService ){}

ngOnInit(): void {
  this.datosProyectos.obtenerDatos().subscribe(data=>{
    this.proyectosList=data.proyectos;
  })
}


}
