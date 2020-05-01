import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {IsNotEmpty, MaxLength} from 'class-validator';
import {Address} from './Address';
import {ContactInfo} from './ContactInfo';

@Entity('adm_application')
export class AdmissionApplication {

    @PrimaryGeneratedColumn('increment', {
        type: 'smallint',
        unsigned: true,
    })
    public id: number;

    @Column({
        type: 'varchar',
        length: 36,
        nullable: false,
        unique: true,
    })
    public applicantId: string;

    @MaxLength(5)
    @Column({
        type: 'char',
        length: 5,
        nullable: true,
    })
    public title: string;

    @IsNotEmpty()
    @MaxLength(35)
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public givenName: string;

    @MaxLength(35)
    @Column({
        type: 'varchar',
        length: 35,
        nullable: true,
    })
    public middleName: string;

    @IsNotEmpty()
    @MaxLength(35)
    @Column({
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public familyName: string;

    @IsNotEmpty()
    @Column({
        type: 'datetime',
    })
    public birthday: Date;

    @MaxLength(45)
    @Column({
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public birthPlace: string;

    @MaxLength(10)
    @Column({
        type: 'char',
        length: 10,
        nullable: true,
    })
    public civilStatus: string;

    @MaxLength(15)
    @Column({
        type: 'varchar',
        length: 15,
        nullable: false,
    })
    public nationality: string;

    @IsNotEmpty()
    @MaxLength(1)
    @Column({
        type: 'char',
        length: 1,
        nullable: false,
    })
    public gender: string;

    @MaxLength(45)
    @Column({
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public religion: string;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;

    @Column({
        type: 'bool',
        nullable: false,
    })
    public certified: boolean;

    @OneToMany(type => Address, address => address.application, { cascade: ['insert', 'update'], eager: true })
    public address: Address[];

    @OneToMany(type => ContactInfo, contactInfo => contactInfo.application, { cascade: ['insert', 'update'], eager: true })
    public contactInfo: ContactInfo[];
}
