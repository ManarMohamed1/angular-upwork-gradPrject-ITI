import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { NavbarCategoriesComponent } from './layout/navbar-categories/navbar-categories.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup//signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarCategoriesComponent,
    DropdownComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
