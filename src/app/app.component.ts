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
      titulo: 'Border Collie Héroe: Rescata a Niño Perdido en el Bosque',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Border_collie_canon.jpg/800px-Border_collie_canon.jpg',
      cuerpoNoticia: 'Un valiente Border Collie llamado Max se convirtió en héroe después de encontrar y guiar a salvo a un niño de 6 años que se había perdido en un bosque en Colorado, EE.UU. El pequeño, identificado como Lucas Thompson, desapareció mientras jugaba cerca de su casa. Su familia alertó a las autoridades y comenzó una búsqueda desesperada. Sin embargo, fue Max, el perro de los vecinos, quien encontró al niño tras seguir su rastro por más de dos kilómetros entre árboles y terrenos irregulares.',
      fecha: new Date(2025, 1, 19),
    },
    {
      titulo: 'Gato Callejero Se Convierte en Estrella de Internet',
      imagen: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
      cuerpoNoticia: 'Un gato callejero llamado "Whiskers" se ha convertido en un fenómeno de internet en los últimos días, tras la publicación de un video que muestra su travesura mientras juega con una bola de hilo. El video, que fue grabado por la joven bloggera Sarah Jenkins en su vecindario de San Francisco, rápidamente se viralizó, acumulando millones de visitas en plataformas de video emergentes como YouTube.Lo que comenzó como un video casual y divertido de Whiskers correteando por las calles de la ciudad, ha sido compartido por miles de personas, y su adorable personalidad ha conquistado a miles de fanáticos de todo el mundo. "Nunca imaginé que un simple gato callejero podría hacer tanto ruido en internet", comentó Sarah, quien decidió compartir el video tras ver la habilidad de Whiskers para "actuar" frente a la cámara.',
      fecha: new Date(2005, 1,19),
    }
  ]


  datosFormulario!: INoticias;

  manejadorDatosFormulario(datos: INoticias){
    this.arrayNoticias.push(datos);
  }
}
