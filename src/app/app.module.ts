import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { HeaderComponent } from './header/header.component';
import { ExprPipe } from './expr.pipe';
import { GenderPipe } from './gender.pipe';
import { CountryCodePipe } from './country-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    LoginComponent,
    EmployeeComponent,
    ResgisterComponent,
    HeaderComponent,
    ExprPipe,
    GenderPipe,
    CountryCodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
