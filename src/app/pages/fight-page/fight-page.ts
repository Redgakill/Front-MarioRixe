import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharacterServices } from '../../services/character/character-services';
import { FightServices } from '../../services/fight/fight-services';
import { InventoryServices } from '../../services/inventory/inventory-services';

@Component({
  selector: 'app-fight-page',
  imports: [],
  templateUrl: './fight-page.html',
  styleUrl: './fight-page.css',
})
export class FightPage {

  public attacks:any[] = []
  public items:any[] = []
  private item_use ="";
  public Playerscharacters:any
  public Botcharacters:any
  public playermaxhealth :any
  public botmaxhealth:any
  public logs:any[]=[]
  public finish = false;


  constructor(private http: HttpClient, private cd: ChangeDetectorRef, private router: Router, private characterservics: CharacterServices, private fightservice:FightServices, private itemservices: InventoryServices) { }

  ngOnInit() {
    this.characterservics.getAllCharacter().subscribe({
      next: (data) => {
        this.Playerscharacters = data[87];
        this.playermaxhealth = this.Playerscharacters.hp;
        this.Botcharacters = data[87];
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
    this.itemservices.getAllItem().subscribe({
      next: (data) => {
        this.items = data;
        this.cd.detectChanges();
      }
    })
  }
  Attaquer(attack:string) {
    const data_send ={
      "self":this.Playerscharacters,
      "enemy":this.Botcharacters,
      "attackSlug": attack,
      "itemSlug": this.item_use,
    }
    this.fightservice.Fight(data_send).subscribe({next: data => {
        this.Playerscharacters = data.self;
        if (this.Playerscharacters.hp > this.playermaxhealth) {
          this.Playerscharacters.hp = this.playermaxhealth;
        }
        this.Botcharacters = data.enemy;
        this.logs.push(data.log);
        this.cd.detectChanges();
        this.item_use="";
        if(this.Botcharacters.hp==0){
          this.logs.push("YOU WIN");
          this.finish = true;
        }
        setTimeout(  () => {
          console.log("this is the second for bot attack");
        }, 30000);
        this.Bot_Attackt()
      }}
    )
  }
  Bot_Attackt(){
    const randomIndex = Math.floor(Math.random() * this.attacks.length);
    const Attackrandom = this.attacks[randomIndex].slug;
    const data_send ={
      "self":this.Botcharacters,
      "enemy":this.Playerscharacters,
      "attackSlug": Attackrandom,
      "itemSlug": null
    }
    this.fightservice.Fight(data_send).subscribe({next: data => {
        this.Playerscharacters = data.enemy;
        this.Botcharacters = data.self;
        this.logs.push(data.log);
        this.cd.detectChanges();
      }}
    )
  }

  Active_item(item_name:string){
    if (item_name == this.item_use){
      this.item_use = "";
    }
    else{
      this.item_use = item_name;
    }
  }
}
