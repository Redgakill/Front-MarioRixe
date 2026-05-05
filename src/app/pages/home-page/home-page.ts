import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  constructor(private router :Router){}

  DirInventory ( ) {
    this.router.navigate(['/inventory']);
  }

  DirBestiary ( ) {
    this.router.navigate(['/bestiary']);
  }



  DirFight(){
    this.router.navigate(['/teams']);
  }

  DirLogin(){
    this.router.navigate(['/login']);
  }

  DirSignUp(){
    this.router.navigate(['/inscription']);
  }
}
