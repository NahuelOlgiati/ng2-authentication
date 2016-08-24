import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PanelModule, AutoCompleteModule, DataTableModule, SharedModule, TabViewModule} from 'primeng/primeng';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./header.component";
import { AppRouterModule } from "./app-router.module";
import { AuthGuard } from "./core/auth/auth.guard";
import { AuthService } from "./core/auth/auth.service";
import { SigninComponent } from "./core/auth/signin.component";
import { SignupComponent } from "./core/auth/signup.component";
import { ProtectedComponent } from "./protected/protected.component";

import { CUSTOM_HTTP_PROVIDER } from "./core/custom-http/custom-http.provider";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent
    ],
    imports: [BrowserModule, HttpModule, AppRouterModule, FormsModule, ReactiveFormsModule, PanelModule, AutoCompleteModule, DataTableModule, SharedModule, TabViewModule],
    providers: [
        AuthGuard,
        AuthService,
        CUSTOM_HTTP_PROVIDER
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }