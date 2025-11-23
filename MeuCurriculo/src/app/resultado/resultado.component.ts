import { routes } from '../app.routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloService } from '../services/services.modelo';
import { ClassicoComponent } from "../Modelos/modelomoderno/moderno/modeloclassico/classico/classico.component";
import { CriativoComponent } from "../Modelos/modelomoderno/moderno/modelocriativo/criativo/criativo.component";
import { ExecutivoComponent } from "../Modelos/modelomoderno/moderno/modeloexecutivo/executivo/executivo.component";
import { TechComponent } from "../Modelos/modelotech/tech/tech.component";
import { MinimalistaComponent } from "../Modelos/modelomoderno/moderno/modelominimalista/minimalista.component";
import { ModernoComponent } from "../Modelos/modelomoderno/moderno/modelomoderno/moderno.component";
import { NgIf } from "@angular/common";
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [ClassicoComponent, CriativoComponent, ExecutivoComponent, TechComponent, MinimalistaComponent, ModernoComponent, NgIf],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit {

  modeloEscolhido: string = '';

  constructor(
    private router: Router,
    private modeloService: ModeloService
  ) {}

ngOnInit() {
    this.modeloEscolhido = this.modeloService.getModelo().toLowerCase(); 
    console.log('Modelo recuperado', this.modeloEscolhido);
}


  navegar(){
    this.router.navigate(['/escolhermodelo']);
  }

  imprimirCurriculo() {
    window.print();
  }

  downloadPDF() {
    const element = document.getElementById('pagina-conteudo')

    if (!element) return;

    const options = {
      margin: 0.5,
      filename: 'MeuCurriculoPDF',
      image: {type: 'jpeg' as const, quality: 0.98},
      html2canvas: {scale: 2},
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' as const}
    };

    html2pdf().from(element).set(options).save();
  }
}
