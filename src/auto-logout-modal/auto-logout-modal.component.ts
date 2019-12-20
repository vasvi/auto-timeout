import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'auto-logout-modal',
    templateUrl: 'auto-logout-modal.component.html'
})
export class AutoLogoutModalComponent implements OnInit {
    public timeLeft: number;
    private timerSubs: Subscription;

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
        this.timerSubs = timer(1000, 1000).subscribe(val => {
            this.timeLeft = 60 - val;
            if (this.timeLeft === 0) {
                this.timerSubs.unsubscribe();
                this.dialog.closeAll();
            }
        })
    }
}
