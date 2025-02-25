import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INoticias } from '../../interfaces/inoticias.interface';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formularioNoticia: FormGroup;
  
  constructor(){
    this.formularioNoticia = new FormGroup({
      titulo: new FormControl('',[
        Validators.required
      ]),
      imagen: new FormControl('',[
        Validators.required
      ]),
      cuerpoNoticia: new FormControl('',[
        Validators.required
      ]),
      fecha: new FormControl('',[
        Validators.required
      ])
    }, [])
  }


  @Output() eventoEnviarData = new EventEmitter<INoticias>()

  cargarInformacion(){
    this.eventoEnviarData.emit(this.formularioNoticia.value)
    this.formularioNoticia.reset()
  }

}
