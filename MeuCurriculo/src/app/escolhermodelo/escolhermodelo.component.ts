import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { ModeloService } from '../services/services.modelo';
import { CriativoComponent } from '../Modelos/modelomoderno/moderno/modelocriativo/criativo/criativo.component';
import { ExecutivoComponent } from '../Modelos/modelomoderno/moderno/modeloexecutivo/executivo/executivo.component';
import { TechComponent } from '../Modelos/modelotech/tech/tech.component';
import { ClassicoComponent } from '../Modelos/modelomoderno/moderno/modeloclassico/classico/classico.component';
import { MinimalistaComponent } from '../Modelos/modelomoderno/moderno/modelominimalista/minimalista.component';
import { ModernoComponent } from '../Modelos/modelomoderno/moderno/modelomoderno/moderno.component';
import { NgComponentOutlet, NgIf } from '@angular/common';

export interface modeloPreview {
  id: string;
  componente: any;
}

@Component({
  selector: 'app-escolhermodelo',
  standalone: true,
  imports: [
    NgIf, 
    NgComponentOutlet, 
    CriativoComponent, 
    TechComponent, 
    ExecutivoComponent, 
    ModernoComponent, 
    ClassicoComponent, 
    MinimalistaComponent],

  templateUrl: './escolhermodelo.component.html',
  styleUrl: './escolhermodelo.component.css'
})
export class EscolhermodeloComponent {

  public modeloPreviewId: string | null = null;

  private modelosMap: modeloPreview[] = [
    {id: 'tech', componente: TechComponent},
    {id: 'classico', componente:ClassicoComponent},
    {id: 'executivo', componente:ExecutivoComponent},
    {id: 'minimalista', componente:MinimalistaComponent},
    {id: 'moderno', componente:ModernoComponent},
    {id: 'criativo', componente:CriativoComponent},
  ];

  abrirPreview(nomeModelo: string) {
    this.modeloPreviewId = nomeModelo;
    console.log('Modelo selecionado para Preview:', this.modeloPreviewId);
  }

  fecharPreview() {
    this.modeloPreviewId = null;
  }

  get componentePreview(): any {
    const modelo = this.modelosMap.find(m => m.id === this.modeloPreviewId);
    return modelo ? modelo.componente: null;
  }

 constructor(
    private modeloService: ModeloService,
    private router: Router
  ) {}

  selecionarEIrFormulario(nomeModelo: string) {
    this.modeloService.setModelo(nomeModelo);

    this.router.navigate(['/formulario']);
  }
}