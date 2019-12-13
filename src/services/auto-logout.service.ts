import { Injectable } from "@angular/core";
import { timer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutoLogoutService {
    private lastActivityTime: Date;

    constructor() {

    }

    startTimer = () => {
        console.log('start timer called');
        this.lastActivityTime = new Date();

        const source = timer(1000, 10000).subscribe(val => {
            // Check if last activity time is more than the defined time.

            const diff = Math.round( (new Date().getTime() - this.lastActivityTime.getTime()) / 1000 / 60);
            console.log(diff);
            if ( diff >= 2) {
                alert("timeout");
                // Todo: Remove this alert and add a modal with option to renew session
                // Todo: Redirect user to login page if not responded on the modal in 60 seconds.  
            }
        })
    }

    updateLastActive = () => {
        console.log('updateLastActive called');
        this.lastActivityTime = new Date();
    }

}