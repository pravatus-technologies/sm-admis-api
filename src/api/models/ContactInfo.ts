import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {AdmissionApplication} from './AdmissionApplication';
import {ContactType} from './ContactType';

@Entity('contact_info')
export class ContactInfo {

    @PrimaryGeneratedColumn('increment', {
        type: 'smallint',
        unsigned: true,
    })
    public id: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    public value: string;

    @Column({
        type: 'char',
        length: 10,
        nullable: true,
    })
    public contactTypeCd: string;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;

    @ManyToOne(type => AdmissionApplication, application => application.contactInfo, { onDelete: 'CASCADE' })
    @JoinColumn()
    public application: AdmissionApplication;

    @ManyToOne(type => ContactType)
    @JoinColumn({ name: 'contactTypeCd', referencedColumnName: 'cd' })
    public contactType: ContactType;
}
