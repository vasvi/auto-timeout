import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component ({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(
        private router: Router,
    ) {}

    title = 'Application login';
    name = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required, Validators.minLength(6)]);

    loginForm = new FormGroup({
        name: this.name,
        password: this.password
    });

    public navigateToHome() {
        this.router.navigate(['home']);
    }
}