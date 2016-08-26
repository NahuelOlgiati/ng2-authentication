import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import {Message} from 'primeng/primeng';

import { HeaderComponent } from "./header.component";
import { GrowlMessageService } from "./core/growl-message/growl-message.service";

@Component({
  moduleId: module.id,
  selector: 't-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  msgs: Message[] = [];

  constructor(private growlMessageService: GrowlMessageService) { }

  ngOnInit() {
    this.growlMessageService.onError((msgs: Message[]) => {
      this.msgs.splice(0, this.msgs.length);
      for (var i = 0; i < msgs.length; i++) {
        this.msgs.push(msgs[i]);
      }
    });
  }
}