import { Component, Input } from '@angular/core';
import {LoggingService} from '../logging-service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private LoggingService: LoggingService,
              private AccountsService: AccountsService) {}

  onSetTo(status: string) {
    this.AccountsService.updateStatus(this.id, status)
    // this.LoggingService.logStatusChange(status);
    this.AccountsService.satatusUpdated.emit(status);

  }
}
