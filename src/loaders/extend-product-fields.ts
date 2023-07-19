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