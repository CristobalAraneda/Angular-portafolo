import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';
import { ProductoDetalle } from '../../interfaces/producto-detalle.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDetalle;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
          this.productoService.getProductos(parametros['id'])
               .subscribe( (producto: ProductoDetalle) => {
                 this.id = parametros['id'];
                 this.producto = producto;

               });
        });
  }

}
