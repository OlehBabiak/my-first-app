import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = '';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ["Test server", "Test server 2"];
  showSecret = false
  log = []


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreation = 'Server was created!' + this.serverName
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }


  onToggleDisplay() {
    this.showSecret = !this.showSecret
    this.log.push(new Date())
  }
}
