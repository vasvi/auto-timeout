import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoLogoutService } from '../services/auto-logout.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component ({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(
        private router: Router,
        private autoLogoutService: AutoLogoutService
    ) {}

    title = 'Application login';
    loggedIn = false;
    name = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);

    loginForm = new FormGroup({
        name: this.name,
        password: this.password
    });

    public navigateToHome() {
        this.loggedIn = true;
        this.router.navigate(['home']);
    }
}