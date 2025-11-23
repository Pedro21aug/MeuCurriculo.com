import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../../../../services/curriculo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moderno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moderno.component.html',
  styleUrl: './moderno.component.css'
})
export class ModernoComponent implements OnInit {


    nomeCompleto: string = ''; // NOME //
  
    idade:number | null = null; // IDADE //
  
    telefone: string = ''; // TELEFONE //
  
    email: string = ''; // EMAIL //
  
  
  
                                                                          // FORMAÇÃO ACADÊMICA 1 //
  
    instituicao: string = '';
  
    curso: string = '';
  
    inicio: string = '';
  
    fim: string = '';
  
  
                                                                          // FORMAÇÃO ACADÊMICA 2 //
  
    instituicao2: string = '';
  
    curso2: string = '';
  
    inicio2: string = '';
  
    fim2: string = '';
  
  
                                                                             // EXPERIÊNCIA 1 //
  
    empresa: string = '';
  
    cargo: string = '';
  
    inicioEmpresa: string = '';
  
    fimEmpresa: string = '';
  
    descricao: string = '';
  
  
                                                                                // EXPERIÊNCIA 2 //
  
  
    empresa2: string = '';
  
    cargo2: string = '';
  
    inicioEmpresa2: string = '';
  
    fimEmpresa2: string = '';
  
    descricao2: string = '';
  
  
                                                                                 // HABILIDADES //
  
  
    habilidade1: string = '';
    
    habilidade2: string = '';
  
    habilidade3: string = '';
  
  
                                                                             // HABILIDADES - NÍVEL //
  
  
    nivel1: string = '';
  
    nivel2: string = '';
  
    nivel3: string = '';
  
  
  
                                                                             // INFORMAÇÕES ADICIONAIS //
  
  
    adicionais: string = '';
  
    
  
  
  
  
  
    constructor(
      private curriculoService: CurriculoService
    ) {}                                                                  // RECEBENDO DADOS DOS INPUTS //
  
    ngOnInit(): void { 
  
  
      this.curriculoService.nomeCompleto$.subscribe(nome => { // NOME //
        this.nomeCompleto = nome;
      });
  
  
  
      this.curriculoService.idade$.subscribe(valor => { // IDADE //
        this.idade = valor;
      })
  
  
  
      this.curriculoService.Telefone$.subscribe(telefone => { // TELEFONE //
        this.telefone = telefone;
      })
  
  
  
      this.curriculoService.Email$.subscribe(email => { // EMAIL //
        this.email = email;
      })
  
  
  
                                                                            // FORMAÇÃO 1 //
  
      this.curriculoService.Instituicao$.subscribe(instituicao => {
        this.instituicao = instituicao;
      })
  
      this.curriculoService.Curso$.subscribe(curso => {
        this.curso = curso
      })
  
      this.curriculoService.Inicio$.subscribe(inicio => {
        this.inicio = inicio
      })
  
      this.curriculoService.Fim$.subscribe(fim => {
        this.fim = fim;
      })
  
  
                                                                            // FORMAÇÃO 2 //
  
  
      this.curriculoService.Instituicao2$.subscribe(instituicao2 => {
        this.instituicao2 = instituicao2;
      })
  
      this.curriculoService.Curso2$.subscribe(curso2 => {
        this.curso2 = curso2
      })
  
      this.curriculoService.Inicio2$.subscribe(inicio2 => {
        this.inicio2 = inicio2
      })
  
      this.curriculoService.Fim2$.subscribe(fim2 => {
        this.fim2 = fim2;
      })
  
  
                                                                            // EXPERIÊNCIA 1 //
  
  
      this.curriculoService.Empresa$.subscribe(empresa => {
        this.empresa = empresa;
      })
  
      this.curriculoService.Cargo$.subscribe(cargo => {
        this.cargo = cargo;
      })
  
      this.curriculoService.inicioEmpresa$.subscribe(inicioEmpresa => {
        this.inicioEmpresa = inicioEmpresa;
      })
  
      this.curriculoService.fimEmpresa$.subscribe(fimEmpresa => {
        this.fimEmpresa = fimEmpresa;
      })
  
      this.curriculoService.Descricao$.subscribe(descricao =>{
        this.descricao = descricao;
      })
  
  
                                                                            // EXPERIÊNCIA 2 //
  
  
        this.curriculoService.Empresa2$.subscribe(empresa2 => {
        this.empresa2 = empresa2;
      })
  
      this.curriculoService.Cargo2$.subscribe(cargo2 => {
        this.cargo2 = cargo2;
      })
  
      this.curriculoService.inicioEmpresa2$.subscribe(inicioEmpresa2 => {
        this.inicioEmpresa2 = inicioEmpresa2;
      })
  
      this.curriculoService.fimEmpresa2$.subscribe(fimEmpresa2 => {
        this.fimEmpresa2 = fimEmpresa2;
      })
  
      this.curriculoService.Descricao2$.subscribe(descricao2 =>{
        this.descricao2 = descricao2;
      })
  
  
                                                                              // HABILIDADES  //
  
  
      this.curriculoService.Habilidade1$.subscribe(habilidade1 =>{
        this.habilidade1 = habilidade1;
      })
  
      this.curriculoService.Habilidade2$.subscribe(habilidade2 =>{
        this.habilidade2 = habilidade2;
      })
  
      this.curriculoService.Habilidade3$.subscribe(habilidade3 =>{
        this.habilidade3 = habilidade3;
      })
  
  
  
                                                                              // HABILIDADE NÍVEL //
  
  
      this.curriculoService.Nivel1$.subscribe(nivel1 =>{
        this.nivel1 = nivel1;
      })
  
      this.curriculoService.Nivel2$.subscribe(nivel2 =>{
        this.nivel2 = nivel2;
      })
  
      this.curriculoService.Nivel3$.subscribe(nivel3 =>{
        this.nivel3 = nivel3;
      })
  
  
                                                                            // INFORMAÇÕES ADICIONAIS //
  
  
      this.curriculoService.Adicionais$.subscribe(adicionais => {
        this.adicionais = adicionais;
  
      })

}
}

