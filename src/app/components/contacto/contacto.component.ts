import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
trabajoList:any;
lenguajesList:any;
miPortfolio:any;

constructor(private datosTrabajos:PortfolioService){}

ngOnInit(): void {
  this.datosTrabajos.obtenerDatos().subscribe(data=>{
    this.trabajoList=data.trabajos;
    this.lenguajesList=data.lenguajes;
    this.miPortfolio=data;
  })
}
}
