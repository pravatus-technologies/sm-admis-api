import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('relationship_type')
export class RelationshipType {

    @PrimaryColumn({
        type: 'char',
        length: 5,
        nullable: false,
        unique: true,
    })
    public cd: string;

    @Column({
        type: 'varchar',
        length: 15,
        nullable: false,
    })
    public name: string;
}
