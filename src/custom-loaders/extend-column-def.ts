import { Product } from "models/product"

export default async function () {
    let importedFile = (await import(
        "@medusajs/medusa/dist/strategies/batch-jobs/product/types/columns-definition"
    )) as any
    importedFile.productColumnsDefinition = { ...importedFile.productColumnsDefinition, ...year, ...grape, ...alchool}
    importedFile.productImportColumnsDefinition.columns = [...importedFile.productImportColumnsDefinition.columns, ...extendedColumns]
}

const extendedColumns = [
    { name: 'Product Year', mapTo: 'product.year' },
    { name: 'Product Grape', mapTo: 'product.grape' },
    { name: 'Product Alchool', mapTo: 'product.alchool' },
]

let year = {
    "Product Year": {
        name: "Product Year",
        importDescriptor: {
            mapTo: "product.year",
        },
        exportDescriptor: {
            accessor: (product: Product): string => product?.year.toString() ?? "",
            entityName: "product",
        },
    },
}

let grape = {
    "Product Grape": {
        name: "Product Grape",
        importDescriptor: {
            mapTo: "product.grape",
        },
        exportDescriptor: {
            accessor: (product: Product): string => product?.grape ?? "",
            entityName: "product",
        },
    }
}

let alchool = {
    "Product Alchool": {
        name: "Product Alchool",
        importDescriptor: {
            mapTo: "product.alchool",
        },
        exportDescriptor: {
            accessor: (product: Product): string => product?.alchool.toString() ?? "",
            entityName: "product",
        },
    }
}
