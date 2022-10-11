import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Letter {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title!: string

    @Column()
    body! : string

    @Column()
    sender!: string

    @Column()
    reciever!: string
}