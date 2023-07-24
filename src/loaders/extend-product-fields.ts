import { IsString, IsOptional } from 'class-validator';
import { AdminPostProductsReq as MedusaAdminPostProductReq} from '@medusajs/medusa/dist/api/routes/admin/products/create-product'
import { AdminPostProductsProductReq as MedusaAdminUpdateProduct} from '@medusajs/medusa/dist/api/routes/admin/products/update-product'
import { registerOverriddenValidators } from '@medusajs/medusa';

export default async function () {
    const imports = (await import(
      "@medusajs/medusa/dist/api/routes/store/products/index"
    )) as any
    imports.allowedStoreProductsFields = [
      ...imports.allowedStoreProductsFields,
      "grape","alchool","year"
    ]
    imports.defaultStoreProductsFields = [
      ...imports.defaultStoreProductsFields,
      "grape","alchool","year"
    ]


    const adminImports = (await import("@medusajs/medusa/dist/api/routes/admin/products/index")) as any

    adminImports.defaultAdminProductFields = [...adminImports.defaultAdminProductFields, "grape", "alchool", "year"]
  }


  class AdminPostProductsReq extends MedusaAdminPostProductReq{
    @IsString()
    @IsOptional()
    year? : number;
    
    @IsString()
    @IsOptional()
    alchool? : number;

    @IsString()
    @IsOptional()
    grape? : number;
  }

  class AdminPostProductsProductReq extends MedusaAdminUpdateProduct{
    @IsString()
    @IsOptional()
    year? : number;
    
    @IsString()
    @IsOptional()
    alchool? : number;

    @IsString()
    @IsOptional()
    grape? : number;
  }

  registerOverriddenValidators(AdminPostProductsReq)
  registerOverriddenValidators(AdminPostProductsProductReq)

