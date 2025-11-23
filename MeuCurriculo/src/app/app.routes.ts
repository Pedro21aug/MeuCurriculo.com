import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DicasComponent } from './dicas/dicas.component';
import { EscolhermodeloComponent } from './escolhermodelo/escolhermodelo.component';
import { FormComponent } from './form/form.component';
import { ResultadoComponent } from './resultado/resultado.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"dicas", component:DicasComponent},
    {path:"escolhermodelo", component:EscolhermodeloComponent},
    {path:"formulario", component:FormComponent},
    {path:"resultado", component:ResultadoComponent}
];
