import { routes } from './../app.routes';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardPassosComponent } from "../components/card-passos/card-passos.component";

interface Card {
  numero: number,
  titulo: string,
  descricao: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPassosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  inforCard: Card[] = [
    {
      numero: 1,
      titulo: 'nome',
      descricao: 'desc'
    }
    , {
      numero: 2,
      titulo: 'nome',
      descricao: 'desc'
    }
  ]


  constructor(private router: Router) {

  }

  navegar() {
    this.router.navigate(['/dicas']);
  }

}
