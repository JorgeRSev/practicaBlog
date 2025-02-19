import { Component, Input} from '@angular/core';
import { INoticias } from '../../interfaces/inoticias.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-informacion',
  imports: [CommonModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

  @Input() datos: INoticias[] = []

}
