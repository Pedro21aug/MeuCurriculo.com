import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cardpassos',
  standalone: true,
  imports: [],
  templateUrl: './cardpassos.component.html',
  styleUrl: './cardpassos.component.css'
})
export class CardpassosComponent {

  @Input() numero = ''
  @Input() titulo = ''
  @Input() descricao= ''

}
