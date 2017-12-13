import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RequestService } from './request.service';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularPeopleComponent } from './popular-people/popular-people.component';
import { TechnologiesComponent } from './technologies/technologies.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
	{ path: '',  component: HomeComponent },
	{ path: 'movies', component: AboutComponent },
	{ path: 'movie/:id', component: MovieComponent },
	{ path: 'person/:id', component: PersonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HeaderComponent,
    AboutComponent,
    PopularMoviesComponent,
    PopularPeopleComponent,
    TechnologiesComponent,
    MovieComponent,
    HomeComponent,
    PersonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
