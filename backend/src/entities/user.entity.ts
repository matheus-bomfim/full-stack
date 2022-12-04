import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid"
import Contact from "./contact.entity";
import {Exclude} from "class-transformer"

@Entity("user")

class User{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({unique:true})
    name:string
    
    @Column()
    @Exclude()
    password: string

    @Column("simple-array")
    email:string[]

    @Column("simple-array")
    telephone:string[]
    
    @CreateDateColumn({name:"created_at"})
    created_at:Date;

    @OneToMany(()=>Contact,(contact)=>contact.user)
    UserContacts: Contact[]
    
    constructor() {
        if (!this.id) {
        this.id = uuid();
        }
    }
}

export default User