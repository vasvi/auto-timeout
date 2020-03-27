import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { AutoLogoutService } from '../services/auto-logout.service';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let app: AppComponent;
  let autoTimeoutService: AutoLogoutService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AutoLogoutService
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      debugElement = fixture.debugElement;
      app = debugElement.componentInstance;
      autoTimeoutService = debugElement.injector.get(AutoLogoutService);
    });
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'auto-timeout'`, () => {
    expect(app.title).toEqual('AutoTimeout home');
  });

  it(`should call startTimer on component init`, () => {
    spyOn(autoTimeoutService, 'startTimer');
    app.ngOnInit();
    expect(autoTimeoutService.startTimer).toHaveBeenCalledTimes(1);
  });

  it(`should call stopTimer on component destroy`, () => {
    spyOn(autoTimeoutService, 'stopTimer');
    app.ngOnDestroy();
    expect(autoTimeoutService.stopTimer).toHaveBeenCalledTimes(1);
  });

  it(`should call updateLastActive on mousemove`, () => {
    spyOn(autoTimeoutService, 'updateLastActive');
    app.updateLastActivityTime();
    expect(autoTimeoutService.updateLastActive).toHaveBeenCalledTimes(1);
  });
});
