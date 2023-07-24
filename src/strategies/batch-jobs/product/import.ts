import {
    AbstractBatchJobStrategy,
    BatchJobService
} from "@medusajs/medusa"
import { Product } from "../../../models/product"
import { FlagRouter } from "@medusajs/medusa/dist/utils/flag-router"
import { EntityManager } from "typeorm"
import { ShippingProfileService, ProductCategoryService, RegionService, ProductService, ProductCollectionService, SalesChannelService, ProductVariantService, } from "@medusajs/medusa/dist/services"
import CsvParser from "@medusajs/medusa/dist/services/csv-parser"
import {
    OperationType,
    ProductImportBatchJob,
    ProductImportCsvSchema,
    ProductImportInjectedProps,
    ProductImportJobContext,
    TParsedProductImportRowData,
  } from "@medusajs/medusa/dist/strategies/batch-jobs/product/types"
import ProductCategoryFeatureFlag from "@medusajs/medusa/dist/loaders/feature-flags/product-categories"
import SalesChannelFeatureFlag from "@medusajs/medusa/dist/loaders/feature-flags/sales-channels"
import {
    productImportSalesChannelsColumnsDefinition,
    productImportProductCategoriesColumnsDefinition,
  } from "@medusajs/medusa/dist/strategies/batch-jobs/product/types/columns-definition"
 import { productImportColumnsDefinition } from "./types/columns-definition"

 import { IFileService } from "@medusajs/medusa/dist/interfaces/file-service"

class MyImportStrategy extends AbstractBatchJobStrategy {


    processJob(batchJobId: string): Promise<void> {
        throw new Error("Method not implemented.")
    }
    buildTemplate(): Promise<string> {
        throw new Error("Method not implemented.")
    }

    static identifier = "product-import-strategy"

    static batchType = "product-import"

    private processedCounter: Record<string, number> = {}

    protected readonly featureFlagRouter_: FlagRouter

   // protected manager_: EntityManager
   // protected transactionManager_: EntityManager | undefined

    protected readonly fileService_: IFileService

    protected readonly regionService_: RegionService
    protected readonly productService_: ProductService
    protected readonly batchJobService_: BatchJobService
    protected readonly productCollectionService_: ProductCollectionService
    protected readonly salesChannelService_: SalesChannelService
    protected readonly productVariantService_: ProductVariantService
    protected readonly shippingProfileService_: ShippingProfileService
    protected readonly productCategoryService_: ProductCategoryService

    protected readonly csvParser_: CsvParser<
        ProductImportCsvSchema,
        Record<string, string>,
        Record<string, string>
    >

    constructor({
        batchJobService,
        productService,
        salesChannelService,
        productVariantService,
        shippingProfileService,
        regionService,
        fileService,
        productCollectionService,
        productCategoryService,
        manager,
        featureFlagRouter,
    }: ProductImportInjectedProps) {
        // eslint-disable-next-line prefer-rest-params
        super(arguments[0])

        const isSalesChannelsFeatureOn = featureFlagRouter.isFeatureEnabled(
            SalesChannelFeatureFlag.key
        )

        const isProductCategoriesFeatureOn = featureFlagRouter.isFeatureEnabled(
            ProductCategoryFeatureFlag.key
        )


            /** * 
             Hope that this makes sense
            */


        this.csvParser_ = 
        new CsvParser({
            columns: [
                ...productImportColumnsDefinition.columns,
                ...(isSalesChannelsFeatureOn
                    ? productImportSalesChannelsColumnsDefinition.columns
                    : []),
                ...(isProductCategoriesFeatureOn
                    ? productImportProductCategoriesColumnsDefinition.columns
                    : []),
            ],
        })

        

        this.featureFlagRouter_ = featureFlagRouter

        this.manager_ = manager
        //this.fileService_ = fileService
        this.batchJobService_ = batchJobService
        this.productService_ = productService
        this.salesChannelService_ = salesChannelService
        this.productVariantService_ = productVariantService
        this.shippingProfileService_ = shippingProfileService
        this.regionService_ = regionService
        this.productCollectionService_ = productCollectionService
        this.productCategoryService_ = productCategoryService
    }
}

export default MyImportStrategy