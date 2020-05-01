import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {IsNotEmpty, MaxLength} from 'class-validator';
import {AdmissionApplication} from './AdmissionApplication';

@Entity('address')
export class Address {

    @PrimaryGeneratedColumn('increment', {
        type: 'smallint',
        unsigned: true
    })
    public id: number;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: true,
    })
    public houseNumber: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    public address: string;

    @Column({
        type: 'varchar',
        length: 25,
        nullable: true,
    })
    public baranggay: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public municipality: string;

    @MaxLength(10)
    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    public zipCode: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public province: string;

    @Column({
        type: 'boolean',
        default: false,
    })
    public isPrimary: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    public isMailing: boolean;

    @ManyToOne(type => AdmissionApplication, application => application.address,
        { onDelete: 'CASCADE' })
    @JoinColumn()
    public application: AdmissionApplication;
}
