import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private nomeCompletoSource = new BehaviorSubject<string>('');
  nomeCompleto$ = this.nomeCompletoSource.asObservable();

  private idadeSource = new BehaviorSubject<number | null>(null);
  idade$ = this.idadeSource.asObservable();

  private TelefoneSource = new BehaviorSubject<string>('');
  Telefone$ = this.TelefoneSource.asObservable();

  private EmailSource = new BehaviorSubject<string>('');
  Email$ = this.EmailSource.asObservable();

  private InstituicaoSource = new BehaviorSubject<string>('');
  Instituicao$ = this.InstituicaoSource.asObservable();

  private CursoSource = new BehaviorSubject<string>('');
  Curso$ = this.CursoSource.asObservable();

  private InicioSource = new BehaviorSubject<string>('');
  Inicio$ = this.InicioSource.asObservable();

  private FimSource = new BehaviorSubject<string>('');
  Fim$ = this.FimSource.asObservable();

  private Instituicao2Source = new BehaviorSubject<string>('');
  Instituicao2$ = this.Instituicao2Source.asObservable();

  private Curso2Source = new BehaviorSubject<string>('');
  Curso2$ = this.Curso2Source.asObservable();

  private Inicio2Source = new BehaviorSubject<string>('');
  Inicio2$ = this.Inicio2Source.asObservable();

  private Fim2Source = new BehaviorSubject<string>('');
  Fim2$ = this.Fim2Source.asObservable();

  private EmpresaSource = new BehaviorSubject<string>('');
  Empresa$ = this.EmpresaSource.asObservable();

  private CargoSource = new BehaviorSubject<string>('');
  Cargo$ = this.CargoSource.asObservable();

  private inicioEmpresaSource = new BehaviorSubject<string>('');
  inicioEmpresa$ = this.inicioEmpresaSource.asObservable();

  private fimEmpresaSource = new BehaviorSubject<string>('');
  fimEmpresa$ = this.fimEmpresaSource.asObservable();

  private DescricaoSource = new BehaviorSubject<string>('');
  Descricao$ = this.DescricaoSource.asObservable();

  private Empresa2Source = new BehaviorSubject<string>('');
  Empresa2$ = this.Empresa2Source.asObservable();

  private Cargo2Source = new BehaviorSubject<string>('');
  Cargo2$ = this.Cargo2Source.asObservable();

  private inicioEmpresa2Source = new BehaviorSubject<string>('');
  inicioEmpresa2$ = this.inicioEmpresa2Source.asObservable();

  private fimEmpresa2Source = new BehaviorSubject<string>('');
  fimEmpresa2$ = this.fimEmpresa2Source.asObservable();

  private Descricao2Source = new BehaviorSubject<string>('');
  Descricao2$ = this.Descricao2Source.asObservable();





  private Habilidade1Source = new BehaviorSubject<string>('');
  Habilidade1$ = this.Habilidade1Source.asObservable();

  private Habilidade2Source = new BehaviorSubject<string>('');
  Habilidade2$ = this.Habilidade2Source.asObservable();

  private Habilidade3Source = new BehaviorSubject<string>('');
  Habilidade3$ = this.Habilidade3Source.asObservable();


  private Nivel1Source = new BehaviorSubject<string>('');
  Nivel1$ = this.Nivel1Source.asObservable();

  private Nivel2Source = new BehaviorSubject<string>('');
  Nivel2$ = this.Nivel2Source.asObservable();

  private Nivel3Source = new BehaviorSubject<string>('');
  Nivel3$ = this.Nivel3Source.asObservable();


  private AdionaisSource = new BehaviorSubject<string>('');
  Adicionais$ = this.AdionaisSource.asObservable();











  setNomeCompleto(nome: string) {
    this.nomeCompletoSource.next(nome);
  }

  setIdade(idade:number) {
    this.idadeSource.next(idade);
  }

  setTelefone(telefone: string) {
    this.TelefoneSource.next(telefone);
  }

  setEmail(email: string) {
    this.EmailSource.next(email); 
  }

  setInstituicao(instituicao: string) {
    this.InstituicaoSource.next(instituicao);
  }

  setCurso(curso: string) {
    this.CursoSource.next(curso);
  }

  setInicio(inicio: string) {
    this.InicioSource.next(inicio);
  }

  setFim(fim: string) {
    this.FimSource.next(fim);
  }

  setInstituicao2(instituicao2: string) {
    this.Instituicao2Source.next(instituicao2);
  }

  setCurso2(curso2: string) {
    this.Curso2Source.next(curso2);
  }

  setInicio2(inicio2: string) {
    this.Inicio2Source.next(inicio2);
  }

  setFim2(fim2: string) {
    this.Fim2Source.next(fim2);
  }

  setEmpresa(empresa: string) {
    this.EmpresaSource.next(empresa);
  }

  setCargo(cargo: string) {
    this.CargoSource.next(cargo);
  }

  setinicioEmpresa(inicioEmpresa: string) {
    this.inicioEmpresaSource.next(inicioEmpresa);
  }

  setfimEmpresa(fimEmpresa: string) {
    this.fimEmpresaSource.next(fimEmpresa);
  }

  setDescricao(descricao: string) {
    this.DescricaoSource.next(descricao);
  }

  setEmpresa2(empresa2: string) {
    this.Empresa2Source.next(empresa2);
  }

  setCargo2(cargo2: string) {
    this.Cargo2Source.next(cargo2);
  }

  setinicioEmpresa2(inicioEmpresa2: string) {
    this.inicioEmpresa2Source.next(inicioEmpresa2);
  }

  setfimEmpresa2(fimEmpresa2: string) {
    this.fimEmpresa2Source.next(fimEmpresa2);
  }

  setDescricao2(descricao2: string) {
    this.Descricao2Source.next(descricao2);







  }

  setHabilidade1(habilidade1: string) {
    this.Habilidade1Source.next(habilidade1);
  }

  setHabilidade2(habilidade2: string) {
    this.Habilidade2Source.next(habilidade2);
  }

  setHabilidade3(habilidade3: string) {
    this.Habilidade3Source.next(habilidade3);
  }


  setNivel1(nivel1: string) {
    this.Nivel1Source.next(nivel1);
  }

  setNivel2(nivel2: string) {
    this.Nivel2Source.next(nivel2);
  }

  setNivel3(nivel3: string) {
    this.Nivel3Source.next(nivel3);
  }


  setAdicionais(adicionais: string) {
    this.AdionaisSource.next(adicionais);
  }
}
