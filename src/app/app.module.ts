import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';                  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //npm install @fortawesome/fontawesome-svg-core $ npm install @fortawesome/free-solid-svg-icons # See Compatibility table below to choose a correct version $ npm install @fortawesome/angular-fontawesome@<version>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';              //npm install --save @ng-bootstrap/ng-bootstrap --> you need to import this and also inside the imports-->this would be apply for tabset and courasol boostraps
import { RouterModule, Routes } from '@angular/router';              //when you have routing in your page


import { AppComponent } from './app.component';                     //by adding any component will add here and also insde the @NgModule
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { DatabaseComponent } from './database/database.component';
import { CartsComponent } from './carts/carts.component';



const appRoutes: Routes = [                       //you have to add this array for maping the routering and also use routeLink and <router-outlet>
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: ContentComponent },


  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
  AppComponent, LoginComponent, NavbarComponent, SearchComponent, ContentComponent, ListComponent, RegisterComponent, PageNotFoundComponent, FooterComponent, DatabaseComponent, CartsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,                                      // we have to add after importing line 3 {FontAwesomeModule}
    NgbModule,                                              // we have to add after importing line 4 @ng-bootstrap/ng-bootstrap
    RouterModule.forRoot(appRoutes, )                       //you adding this import with the line 5 @angular/router
  ],
  providers: [],
  bootstrap: [AppComponent]                                
})
export class AppModule { }                                 
