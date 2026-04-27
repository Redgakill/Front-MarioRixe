import {ChangeDetectorRef, Component} from '@angular/core';

import {Router, RouterOutlet} from '@angular/router';
import { CharacterServices } from '../../services/character/character-services';

@Component({
  selector: 'app-bestiary-page',
  imports: [],
  templateUrl: './bestiary-page.html',
  styleUrl: './bestiary-page.css',
})
export class BestiaryPage {

  public characters :any=[]

  constructor(private router :Router, private characterServices : CharacterServices,private cd: ChangeDetectorRef) {}

  ngOnInit(){
    this.characterServices.getAllCharacter().subscribe({
      next: data => {
        this.characters = data;
        this.cd.detectChanges();
      }
    })
  }

  HomePage(){
    this.router.navigate(['/']);
  }
}
