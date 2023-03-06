import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface sorts{
  value: string;
  selectValue: string;
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sorts: sorts[] = [
    {value:'',selectValue:'sort by relevance'},
    {value:'price:High to Low',selectValue:'price:High to Low'},
    {value:'price:Low to High',selectValue:'price:Low to High'},
    {value:'Newest arrivals',selectValue:'Newest arrivals'}

  ];
  button :string= "ADD TO BAG"
  onAdd(){
      this.button = "AddedToCart"
  }
  onMouseOver(){
    alert("Hello")
  }
  }


