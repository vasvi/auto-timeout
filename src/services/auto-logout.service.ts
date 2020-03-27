import { Injectable } from "@angular/core";
import { timer, Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { AutoLogoutModalComponent } from '../auto-logout-modal/auto-logout-modal.component';
import { AutoTimeoutConstants } from '../Constants';

@Injectable({
    providedIn: 'root'
})
export class AutoLogoutService {
    private lastActivityTime: Date;
    private timeoutModalVisible = false;
    private timer$: Subscription;

    constructor(
        private router: Router,
        private dialog: MatDialog
    ) {

    }

    startTimer = () => {
        console.log('start timer called');
        this.lastActivityTime = new Date();

        this.timer$ = timer(1000, 10000).subscribe(val => {
            // Check if last activity time is more than the defined time.

            const diff = Math.round( (new Date().getTime() - this.lastActivityTime.getTime()) / 1000 / 60);
            console.log(diff);
            if (diff >= AutoTimeoutConstants.idleWaitTime && !this.timeoutModalVisible) {
                console.log('TIMEOUT');
                this.showTimeoutModal();
            }
        })
    }

    stopTimer = () => {
        this.timer$.unsubscribe();
    }

    showTimeoutModal = () => {
        this.timeoutModalVisible = true;
        const dialogRef = this.dialog.open(AutoLogoutModalComponent);

        dialogRef.afterClosed().subscribe(val => {
            console.log("after closed" + val);
            this.timeoutModalVisible = false;

            if(!val) {
                this.router.navigate(['/']);
            }
        })

    }

    updateLastActive = () => {
        console.log('updateLastActive called');
        this.lastActivityTime = new Date();
    }

    /** This function is only needed for unit test */
    getLastActiveDate = () => {
        return this.lastActivityTime;
    }

    getTimeoutModalVisible = () => {
        return this.timeoutModalVisible;
    }
}