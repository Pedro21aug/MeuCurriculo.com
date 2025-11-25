import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { DicasComponent } from './pages/home/dicas/dicas/dicas.component';
import { EscolhermodeloComponent } from './pages/home/escolhermodelo/escolhermodelo.component';
import { FormComponent } from './pages/home/form/form.component';
import { ResultadoComponent } from './pages/home/resultado/resultado.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"dicas", component:DicasComponent},
    {path:"escolhermodelo", component:EscolhermodeloComponent},
    {path:"formulario", component:FormComponent},
    {path:"resultado", component:ResultadoComponent}
];
