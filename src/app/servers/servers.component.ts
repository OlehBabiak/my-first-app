import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'No server was created!';
  serverName: string = 'Testserver';
  userCreation: string = '';
  userName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreation = 'Server was created!' + this.serverName
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }

  onCreateUser() {
    this.userName = this.userCreation
  }

  onCreateUserName(event: Event) {
    this.userCreation = (<HTMLInputElement>event.target).value
  }
}
