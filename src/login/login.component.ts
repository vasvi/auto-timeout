import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoLogoutService } from '../services/auto-logout.service';
import { FormGroup } from '@angular/forms';

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
    loginForm = new FormGroup({});

    public navigateToHome() {
        this.router.navigate(['home']);
    }
}