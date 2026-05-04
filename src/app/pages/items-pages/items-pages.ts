import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryServices } from '../../services/inventory/inventory-services';
import { PathKind } from '@angular/forms/signals';
import Item = PathKind.Item;

@Component({
  selector: 'app-items-pages',
  imports: [],
  templateUrl: './items-pages.html',
  styleUrl: './items-pages.css',
})
export class ItemsPages {

  public id :any;
  public items : any;

  constructor( private route: ActivatedRoute ,private router :Router, private inventoryServices : InventoryServices,private cd: ChangeDetectorRef) {
  }

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];

    this.inventoryServices.getItemById(this.id).subscribe({
      next: data => {
        this.items = data;
        this.cd.detectChanges();
      }
      }
    )
  }
  Inventory(){
    this.router.navigateByUrl('/inventory');
  }
}
