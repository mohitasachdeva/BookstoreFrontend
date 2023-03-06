import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  bookFlag:boolean=false;
  customerStatus:boolean=false;
  
  constructor(private router:Router) { }
  ngOnInit(): void {
  }
  cartValue:number =0;
  incresase(){
    this.cartValue= this.cartValue+1;
    this.ngOnInit();
  }
  decrease(){
    if(this.cartValue == 0){
      return;
    }
    this.cartValue= this.cartValue-1;
    this.ngOnInit();
  }
  addOrder(){
    if(this.bookFlag == false){
      this.bookFlag = true;
    }
  }
  addDetails(){
    if(this.customerStatus == false){
      this.customerStatus = true;
     
    }
  }
  orderplaced(){
    this.router.navigate(['orderplaced'])
  }

}
