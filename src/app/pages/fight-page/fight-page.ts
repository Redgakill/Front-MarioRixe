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
  public cout = 0;
  public attacks: any[] = [];
  public BotAttacks: any[] = [];
  public items: any[] = [];
  private item_use = '';
  public Playerscharacters: any;
  public Botcharacters: any;
  public playermaxhealth: any;
  public botmaxhealth: any;
  public logs: any[] = [];
  public finish = false;

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
    private router: Router,
    private characterservics: CharacterServices,
    private fightservice: FightServices,
    private itemservices: InventoryServices,
  ) {}

  ngOnInit() {
    this.characterservics.getAllCharacter().subscribe({
      next: (data) => {
        this.Playerscharacters = data[91];
        this.playermaxhealth = this.Playerscharacters.hp;
        this.Playerscharacters.status = [];
        this.Botcharacters = data[87];
        this.Botcharacters.status = [];
        this.botmaxhealth = this.Botcharacters.hp;
        this.Playerscharacters.move_set.forEach((attack :any) => {
          this.fightservice.getAttackById(attack._id).subscribe({
            next: (data) => {
              this.attacks.push(data);
              this.cd.detectChanges();
            }
          })
        });
        this.Botcharacters.move_set.forEach((move :any) => {
          this.fightservice.getAttackById(move._id).subscribe({
            next: (data) => {
              this.BotAttacks.push(data);
              this.cd.detectChanges();
            }
          })
        })
        this.cd.detectChanges();
      },
    });
    this.itemservices.getAllItem().subscribe({
      next: (data) => {
        this.items = data;
        this.cd.detectChanges();
      },
    });
  }
  Attaquer(attack: any) {
    if (attack.fp_cost > this.cout) {
      this.logs.unshift('Nombre de FP insufisant');
      return;
    } else {
      this.cout = this.cout - attack.fp_cost;
    }
    const data_send = {
      self: this.Playerscharacters,
      enemy: this.Botcharacters,
      attackSlug: attack.slug,
      itemSlug: this.item_use,
    };
    this.fightservice.Fight(data_send).subscribe({
      next: (data) => {
        this.Playerscharacters = data.self;
        if (this.Playerscharacters.hp > this.playermaxhealth) {
          this.Playerscharacters.hp = this.playermaxhealth;
        }
        this.Botcharacters = data.enemy;
        this.logs.unshift(data.log);
        this.item_use = '';
        this.cout += 1;
        if (this.Botcharacters.hp == 0) {
          this.logs.unshift('YOU WIN');
          this.finish = true;
          this.cd.detectChanges();
          return;
        }
        setTimeout(() => {
          console.log('this is the second for bot attack');
        }, 30000);
        this.cd.detectChanges();
        this.Bot_Attackt();
      },
    });
  }
  Bot_Attackt() {
    const randomIndex = Math.floor(Math.random() * this.BotAttacks.length);
    const Attackrandom = this.BotAttacks[randomIndex].slug;
    const data_send = {
      self: this.Botcharacters,
      enemy: this.Playerscharacters,
      attackSlug: Attackrandom,
      itemSlug: null,
    };
    this.fightservice.Fight(data_send).subscribe({
      next: (data) => {
        this.Playerscharacters = data.enemy;
        this.Botcharacters = data.self;
        this.logs.unshift(data.log);
        if (this.Playerscharacters.hp == 0) {
          this.logs.unshift('BOT WIN');
          this.finish = true;
        }
        this.cd.detectChanges();
      },
    });
    if(this.Playerscharacters.status !== undefined ||this.Playerscharacters.status !== null  ){
      if (this.Playerscharacters.status.duration > 0 || this.Playerscharacters.status.duration != null) {
        this.Playerscharacters.status.duration -= 1;
      }
    }
    if(this.Botcharacters.status !== undefined ||this.Botcharacters.status !== null  ){
      if (this.Botcharacters.status.duration > 0 || this.Botcharacters.status.duration != null) {
        this.Botcharacters.status.duration -= 1;
      }
    }
  }

  Active_item(item_name: string) {
    if (item_name == this.item_use) {
      this.item_use = '';
    } else {
      this.item_use = item_name;
    }
  }

  HomePage(){
    this.router.navigate(['/'])
  }
}
