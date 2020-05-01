import {Column, Entity, PrimaryColumn} from 'typeorm';
import {IsNotEmpty} from 'class-validator';

@Entity('level_desc')
export class LevelDescription {

    @PrimaryColumn({
        type: 'char',
        length: 15,
        nullable: false,
    })
    public cd: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 25,
        nullable: false,
    })
    public name: string;

    @Column({
        type: 'varchar',
        length: 35,
        nullable: true,
    })
    public description: string;
}
