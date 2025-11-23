import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-dicas',
  standalone: true,
  imports: [],
  templateUrl: './dicas.component.html',
  styleUrl: './dicas.component.css'
})
export class DicasComponent {

  constructor(private router: Router) {

  }

  navegar() {
    this.router.navigate(['/escolhermodelo']);
  }

}




