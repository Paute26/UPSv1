// editar.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasService } from '../services/notas.service';
import Nota from '../lista/nota.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  nota!: Nota; // Inicializado en el ngOnInit
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notaService: NotasService,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      titulo: ['', Validators.required],
      fecha: [''],
      detalles: ['']
    });
  }

  ngOnInit(): void {
    const notaId = this.route.snapshot.paramMap.get('id');

    if (notaId) {
      this.notaService.getNotaById(notaId).subscribe((nota: Nota | null) => {
        if (nota) {
          this.nota = nota;
          this.formulario.setValue({
            titulo: nota.titulo,
            fecha: nota.fecha,
            detalles: nota.detalles
          });
        } else {
          // Manejar el caso donde no se encuentra la nota
        }
      });
    } else {
      // Manejar el caso donde no se proporciona el ID de la nota
    }
  }

  async guardarCambios() {
    if (this.nota) {
      const notaEditada = this.formulario.value as Nota;
      notaEditada.id = this.nota.id;

      const response = await this.notaService.editarNotas(notaEditada);
      console.log(response);

      // Redireccionar de vuelta a la lista después de guardar cambios
      this.router.navigate(['/lista']);
    }
  }

  cancelarEdicion() {
    // Redireccionar de vuelta a la lista sin guardar cambios
    this.router.navigate(['/lista']);
  }
}
