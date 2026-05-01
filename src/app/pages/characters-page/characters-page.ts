import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterServices } from '../../services/character/character-services';
import { FightServices } from '../../services/fight/fight-services';

@Component({
  selector: 'app-characters-page',
  imports: [],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {
  private id:any;
  public characters :any;
  public attacks:any[] =[];
  public maxhp:any;
  constructor( private route: ActivatedRoute , private router :Router, private characterServices : CharacterServices,private cd: ChangeDetectorRef,private fightservice: FightServices,) {}

  ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id')

    this.characterServices.getCharacterbyId(this.id).subscribe({
      next: data => {
        this.characters = data;
        if (this.characters.hp > 20) {
          this.maxhp=this.characters.hp
        }
        else{
          this.maxhp=20
        }
        this.characters.move_set.forEach((attack :any) => {
          this.fightservice.getAttackById(attack._id).subscribe({
            next: (data) => {
              this.attacks.push(data);
              this.cd.detectChanges();
            }
          })
        })
        this.cd.detectChanges();
      }
    })
  }


  Mariodex(){
    this.router.navigate(['/bestiary']);
  }
}
