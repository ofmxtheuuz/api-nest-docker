import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { v4 as uuidv4 } from "uuid"

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column('uuid')
    uuid: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    release_year: number

    @Column()
    views: number

    @Column()
    category: string

    @BeforeInsert()
    insertUuid() {
      this.uuid = uuidv4().toString().replace("-", "")
    }
}