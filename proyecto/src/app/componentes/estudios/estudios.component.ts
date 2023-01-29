import { Component } from '@angular/core';
import { PortfolioService } from 'app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {
estudiosList:any;
cursosList:any; 

constructor(private datosPortfolio:PortfolioService) { }

ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
   this.cursosList=data.cursos;
  });

  this.datosPortfolio.obtenerDatos().subscribe(data => {
    this.estudiosList=data.estudios;
  });
}
}
