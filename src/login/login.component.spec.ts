import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let app: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        app = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    // Assertions
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Application login'`, () => {
    // Assertions
    expect(app.title).toEqual('Application login');
  });

  it('form is invalid with no value and submit button disabled', () => {
    // Setup
    setFormWithNoValue();    
    const button = getSubmitButton();

    // Assertions
    expect(button.nativeElement.disabled).toBeTruthy();
    expect(app.loginForm.valid).toBeFalsy();
  });

  it('form is invalid with validation failed for password field and submit button disabled', () => {
    // Setup
    setFormWithInvalidValue();
    const button = getSubmitButton();

    // Assertions
    expect(button.nativeElement.disabled).toBeTruthy();
    expect(app.loginForm.valid).toBeFalsy();
  });

  it('form is valid and submit button is enabled', () => {
      // Setup
      setFormWithValidValue();
      const button = getSubmitButton();
    
      // Assertions
      expect(button.nativeElement.disabled).toBeFalsy();
      expect(app.loginForm.valid).toBeTruthy();
  });

  it('navigateToHome is called once on submit click', () => {
      // Setup
      setFormWithValidValue();
      const button = getSubmitButton();
      spyOn(app, 'navigateToHome');

      // Action
      button.nativeElement.click();

      // Assertions
      expect(app.navigateToHome).toHaveBeenCalledTimes(1);    
  })

  /** Functions */
  function setFormWithNoValue() {
    app.loginForm.controls['name'].setValue('');
    app.loginForm.controls['password'].setValue('');
  };

  function setFormWithInvalidValue() {
    app.loginForm.controls['name'].setValue('');
    app.loginForm.controls['password'].setValue('sads');
  };

  function setFormWithValidValue() {
    app.loginForm.controls['name'].setValue('vasvi');
    app.loginForm.controls['password'].setValue('testttttt');
  };

  function getSubmitButton() : DebugElement {
    fixture.detectChanges();
    return fixture.debugElement.query(By.css('button'));
  }
});
