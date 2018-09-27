export interface Product {
    ProductId?: number;
    ProductName: string;
    ProductUpc?: number;
    ProductPrice?: number;
    ProductQuantity: number;
    // ProductCost?: number;
    // ProductProfit?: number;
    // ProductOnSale?: boolean;
    ProductCategory: string;
    ProductDescription: string;
    RetailerId?: number;
    OwnerId?: string;
}
