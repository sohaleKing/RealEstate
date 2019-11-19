import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DetailsComponent } from './details/details.component';   
import { SearchComponent } from './search/search.component';
import { GuidsComponent } from './guids/guids.component';
import { ShowComponent } from './show/show.component';
import { ContentComponent } from './content/content.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes : Routes =[
{path : '', component: ContentComponent},
{path : 'login', component: LoginComponent},
{path : 'registration', component: RegistrationComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    DetailsComponent,
    SearchComponent,
    GuidsComponent,
    ShowComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, NgbModule, FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
