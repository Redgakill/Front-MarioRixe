import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-bestiary-page',
  imports: [],
  templateUrl: './bestiary-page.html',
  styleUrl: './bestiary-page.css',
})
export class BestiaryPage {

  constructor(private router :Router){}

  HomePage(){
    this.router.navigate(['/']);
  }
}
