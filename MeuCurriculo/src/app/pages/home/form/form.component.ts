import { routes } from '../../../app.routes';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurriculoService } from '../../../services/curriculo.service';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nomeCompleto: string = '';


  idade: number | null = null;


  telefone: string = '';


  email: string = '';




  instituicao: string = '';

  curso: string = '';

  inicio: string = '';

  fim: string = '';




  instituicao2: string = '';

  curso2: string = '';

  inicio2: string = '';

  fim2: string = '';




  empresa: string = '';

  cargo: string = '';

  inicioEmpresa: string = '';

  fimEmpresa: string = '';

  descricao: string = '';





  empresa2: string = '';

  cargo2: string = '';

  inicioEmpresa2: string = '';

  fimEmpresa2: string = '';

  descricao2: string = '';





  habilidade1: string = '';

  habilidade2: string = '';

  habilidade3: string = '';



  nivel1: string = '';

  nivel2: string = '';

  nivel3: string = '';




  adicionais: string = '';





  constructor(
    private router: Router, 
    private curriculoService: CurriculoService){
  }

  atualizarNome(valor: string) {
    this.curriculoService.setNomeCompleto(valor);
  }



  atualizarIdade(valor: number) {
    this.curriculoService.setIdade(valor);
  }



  atualizarTelefone(valor: string) {
    this.curriculoService.setTelefone(valor);
  }



  atualizarEmail(valor: string) {
    this.curriculoService.setEmail(valor);
  }




  atualizarInstituicao(valor: string) {
    this.curriculoService.setInstituicao(valor);
  }

  atualizarCurso(valor: string) {
    this.curriculoService.setCurso(valor);
  }

  atualizarInicio(valor: string) {
    this.curriculoService.setInicio(valor);
  }

  atualizarFim(valor: string) {
    this.curriculoService.setFim(valor);
  }





  atualizarInstituicao2(valor: string) {
    this.curriculoService.setInstituicao2(valor);
  }

  atualizarCurso2(valor: string) {
    this.curriculoService.setCurso2(valor);
  }

  atualizarInicio2(valor: string) {
    this.curriculoService.setInicio2(valor);
  }

  atualizarFim2(valor: string) {
    this.curriculoService.setFim2(valor);
  }






  atualizarEmpresa(valor: string) {
    this.curriculoService.setEmpresa(valor);
  }

  atualizarCargo(valor: string) {
    this.curriculoService.setCargo(valor);
  }
  
  atualizarinicioEmpresa(valor: string) {
    this.curriculoService.setinicioEmpresa(valor);
  }

  atualizarfimEmpresa(valor: string) {
    this.curriculoService.setfimEmpresa(valor);
  }

  atualizarDescricao(valor: string) {
    this.curriculoService.setDescricao(valor);
  }





   atualizarEmpresa2(valor: string) {
    this.curriculoService.setEmpresa2(valor);
  }

  atualizarCargo2(valor: string) {
    this.curriculoService.setCargo2(valor);
  }
  
  atualizarinicioEmpresa2(valor: string) {
    this.curriculoService.setinicioEmpresa2(valor);
  }

  atualizarfimEmpresa2(valor: string) {
    this.curriculoService.setfimEmpresa2(valor);
  }

  atualizarDescricao2(valor: string) {
    this.curriculoService.setDescricao2(valor);
  }




  atualizarHabilidade1(valor: string) {
    this.curriculoService.setHabilidade1(valor);
  }

  atualizarHabilidade2(valor: string) {
    this.curriculoService.setHabilidade2(valor);
  }

  atualizarHabilidade3(valor: string) {
    this.curriculoService.setHabilidade3(valor);
  }
  


  atualizarNivel1(valor: string) {
    this.curriculoService.setNivel1(valor);
  }

  atualizarNivel2(valor: string) {
    this.curriculoService.setNivel2(valor);
  }

  atualizarNivel3(valor: string) {
    this.curriculoService.setNivel3(valor);
  }



  atualizarAdicionais(valor: string) {
    this.curriculoService.setAdicionais(valor);
  }
  




  navegar(){
    this.router.navigate(['./resultado']);
  }

}
