import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {


constructor(private router:Router){}

ngOnInit(): void  {}

acceso(){
  this.router.navigate(['/acceso']);
}
}
