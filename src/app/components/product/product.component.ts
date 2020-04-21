import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id;
  constructor(activeRouterLink:ActivatedRoute, public router:Router) {
    this.id=activeRouterLink.snapshot.params.id;
  }
  ngOnInit(): void {
  }

}
