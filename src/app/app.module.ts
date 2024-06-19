import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridAngular } from 'ag-grid-angular';
import { AddChampionComponent } from './add-champion/add-champion.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChampionListComponent } from './champion-list/champion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionListComponent,
    AddChampionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
