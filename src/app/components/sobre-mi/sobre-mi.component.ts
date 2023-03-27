import { Component,  OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
Persona:Persona = new Persona("Christian Ariel Gil", "Programador Full Stack",
 "Técnico en Prótesis Dental","", 
 "Como Programador, desarrollo apps y páginas web. Y cuento con experiencia en docencia de niños y adultos en IT",
  "Como Técnico en Protesis, brindo soporte a los odontologos con la generación de prótesis dentales desde mi propio laboratorio dental",
  "Sargento Cabral 3450, Canning, Buenos Aires, Argentina","Sargento Cabral 3450, Canning, Buenos Aires, Argentina",
  "","","","");
constructor(public PersonaService: PersonaService){}

ngOnInit(): void {
  this.PersonaService.getPersona().subscribe(data=>{
    this.Persona=data;
  });
}

}
