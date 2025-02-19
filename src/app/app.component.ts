import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InformacionComponent } from "./components/informacion/informacion.component";
import { INoticias } from './interfaces/inoticias.interface';

@Component({
  selector: 'app-root',
  imports: [FormularioComponent, InformacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrayNoticias: INoticias[] = [
    {
      titulo: 'Mi perro',
    imagen: 'url',
    cuerpoNoticia: 'Mi perro tumbado en el sofa',
    fecha: new Date('09/01/1992'),
    },
    {
    titulo: 'Mi gato',
    imagen: 'url',
    cuerpoNoticia: 'Mi gato tumbado en el sofa',
    fecha: new Date('09/10/1998'),
    }
  ]
}
