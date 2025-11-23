import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  setModelo(modelo: string) {
    localStorage.setItem('modeloSelecionado', modelo);
  }

  getModelo(): string {
    return localStorage.getItem('modeloSelecionado') || '';
  }
}


