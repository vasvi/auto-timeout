import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app/app.module';
import { LoginComponent } from './login/login.component';
import { AppInitComponent } from './app-init.component';
import { LoginModule } from './login/login.module';
import { AutoLogoutService } from './services/auto-logout.service';

@NgModule({
  declarations: [
    AppInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModule,
    LoginModule
  ],
  providers: [
    AutoLogoutService
  ],
  bootstrap: [AppInitComponent]
})
export class AppInitModule { }
