import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    // {path: 'login' , component: LoginComponent},
    // {path: 'register' , component: RegisterComponent},
    // {path: 'product/listing', component: ProductListingComponent},
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