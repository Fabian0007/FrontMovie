import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.css']
})
export class PopularPeopleComponent implements OnInit {
  baseUrl: string = "http://image.tmdb.org/t/p/w300/";
  people: Array<string> = [];
  constructor(private requestService: RequestService, private route: ActivatedRoute,
  		private router: Router) { }

  ngOnInit(){
    this.requestService.getPopularPeople()
      .subscribe(people => {
        this.people = people.results.slice(0,10);
      });
  }
  
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  goPerson(id:number): void {
    this.router.navigate(['/person/'+id]);
    this.ngAfterViewInit();
  }
  
  goMovie(id:number): void {
    this.router.navigate(['/movie/'+id]);
    this.ngAfterViewInit();
  }
  
  ngAfterViewInit() {
	  window.scrollTo(0, 0);
  }
}

