import { Component, OnInit } from '@angular/core';
import { NotasService } from '../services/notas.service';
import Nota from './nota.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  notas: Nota[] = [];

  constructor(private notaService: NotasService) {}

  ngOnInit(): void {
    this.notaService.getNotas().subscribe(notas => {
      this.notas = notas;
      console.log(notas);
    });
  }
}
