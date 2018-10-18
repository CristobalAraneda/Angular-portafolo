import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';




@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }
  private cargarProductos() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-88af2.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = true;
        resolve();
    });

    });
  }
  getProductos(id: string) {
    return this.http.get(`https://angular-html-88af2.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);

    }
      // this.filtrarProductos(termino)
  }

   private filtrarProductos( termino: string ) {
     console.log(this.productos);
     this.productoFiltrado = [];

     termino = termino.toLocaleLowerCase();

  this.productos.forEach(prod => {

       const tituloLower = prod.titulo.toLocaleLowerCase();

       if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
         this.productoFiltrado.push(prod);
       }
     });
   }
}
