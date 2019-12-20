import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoLogoutService } from '../services/auto-logout.service';

@Component ({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(
        private router: Router,
        private autoLogoutService: AutoLogoutService
    ) {

    }
    title = 'Application login';

    public navigateToHome() {
        this.router.navigate(['home']);
    }
}