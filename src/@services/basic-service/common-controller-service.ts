import { Injectable } from "@angular/core";
// import { EventsService } from "./index";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
    providedIn: "root",
  })
export class CommonService {
    constructor(private notification: NzNotificationService, private message: NzMessageService) 
    {}
}