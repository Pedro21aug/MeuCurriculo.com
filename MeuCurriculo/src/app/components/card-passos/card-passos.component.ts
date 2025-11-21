import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-passos',
  standalone: true,
  imports: [],
  templateUrl: './card-passos.component.html',
  styleUrl: './card-passos.component.css'
})
export class CardPassosComponent {
  @Input() numero = ''
  @Input() titulo = ''
  @Input() descricao= ''
}
