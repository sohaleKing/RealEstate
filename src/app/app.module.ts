import { BrowserModule } from '@angular/platform-browser';                   
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //npm install @fortawesome/fontawesome-svg-core $ npm install @fortawesome/free-solid-svg-icons # See Compatibility table below to choose a correct version $ npm install @fortawesome/angular-fontawesome@<version>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';              //npm install --save @ng-bootstrap/ng-bootstrap --> you need to import this and also inside the imports-->this would be apply for tabset and courasol boostraps
import { RouterModule, Routes } from '@angular/router';              //when you have routing in your page
import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   //when you use TD form you need to add this

import { BrokersService } from './services/brokers.service';        //adding a service injection
import { HousesService } from './services/houses.service';

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
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ExpertTipsComponent } from './expert-tips/expert-tips.component';
import { DetailsComponent } from './details/details.component';
import { BookingComponent } from './booking/booking.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { DealsComponent } from './deals/deals.component';
import { VisitComponent } from './visit/visit.component';



const appRoutes: Routes = [                       //you have to add this array for maping the routering and also use routeLink and <router-outlet>
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tips', component: ExpertTipsComponent },
  { path: 'home', component: ContentComponent, children : [
    { path: '', component: DatabaseComponent },
    { path: 'newsletter', component: NewsletterComponent },
  ] },
  { path: 'list', component: ListComponent},
  { path : 'details/:id', component : BookingComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'sell', component: SellComponent},
   { path: 'deals', component: DealsComponent},
   { path: 'deals/:ListingId', component: VisitComponent},

  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  NavbarComponent,
  SearchComponent,
  ContentComponent,
  ListComponent,
  RegisterComponent,
  PageNotFoundComponent,
  FooterComponent,
  DatabaseComponent,
  CartsComponent,
  NewsletterComponent,
  ExpertTipsComponent,
  DetailsComponent,
  BookingComponent,
  BuyComponent,
  SellComponent,
  DealsComponent,
  VisitComponent,
  ],
  
  imports: [
    BrowserModule,
    FontAwesomeModule,                                      // we have to add after importing line 3 {FontAwesomeModule}
    NgbModule,                                              // we have to add after importing line 4 @ng-bootstrap/ng-bootstrap
    RouterModule.forRoot(appRoutes),                       //you adding this import with the line 5 @angular/router
    FormsModule,                                           //when you use TD forms
    ReactiveFormsModule,                                   //when you use TD forms
  ],
  providers: [ BrokersService,
  HousesService,
  ],
  bootstrap: [AppComponent]                                
})
export class AppModule { }                                 
