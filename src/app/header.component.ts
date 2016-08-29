import { Component } from "@angular/core";
import { LogoutComponent } from "./core/auth/logout.component";

@Component({
    moduleId: module.id,
    selector: 't-header',
    templateUrl: 'header.component.html',
    directives: [ LogoutComponent ]
})
export class HeaderComponent {
}
