import { PriceList } from "@medusajs/medusa";

export declare module "@medusajs/medusa/dist/models/product" {
    declare interface Product {
      year: number;
      alchool: number;
      grape: string;
    }
    
  }

export declare module "@medusajs/medusa/dist/models/sales-channel"{
  declare interface SalesChannel{
    price_lists: PriceList[]
  }
}

export declare module "@medusajs/medusa/dist/models/price-list"{
  declare interface PriceList{
    sales_channel: SalesChannel
  }
}