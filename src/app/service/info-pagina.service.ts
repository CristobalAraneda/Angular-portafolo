import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    this.cargaInfo();
    this.cargarEquipo();
  }
    private cargaInfo() {
      // leer el achivo JSON
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {
       this.cargada = true;
       this.info = resp;
      });
    }

    private cargarEquipo() {
           // leer el achivo JSON dee firebase
     this.http.get('https://angular-html-88af2.firebaseio.com/equipo.json')
     .subscribe((resp: any[])  => {
       this.equipo = resp;
       console.log(resp);
      });
    }
}
