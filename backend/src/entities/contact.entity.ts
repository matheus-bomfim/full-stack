import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid"
import User from "./user.entity";

@Entity("contact")

class Contact{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name:string

    @Column("simple-array")
    email:string[]

    @Column("simple-array")
    telephone:string[]

    @ManyToOne(()=>User,(user)=>user.UserContacts)
    user:User
    
    @CreateDateColumn({name:"created_at"})
    created_at:Date;

    constructor() {
        if (!this.id) {
        this.id = uuid();
        }
    }
}

export default Contact