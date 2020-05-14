import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  team = [
    {
      Name: 'Ashimaa',
      Track: 'System Development',
      SubTrack: 'Mobile Applications Cross Platform',
      Organization: 'ITI Smart Village',
      Image: 'https://lab-shop.herokuapp.com/ashimaa.jpg',
    },
    {
      Name: 'Azhar',
      Track: 'System Development',
      SubTrack: 'Mobile Applications Cross Platform',
      Organization: 'ITI Smart Village',
      Image: 'https://lab-shop.herokuapp.com/azhar.jpg',
    },
    {
      Name: 'Basma',
      Track: 'System Development',
      SubTrack: 'Mobile Applications Cross Platform',
      Organization: 'ITI Smart Village',
      Image: 'https://lab-shop.herokuapp.com/basma.jpg',
    },
    {
      Name: 'Rawan',
      Track: 'System Development',
      SubTrack: 'Mobile Applications Cross Platform',
      Organization: 'ITI Smart Village',
      Image: 'https://lab-shop.herokuapp.com/rawan.jpg',
    },
  ];

  constructor(public navService: NavbarService) {}

  ngOnInit(): void {
    this.navService.show();
  }
}
