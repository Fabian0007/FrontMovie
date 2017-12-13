import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  details = {};
  limit;
  profileImage;
  

  constructor(private requestService: RequestService, private route: ActivatedRoute,
  		private router: Router){
  		}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.requestService.getPerson(id).subscribe(details => {
        this.details = details;
        console.log(details);
        if(details.images.profiles.length == 1){
          this.profileImage = details.images.profiles[0].file_path;
        }
        else{
          this.profileImage = details.images.profiles[1].file_path;
        }
      });
    });
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }
  
  getProfileImage():string{
    return this.profileImage;
	}
}
