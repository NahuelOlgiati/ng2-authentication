import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./core/auth/auth.guard";
import { SignupComponent } from "./core/auth/signup.component";
import { SigninComponent } from "./core/auth/signin.component";
import { ProtectedComponent } from "./protected/protected.component";
import { ErrorPageComponent } from "./core/error-page/error-page.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
    { path: 'error-page', component: ErrorPageComponent },
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
