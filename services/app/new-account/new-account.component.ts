import { Component } from '@angular/core';
import {LoggingService} from '../logging-service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {

constructor(private LoggingService: LoggingService
            private AccountsService: AccountsService) {
              this.AccountsService.satatusUpdated.subscribe(
                (status: string) => alert('New Status ' + status)
              );
            }

  onCreateAccount(accountName: string, accountStatus: string) {
     this.AccountsService.addAccount(accountName, accountStatus)
    // this.LoggingService.logStatusChange(accountStatus);
  }
}
