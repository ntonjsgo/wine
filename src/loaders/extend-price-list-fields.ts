
import { registerOverriddenValidators } from '@medusajs/medusa';
import { AdminPostPriceListsPriceListReq as MedusaAdminPostPriceListsPriceListReq } from '@medusajs/medusa/dist/api/routes/admin/price-lists/create-price-list';
import { IsString, IsOptional } from 'class-validator';
import { registerExtendedValidator } from 'utils/register-extended-validator';
import { AdminPostPriceListsPriceListPriceListReq as MedusaAdminUpdatePriceList} from '@medusajs/medusa/dist/api/routes/admin/price-lists/update-price-list';
import { isPromise } from 'util/types';

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



class AdminPostPriceListsPriceListReq extends MedusaAdminPostPriceListsPriceListReq {
  @IsString()
  @IsOptional()
  sales_channel_id?: string ;
}

class AdminPostPriceListsPriceListPriceListReq extends MedusaAdminUpdatePriceList {
  @IsString()
  @IsOptional()
  sales_channel_id?: string ;
}


registerOverriddenValidators(AdminPostPriceListsPriceListReq);
registerOverriddenValidators(AdminPostPriceListsPriceListPriceListReq);
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

