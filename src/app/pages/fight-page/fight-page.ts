import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharacterServices } from '../../services/character/character-services';
import { FightServices } from '../../services/fight/fight-services';

@Component({
  selector: 'app-fight-page',
  imports: [],
  templateUrl: './fight-page.html',
  styleUrl: './fight-page.css',
})
export class FightPage {

  public characters:any = []
  public attacks:any[] = []
  public Playerscharacters:any
  public Botcharacters:any
  public playermaxhealth :any
  public botmaxhealth:any
  public logs:any[]=[]


  constructor(private http: HttpClient, private cd: ChangeDetectorRef, private router: Router, private characterservics: CharacterServices, private fightservice:FightServices) { }

  ngOnInit() {
    this.characterservics.getAllCharacter().subscribe({
      next: (data) => {
        this.Playerscharacters = data[0];
        this.playermaxhealth = data[0].hp;
        this.Botcharacters = data[1];
        this.botmaxhealth=this.Botcharacters.hp
        this.cd.detectChanges();
      },
    });
    this.fightservice.getAllAttacks().subscribe({
      next: (data) => {
        this.attacks = data;
        this.cd.detectChanges();
      },
    });
  }
  Attaquer(attack:string) {
    const data_send ={
      "self":this.Playerscharacters,
      "enemy":this.Botcharacters,
      "attackSlug": attack,
      "itemSlug": null
    }
    this.fightservice.Fight(data_send).subscribe({next: data => {
        this.Playerscharacters = data.self;
        this.Botcharacters = data.enemy;
        this.logs.push(data.log);
        this.cd.detectChanges();
      }}
    )
  }
}
