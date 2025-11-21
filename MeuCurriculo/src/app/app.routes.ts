import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DicasComponent } from './dicas/dicas.component';
import { EscolhermodeloComponent } from './escolhermodelo/escolhermodelo.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"dicas", component:DicasComponent},
    {path:"escolher-modelos", component:EscolhermodeloComponent}
];
