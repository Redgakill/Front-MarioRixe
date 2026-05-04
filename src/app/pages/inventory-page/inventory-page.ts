import {ChangeDetectorRef, Component} from '@angular/core';

import {Router, RouterOutlet} from '@angular/router';
import { InventoryServices } from '../../services/inventory/inventory-services';
@Component({
  selector: 'app-inventory-page',
  imports: [],
  templateUrl: './inventory-page.html',
  styleUrl: './inventory-page.css',
})
export class InventoryPage {
  public items :any=[]

  constructor(private router :Router, private inventoryServices : InventoryServices,private cd: ChangeDetectorRef) {}

  ngOnInit(){
    this.inventoryServices.getAllItem().subscribe({
      next: data => {
        this.items = data;
        this.Trieby("name")
        this.cd.detectChanges();
      }
    })
  }
  Trieby(propriete: string){
    this.items.sort((a: any, b: any) => {
      if (a[propriete]  === null) {
        return 1;
      }
      if ( b[propriete] === null) {
        return -1;
      }
      else if (typeof a[propriete] === 'string') {
        return a[propriete].localeCompare(b[propriete]);
      }
      return a[propriete] - b[propriete];
    });
  }
  HomePage(){
    this.router.navigate(['/']);
  }
  ItemPage(id:string){
    this.router.navigate([`/inventory/${id}`]);
  }
}




