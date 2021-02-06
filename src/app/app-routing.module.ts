import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContinueSignUp1Component } from "./auth/continue-sign-up1/continue-sign-up1.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    // {path: 'product/add', component: AddProductComponent},
    // {path: 'product/details/:id', component: ProductDetailsComponent},
    // {path: 'product/edit/:id', component: AddProductComponent},
    // {path: '**', component: ProductListingComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class CustomAppRoutingModule { }