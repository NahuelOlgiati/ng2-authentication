import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { AuthService } from "./core/auth/auth.service";

@Component({
    moduleId: module.id,
    selector: 't-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    constructor(private authService: AuthService) { }

    isAuth() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.logout();
    }
}
