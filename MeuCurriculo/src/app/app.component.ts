import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DicasComponent } from './dicas/dicas.component';
import { EscolhermodeloComponent } from './escolhermodelo/escolhermodelo.component';
import { FormComponent } from './form/form.component';
import { ModernoComponent } from './Modelos/modelomoderno/moderno/modelomoderno/moderno.component';
import { TechComponent } from './Modelos/modelotech/tech/tech.component';
import { MinimalistaComponent } from './Modelos/modelomoderno/moderno/modelominimalista/minimalista.component';
import { ExecutivoComponent } from './Modelos/modelomoderno/moderno/modeloexecutivo/executivo/executivo.component';
import { CriativoComponent } from './Modelos/modelomoderno/moderno/modelocriativo/criativo/criativo.component';
import { ClassicoComponent } from './Modelos/modelomoderno/moderno/modeloclassico/classico/classico.component';
import { ResultadoComponent } from './resultado/resultado.component';


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
    ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MeuCurriculo';
}
