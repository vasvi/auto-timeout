import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app/app.module';
import { AppInitComponent } from './app-init.component';
import { LoginModule } from './login/login.module';
import { AutoLogoutService } from './services/auto-logout.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AutoLogoutModalComponent } from './auto-logout-modal/auto-logout-modal.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppInitComponent,
    AutoLogoutModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModule,
    LoginModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    //AutoLogoutService
  ],
  entryComponents: [
    AutoLogoutModalComponent
  ],
  bootstrap: [AppInitComponent]
})
export class AppInitModule { }
