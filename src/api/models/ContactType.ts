import {Column, Entity, PrimaryColumn} from 'typeorm';
import {IsNotEmpty} from 'class-validator';

@Entity('contact_type')
export class ContactType {

    @PrimaryColumn({
        type: 'char',
        length: 10,
        nullable: false,
        unique: true,
    })
    public cd: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 15,
        nullable: false,
    })
    public name: string;

    @Column({
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public description: string;

}
