// lista.component.ts
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
  notaEditando: Nota | null = null; // Para realizar un seguimiento de la nota que se está editando

  constructor(private notaService: NotasService) {}

  ngOnInit(): void {
    this.notaService.getNotas().subscribe(notas => {
      this.notas = notas;
    });
  }

  async onClickDelete(nota: Nota) {
    const response = await this.notaService.deleteNotas(nota);
    console.log(response);
  }

  // Activar el modo de edición
  editarNota(nota: Nota) {
    this.notaEditando = { ...nota }; // Crear una copia de la nota para no modificar directamente la original
  }

  // Guardar cambios en la base de datos
  async guardarCambios() {
    if (this.notaEditando) {
      const response = await this.notaService.editarNotas(this.notaEditando);
      console.log(response);

      // Actualizar la lista después de editar
      this.notaService.getNotas().subscribe(notas => {
        this.notas = notas;
      });

      // Restablecer el modo de edición
      this.notaEditando = null;
    }
  }
}
