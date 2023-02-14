import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from '../../Service/service.service'
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  productos!:Producto[];
  constructor(private service:ServiceService, private router:Router){}
  ngOnInit(){
      this.service.getProductos()
      .subscribe( data => {
        this.productos = data;
      })
  }
}
