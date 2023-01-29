import { Component } from '@angular/core';
import { PortfolioService } from 'app/servicios/portfolio.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})

export class DescripcionComponent {
  descripcion:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.descripcion=data.descripcion;
    });
  }
}
