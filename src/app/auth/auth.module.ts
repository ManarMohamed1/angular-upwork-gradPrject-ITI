import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule} from "@angular/router";
import { ContinueSignUp1Component } from "./continue-sign-up1/continue-sign-up1.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({

    declarations: [
        LoginComponent,
        SignupComponent,
        ContinueSignUp1Component,

    ],
    imports: [

        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', children: [
                    { path: 'login', component: SignupComponent },
                    { path: 'signup', component: LoginComponent },
                    { path: 'continue-signUp1', component: ContinueSignUp1Component },  
                ]
            },
        ])
    ],   
    exports: [],
    providers: [],
})
export class AuthModule { }