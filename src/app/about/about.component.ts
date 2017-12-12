import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  goToTmdb() : void {
     window.open("https://www.themoviedb.org/");
  }
  
  goToGitHub() : void {
     window.open("https://github.com/Fabian0007/FrontMovie");
  }
}
