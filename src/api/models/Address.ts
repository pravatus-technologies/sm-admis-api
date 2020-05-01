import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {IsNotEmpty} from 'class-validator';
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

    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    public zipCode: number;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public province: string;

    @Column({
        name: 'primary',
        type: 'boolean',
    })
    public isPrimary: boolean;

    @Column({
        name: 'mailing',
        type: 'boolean',
    })
    public isMailing: boolean;

    @ManyToOne(type => AdmissionApplication, application => application.address,
        { cascade: true, onDelete: 'CASCADE', lazy: true })
    @JoinColumn()
    public application: AdmissionApplication;
}
