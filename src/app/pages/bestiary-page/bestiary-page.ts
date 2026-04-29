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
        this.Trieby("name")
        this.cd.detectChanges();
      }
    })
  }
  Trieby(propriete: string){
    this.characters.sort((a: any, b: any) => {
      if (a[propriete] == null){
        return 1;
      }
      if (b[propriete] == null){
        return -1;
      }
      if (typeof a[propriete] === 'string') {
        return a[propriete].localeCompare(b[propriete]);
      }
      return a[propriete] - b[propriete];
    });
  }
  HomePage(){
    this.router.navigate(['/']);
  }
  CharacterPage(id:string){
    this.router.navigate([`/character/${id}`]);
  }
}
