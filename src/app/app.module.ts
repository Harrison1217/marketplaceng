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
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { RetailerCreateComponent } from './components/retailer/retailer-create/retailer-create.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { TransactionDetailComponent } from './components/transaction/transaction-detail/transaction-detail.component';
import { RetailerDetailComponent } from './components/retailer/retailer-detail/retailer-detail.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { AuthGuard } from './auth.guard';
import { RetailerEditComponent } from './components/retailer/retailer-edit/retailer-edit.component';
import { RetailerDeleteComponent } from './components/retailer/retailer-delete/retailer-delete.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { FaqComponent } from './components/faq/faq.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'product', children: [
      { path: '', component: ProductIndexComponent },
      { path: 'create', component: ProductCreateComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
      { path: 'edit/:id', component: ProductEditComponent },
      //{ path: 'delete/:id', component: ProductDeleteComponent }
    ]
  },
  { path: 'faq', component: FaqComponent },

  {
    path: 'customer', canActivate: [AuthGuard], children: [
      { path: '', component: CustomerIndexComponent },
      { path: 'create', component: CustomerCreateComponent },
      { path: 'detail/:id', component: CustomerDetailComponent },
      { path: 'edit/:id', component: CustomerEditComponent },
      { path: 'delete/:id', component: CustomerDeleteComponent }
    ]
  },

  { path: 'transactions', component: TransactionIndexComponent },
  {
    path: 'retailer', children: [
      { path: '', component: RetailerComponent },
      { path: 'create', component: RetailerCreateComponent },
      { path: 'detail/:id', component: RetailerDetailComponent },
      { path: 'edit/:id', component: RetailerEditComponent },
      { path: 'delete/:id', component: RetailerDeleteComponent }
    ]
  },  {
    path: 'transactions', children: [
      { path: '', component: TransactionIndexComponent },
      { path: 'create', component: TransactionIndexComponent },
      { path: 'detail/:id', component: TransactionDetailComponent }
    ]
  },
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
    ProductCreateComponent,
    ProductDetailComponent,
    CustomerCreateComponent,
    RetailerCreateComponent,
    RetailerComponent,
    TransactionDetailComponent,
    RetailerDetailComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    RetailerEditComponent,
    RetailerDeleteComponent,
    ProductEditComponent,
    FaqComponent
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
    AuthGuard,
    CustomersService,
    ProductsService,
    CustomersService,
    TransactionsService,
    RetailersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
