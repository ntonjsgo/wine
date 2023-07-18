
import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostPriceListsPriceListReq as MedusaAdminPostPriceListsPriceListReq } from '@medusajs/medusa/dist/api/routes/admin/price-lists/create-price-list';
import { IsString } from 'class-validator';



export default async function () {
    const imports = (await import(
      "@medusajs/medusa/dist/api/routes/admin/price-lists/index"
    )) as any
    imports.defaultAdminPriceListFields = [
      ...imports.defaultAdminPriceListFields,
      "sales_channel_id"
    ]
    imports.defaultAdminPriceListRelations = [
        ...imports.defaultAdminPriceListRelations, "sales_channel"
    ]
  }

/*

class AdminPostPriceListsPriceListReq extends MedusaAdminPostPriceListsPriceListReq {
  @IsString()
  sales_channel: string;
  @IsString()
  sales_channel_id: string ;
}

registerOverriddenValidators(AdminPostPriceListsPriceListReq);
/*
export default async function () {
  const adminImports = (await import(
    '@medusajs/medusa/dist/api/routes/admin/products/index'
  )) as any;
  adminImports.defaultAdminProductFields = [
    ...adminImports.defaultAdminProductFields,
    'title_ar',
  ];

  const storeImports = (await import(
    '@medusajs/medusa/dist/api/routes/store/products/index'
  )) as any;
  storeImports.allowedStoreProductsFields = [
    ...storeImports.allowedStoreProductsFields,
    'title_ar',
  ];
  storeImports.defaultStoreProductsFields = [
    ...storeImports.defaultStoreProductsFields,
    'title_ar',
  ];
}*/

