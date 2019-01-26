import { Component, OnInit } from '@angular/core';
import { ItemOrderService } from '../service/item-order.service';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.css']
})
export class ItemOrderComponent implements OnInit {
  item: any;
  constructor(private itemOrderService: ItemOrderService) { }

  ngOnInit() {
    this.item = this.itemOrderService.getItemById();
    debugger;
    /*{
      type:1,
      plant: "תירס",
      form: "זרעים",
      purpose: "רבייה",
      country: "ארגנטינה"
    };*/
    
  }
  send() {

    console.log(this.item);
    var response = this.itemOrderService.sendItem(this.item);
    alert(response);
   
  }

}
