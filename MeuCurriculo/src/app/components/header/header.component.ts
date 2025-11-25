import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home/home.component';
import { routes } from '../../app.routes';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
