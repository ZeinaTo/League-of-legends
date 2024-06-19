import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { AddChampionComponent } from './add-champion/add-champion.component';


const routes: Routes = [ {
  path: '',  component: ChampionListComponent,  
},
{
  path:"addChamp",component:AddChampionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
