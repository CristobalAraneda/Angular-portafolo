import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.css']
})
export class SeachComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
         .subscribe( params => {
           console.log(params['termino']);
          this.productoService.buscarProducto( params['termino']);
         });
  }

}
