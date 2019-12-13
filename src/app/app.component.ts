import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from '../services/auto-logout.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private autoLogoutService: AutoLogoutService) 
  {}
  title = 'auto-timeout';

  ngOnInit() {
    this.autoLogoutService.startTimer();

    document.addEventListener("mousemove", this.updateLastActivityTime);
    document.addEventListener("keyup", this.updateLastActivityTime);
  }

  /**
   * name
   */
  updateLastActivityTime = () => {
    this.autoLogoutService.updateLastActive();
  }
}
