import { TestBed, async } from '@angular/core/testing';
import { AutoLogoutService } from './auto-logout.service';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

describe('AutoLogoutService', () => {
    let autoLogoutService: AutoLogoutService;
    let router: Router;
    let dialog: MatDialog;

    beforeEach(async(() => {
        autoLogoutService = new AutoLogoutService(router, dialog);
    }));

    it(`service should be created`, () => {
        expect(autoLogoutService).toBeTruthy();
        expect(autoLogoutService.getTimeoutModalVisible()).toBeFalsy();
    });

    it(`calling startTimer should set lastActivityTime to current date`, () => {
        let date = new Date();
        autoLogoutService.startTimer();
        expect(autoLogoutService.getLastActiveDate()).toEqual(date);
    });

    it(`calling showTimeoutModal changes timeoutModalVisible to true`, () => {
        autoLogoutService.showTimeoutModal();
        expect(autoLogoutService.getTimeoutModalVisible()).toBeTruthy();
    });
})