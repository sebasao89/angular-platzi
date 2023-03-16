import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  // Se importa y se recibe el valor con @Input()
  @Input() img: string = ''
  noImg: string = 'https://www.implantesdentalespifer.es/wp-content/uploads/2014/10/imagen_no_disponible1.png'

}
