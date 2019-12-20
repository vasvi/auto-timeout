import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoLogoutService } from '../services/auto-logout.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private autoLogoutService: AutoLogoutService) 
  {}
  title = 'auto-timeout';

  ngOnInit() {
    this.autoLogoutService.startTimer();
    this.addEventListeners();
  }

  ngOnDestroy() {
    console.log("destroy called");
    this.autoLogoutService.stopTimer();
    this.removeEventListeners();
  }

  updateLastActivityTime = () => {
    this.autoLogoutService.updateLastActive();
  }

  addEventListeners = () => {
    document.addEventListener("mousemove", this.updateLastActivityTime);
    document.addEventListener("keyup", this.updateLastActivityTime);
  }

  removeEventListeners = () => {
    document.removeEventListener("mousemove", this.updateLastActivityTime);
    document.removeEventListener("keyup", this.updateLastActivityTime);

  }
}
