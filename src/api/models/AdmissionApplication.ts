import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {IsNotEmpty, MaxLength} from 'class-validator';

@Entity('adm_application')
export class AdmissionApplication {

    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'smallint',
    })
    public id: number;

    @Column({
        name: 'applicant_id',
        type: 'varchar',
        length: 36,
        nullable: false,
    })
    public applicantId: string;

    @MaxLength(5)
    @Column({
        name: 'title',
        type: 'char',
        length: 5,
        nullable: true,
    })
    public title: string;

    @IsNotEmpty()
    @MaxLength(35)
    @Column({
        name: 'given_name',
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public givenName: string;

    @MaxLength(35)
    @Column({
        name: 'middle_name',
        type: 'varchar',
        length: 35,
        nullable: true,
    })
    public middleName: string;

    @IsNotEmpty()
    @MaxLength(35)
    @Column({
        name: 'family_name',
        type: 'varchar',
        length: 35,
        nullable: false,
    })
    public familyName: string;

    @IsNotEmpty()
    @Column({
        name: 'birthday',
        type: 'datetime',
    })
    public birthday: Date;

    @MaxLength(45)
    @Column({
        name: 'place_of_birth',
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public birthPlace: string;

    @MaxLength(10)
    @Column({
        name: 'civil_status',
        type: 'char',
        length: 10,
        nullable: true,
    })
    public civilStatus: string;

    @MaxLength(15)
    @Column({
        name: 'nationality',
        type: 'varchar',
        length: 15,
        nullable: false,
    })
    public nationality: string;

    @IsNotEmpty()
    @MaxLength(1)
    @Column({
        name: 'gender',
        type: 'char',
        length: 1,
        nullable: false,
    })
    public gender: string;

    @MaxLength(45)
    @Column({
        name: 'religion',
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public religion: string;

    @CreateDateColumn({
        name: 'created_at',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    public updatedAt: Date;

    @Column({
        name: 'certified',
        type: 'bool',
        nullable: false,
    })
    public certified: boolean;
}
