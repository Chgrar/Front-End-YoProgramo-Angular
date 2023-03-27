export class Persona{
   id?:number;
    nombreyapellido: string;
    titulo1: string;
    titulo2: string;
    perfilpersonal: string;
    descripcion1: string;
    descripcion2: string;
    imgBanner: string;
    fotoBN: string;
    direccion: string;
    mail: string;
    telefono: string;
    linkedln: string;

    constructor( nombreyapellido: string, titulo1: string, titulo2: string, 
        perfilpersonal: string, descripcion1: string,descripcion2: string,
        imgBanner: string,fotoBN: string,direccion: string,mail: string ,
        telefono: string,linkedln: string ){
        
        this.nombreyapellido = nombreyapellido;
        this.titulo1 = titulo1;
        this.titulo2 = titulo2;
        this.perfilpersonal=perfilpersonal;
        this.descripcion1=descripcion1;
        this.descripcion2=descripcion2;
        this.imgBanner=imgBanner;
        this.fotoBN=fotoBN;
        this.direccion=direccion;
        this.mail=mail;
        this.telefono=telefono;
        this.linkedln=linkedln;

    }

}