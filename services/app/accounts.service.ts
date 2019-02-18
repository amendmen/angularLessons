import { LoggingService } from "./logging-service";
import { Injectable } from "@angular/core";
import { EventEmitter } from "selenium-webdriver";

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      satatusUpdated = new EventEmitter<string>();

      constructor(private LoggingService: LoggingService) {}
      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status})
        this.LoggingService.logStatusChange(status)
      } 
      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.LoggingService.logStatusChange(status)
      }
}