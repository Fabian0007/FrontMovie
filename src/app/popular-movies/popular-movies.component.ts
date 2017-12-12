import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent implements OnInit {
  baseUrl: string = "http://image.tmdb.org/t/p/w300/";
  movies: Array<string> = [];
  constructor(private requestService: RequestService, private route: ActivatedRoute,
  		private router: Router) { }

  ngOnInit(){
    this.requestService.getPopular()
      .subscribe(movies => {
        this.movies = movies.slice(0,10);
      });
  }
  
  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  goMovie(id:number): void {
    this.router.navigate(['/movie/'+id]);
  }
}
