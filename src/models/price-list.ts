import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  PriceList as MedusaPriceList
} from "@medusajs/medusa"
import { SalesChannel } from "./sales-channel"

@Entity()
export class PriceList extends MedusaPriceList {
    
    /*@ManyToOne(()=> SalesChannel, (sc) => sc?.price_lists)
    @JoinColumn({ name: 'sales_channel_id'})
    sales_channel: SalesChannel | null | string
    */

    @Column({ type: "varchar", nullable: true })
    sales_channel_id: string | null

    @ManyToOne(() => SalesChannel)
    @JoinColumn({ name: "sales_channel_id" })
    
    sales_channel: SalesChannel
}



