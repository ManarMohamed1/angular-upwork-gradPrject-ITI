import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { NavbarCategoriesComponent } from './layout/navbar-categories/navbar-categories.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { CustomAppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UserCountryService } from './_services/user-country.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarCategoriesComponent,
    DropdownComponent,
     ],
  imports: [
    BrowserModule,
    AuthModule,
    CustomAppRoutingModule,
   
  ],
  // providers: [HowToCommuAndUnderstandTypeService],
  providers: [UserCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
