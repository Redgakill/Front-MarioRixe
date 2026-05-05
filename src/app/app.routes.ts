import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {FightPage} from './pages/fight-page/fight-page';
import {BestiaryPage} from './pages/bestiary-page/bestiary-page';
import {InventoryPage} from './pages/inventory-page/inventory-page';
import { CharactersPage } from './pages/characters-page/characters-page';
import { ChoseCharacter } from './pages/chose-character/chose-character';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'fight', component: FightPage},
  {path: 'bestiary', component: BestiaryPage},
  {path: 'inventory', component: InventoryPage },
  {path: 'character/:id', component: CharactersPage},
  {path: "teams", component: ChoseCharacter}
];
