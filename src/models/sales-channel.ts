import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  SalesChannel as MedusaSalesChannel,
} from "@medusajs/medusa"

import { PriceList } from "./price-list"

@Entity()
export class SalesChannel extends MedusaSalesChannel {

    @OneToMany(()=> PriceList, (pl) => pl.sales_channel, {
        onDelete: "CASCADE"
    })
    price_lists: PriceList[]
}


    /*@JoinTable({
        name: "sales_channel_price_list",
        joinColumn: {
            name: "sales_channel_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "price_list_id",
            referencedColumnName: "id"
        },
    })*/