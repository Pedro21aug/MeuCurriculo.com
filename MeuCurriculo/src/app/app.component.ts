import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DicasComponent } from './pages/home/dicas/dicas/dicas.component';
import { EscolhermodeloComponent } from './pages/home/escolhermodelo/escolhermodelo.component';
import { FormComponent } from './pages/home/form/form.component';
import { ModernoComponent } from './Modelos.1/moderno/moderno.component';
import { TechComponent } from './Modelos.1/tech/tech.component';
import { MinimalistaComponent } from './Modelos.1/minimalista/minimalista.component';
import { ExecutivoComponent } from './Modelos.1/executivo/executivo.component';
import { CriativoComponent } from './Modelos.1/criativo/criativo.component';
import { ClassicoComponent } from './Modelos.1/classico/classico.component';
import { ResultadoComponent } from './pages/home/resultado/resultado.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent,
    DicasComponent,
    EscolhermodeloComponent,
    FormComponent, ModernoComponent,
    TechComponent,
    MinimalistaComponent,
    ExecutivoComponent,
    CriativoComponent,
    ClassicoComponent,
    ResultadoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MeuCurriculo';
}
