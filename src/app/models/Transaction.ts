import { Customer } from '../models/Customer'
import { Product } from '../models/Product'
export interface Transaction {
    TransactionId?: number;
    ProductId?: number;
    // Product: Product;
    NumItems: number;
    ProductName: string;
    ProductQuntity: number;
    ProductUPC: number;
    ProductPrice: number;
    CustomerId?: number;
    // Customer: Customer;
    TransactionDate: Date;
}