import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Champion } from '../entities/Champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-add-champion',
  templateUrl: './add-champion.component.html',
  styleUrls: ['./add-champion.component.css']
})
export class AddChampionComponent {
  constructor(private service:ChampionService){}
  addChamptionForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(1)
    ]),
    title: new FormControl("Title", [

    ]),
    key: new FormControl("Key", [

    ]),
  });

  onSubmit() {
    const champion:Champion= {
      id:this.service.generateUniqueId(),
      name:this.addChamptionForm.value.name as string,
      title: this.addChamptionForm.value.title as string,
      key:this.addChamptionForm.value.key as string
    }
    console.log(champion);
    this.service.addChampion(champion); 
  }
}
