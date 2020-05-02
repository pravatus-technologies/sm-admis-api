import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {IsNotEmpty} from 'class-validator';
import {RelationshipType} from './RelationshipType';
import {AdmissionApplication} from './AdmissionApplication';

@Entity('family_background')
export class FamilyBackground {

    @PrimaryGeneratedColumn('increment', {
        type: 'smallint',
        unsigned: true,
    })
    public id: number;

    @Column({
        type: 'smallint',
        unsigned: true,
    })
    public applicationId: number;

    @Column({
        type: 'char',
        length: 5,
        nullable: false,
    })
    public relationshipTypeCd: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public givenName: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public familyName: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 80,
        nullable: false,
    })
    public address: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 45,
        nullable: false,
    })
    public occupation: string;

    @Column({
        type: 'varchar',
        length: 75,
        nullable: true,
    })
    public companyName: string;

    @Column({
        type: 'char',
        length: 25,
        nullable: true,
    })
    public mobilePhone: string;

    @Column({
        type: 'char',
        length: 15,
        nullable: true,
    })
    public homePhone: string;

    @Column({
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public highestEducationAttained: string;

    @Column({
        type: 'varchar',
        length: 65,
        nullable: true,
    })
    public schoolAttended: string;

    @Column({
        type: 'tinyint',
        unsigned: true,
    })
    public age: number;

    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
    })
    public isDeceased: boolean;

    @ManyToOne(type => RelationshipType)
    @JoinColumn({ name: 'relationshipTypeCd', referencedColumnName: 'cd' })
    public relationshipType: RelationshipType;

    @ManyToOne(type => AdmissionApplication, admissionApplication => admissionApplication.familyBackground,
        { onDelete: 'CASCADE' })
    public application: AdmissionApplication;
}
