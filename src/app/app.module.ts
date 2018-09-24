import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CustomersService } from './services/customers.service';
import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { TransactionsService } from './services/transactions.service';
import { TransactionIndexComponent } from './components/transaction/transaction-index/transaction-index.component';
import { CustomerIndexComponent } from './components/customer/customer-index/customer-index.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { RetailersService } from './services/retailer.service';
import { RetailerCreateComponent } from './components/retailer/retailer-create/retailer-create.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductIndexComponent },
  { path: 'customers', component: CustomerIndexComponent },
  { path: 'transactions', component: TransactionIndexComponent },
  {path: 'create', component: RetailerComponent},
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ProductIndexComponent,
    TransactionIndexComponent,
    CustomerIndexComponent,
    RetailerCreateComponent,
    RetailerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    AuthService,
    CustomersService, 
    ProductsService,
    CustomersService,
    TransactionsService,
    RetailersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
