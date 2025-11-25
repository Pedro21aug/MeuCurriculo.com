import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../components/header/header.component';
import { FooterComponent } from '../../../../components/footer/footer.component';


@Component({
  selector: 'app-dicas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
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




