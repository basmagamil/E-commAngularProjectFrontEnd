import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CartService } from './services/cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateComponent } from './components/products/update/update.component';
import { AddComponent } from './components/products/add/add.component';
import { ViewItemComponent } from './components/products/view-item/view-item.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { OrdersService } from './services/orders.service';
import { EdituserComponent } from './components/profile/edituser/edituser.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    CartComponent,
    OrdersComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    UpdateComponent,
    AddComponent,
    ViewItemComponent,
    FooterComponent,
    EdituserComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    Ng2SearchPipeModule
  ],
 
  providers: [ProductsService, UsersService, CartService, OrdersService],
  bootstrap: [AppComponent],
  entryComponents: [EdituserComponent]
})
export class AppModule { }
