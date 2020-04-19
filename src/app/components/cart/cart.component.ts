import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id;
  constructor(activeRouterLink:ActivatedRoute, public router:Router) {
    this.id=activeRouterLink.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
