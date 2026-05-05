import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterServices } from '../../services/character/character-services';

@Component({
  selector: 'app-chose-character',
  imports: [],
  templateUrl: './chose-character.html',
  styleUrl: './chose-character.css',
})
export class ChoseCharacter {
  botlevel="69ef20b8fa2bf9df4eb7f418";
  characterPlayer="";
  public characters :any=[]


  constructor(private router :Router, private characterServices : CharacterServices,private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.characterServices.getAllCharacter().subscribe({
      next: data => {
        this.characters = data;
        this.cd.detectChanges();
      }
    })
  }
  Esay(){
    this.botlevel="69ef20b8fa2bf9df4eb7f418"
  }
  Medium(){
    this.botlevel="69ef20d2fa2bf9df4eb7f471"
  }
  Hard(){
    this.botlevel="69ef20d2fa2bf9df4eb7f475"
  }

  Character(id:string){
    this.characterPlayer=id;
    sessionStorage.setItem("player",id);
    sessionStorage.setItem("bot",this.botlevel);
    this.router.navigate(["/fight"]);
  }
}
