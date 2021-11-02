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
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HrpageComponent } from './hrpage/hrpage.component';

const appRoot: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: ResgisterComponent },
  { path: 'products', component: ProductComponent },
  { path: 'employees', component: EmployeeComponent },
  {
    path: 'hrpage',
    children: [
      { path: '', component: HrpageComponent },
      { path: 'register', component: ResgisterComponent },
    ],
  },
];

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
    CountryCodePipe,
    ProductComponent,
    HrpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
