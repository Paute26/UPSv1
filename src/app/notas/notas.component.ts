// notas.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotasService } from '../services/notas.service';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  formulario: FormGroup;

  constructor(
     private notaService: NotasService
     ) {
      this.formulario = new FormGroup({
      titulo: new FormControl(),
      fecha: new FormControl(),
      detalles: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async guardarNota() {
    // Aquí puedes manejar la lógica para guardar la nota
    // Accede a los valores del formulario con this.formulario.value
    console.log(this.formulario.value);
    const response = await this.notaService.addNotas(this.formulario.value);
    console.log(response);
  }
}

