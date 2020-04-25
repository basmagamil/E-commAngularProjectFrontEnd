import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  team = [
    {
      "Name": "Ashimaa",
      "Track": "System Development",
      "SubTrack": "Mobile Applications Cross Platform",
      "Organization": "ITI Smart Village",
      "Image": "assets/images/profilepics/defaultfemale.jpeg"
    },
    {
      "Name": "Azhar",
      "Track": "System Development",
      "SubTrack": "Mobile Applications Cross Platform",
      "Organization": "ITI Smart Village",
      "Image": "assets/images/profilepics/defaultfemale.jpeg"
    },
    {
      "Name": "Basma",
      "Track": "System Development",
      "SubTrack": "Mobile Applications Cross Platform",
      "Organization": "ITI Smart Village",
      "Image": "assets/images/profilepics/defaultfemale.jpeg"
    },
    {
      "Name": "Rawan",
      "Track": "System Development",
      "SubTrack": "Mobile Applications Cross Platform",
      "Organization": "ITI Smart Village",
      "Image": "assets/images/profilepics/defaultfemale.jpeg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
