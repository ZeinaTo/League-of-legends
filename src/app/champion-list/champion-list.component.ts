import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion.service';
import {Champion} from '../entities/Champion'
import { AgGridAngular } from 'ag-grid-angular'; 
import { ColDef } from 'ag-grid-community'; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css'],
})
export class ChampionListComponent implements OnInit{
  champions!: Champion[];
  columnDefs: any;
  rowData: any;
  constructor(private service: ChampionService, private cdr: ChangeDetectorRef) {
    this.columnDefs = [
      { field: 'id', headerName: 'ID', sortable: true, filter: true },
      { field: 'name', headerName: 'Name', sortable: true, filter: true },
      { field: 'title', headerName: 'Title', sortable: true, filter: true },
      { field: 'key', headerName: 'Key', sortable: true, filter: true },
      {
        headerName: 'Actions',
        cellRenderer: this.deleteButtonRenderer.bind(this),
        width: 100
      }
    ];
  }    
  ngOnInit(): void {
    //pour les donnees locales du champion service
      this.champions=this.service.getChampions();
      console.log(this.champions);
      this.rowData = this.service.getChampions();
    // jusqu'ici

    //pour les donnees de data.json
    // this.service.fetchChampionsFromJson().subscribe(data => {
    //   this.champions = data;
    //   this.rowData = data;
    // });
    }

    // deleteButtonRenderer(params: any) {
    //   const button = document.createElement('button');
    //   button.innerText = 'Delete';
    //   button.addEventListener('click', () => {
    //     this.onDelete(params.data);
    //   });
    //   return button;
    // }

  deleteButtonRenderer(params: any) {
    const img = document.createElement('img');
    img.src = '/assets/images/trash.png';
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = () => console.error('Error loading image');
    document.body.appendChild(img);
    img.style.cursor = 'pointer';
    img.style.width = '25px';
    img.style.height = '25px';
    img.addEventListener('click', () => {
      this.onDelete(params.data);
    });
    return img;
  }
  
  onDelete(champion: Champion) {
    console.log(this.service.champions);
    this.service.champions =  this.service.champions.filter(c => c.id !== champion.id); 
    this.rowData = this.service.champions;
    console.log(this.service.champions);
    this.cdr.detectChanges(); 

  }

}
