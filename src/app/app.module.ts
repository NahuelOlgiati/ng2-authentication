import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/components/panel/panel';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { CarouselModule } from 'primeng/components/carousel/carousel';
import { GrowlModule } from 'primeng/components/growl/growl';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./header.component";
import { AppRouterModule } from "./app-router.module";
import { AuthGuard } from "./core/auth/auth.guard";
import { AuthService } from "./core/auth/auth.service";
import { SigninComponent } from "./core/auth/signin.component";
import { SignupComponent } from "./core/auth/signup.component";
import { ProtectedComponent } from "./protected/protected.component";

import { CUSTOM_HTTP_PROVIDER } from "./core/custom-http/custom-http.provider";

import { DocumentTypeListComponent } from './document-type/document-type-list/document-type-list.component';
import { LogoutComponent } from "./core/auth/logout.component";
import { DocumentTypeItemComponent } from './document-type/document-type-item/document-type-item.component';
import { GrowlMessageService } from './core/growl-message/growl-message.service';
import { ErrorPageComponent } from "./core/error-page/error-page.component";
import { DocumentTypeService } from './document-type/document-type.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent,
        LogoutComponent,
        DocumentTypeListComponent,
        DocumentTypeItemComponent,
        ErrorPageComponent
    ],
    imports: [BrowserModule, HttpModule, AppRouterModule, FormsModule, ReactiveFormsModule, PanelModule, AutoCompleteModule, DataTableModule, TabViewModule, CarouselModule, GrowlModule],
    providers: [
        AuthGuard,
        AuthService,
        CUSTOM_HTTP_PROVIDER,
        GrowlMessageService,
        DocumentTypeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }