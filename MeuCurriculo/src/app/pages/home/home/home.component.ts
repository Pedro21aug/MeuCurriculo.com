import { routes } from '../../../app.routes';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardpassosComponent } from '../../../components/card-passos/cardpassos.component';
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from '../../../components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardpassosComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router) {

  }

  navegar() {
    this.router.navigate(['/dicas']);
  }

}
