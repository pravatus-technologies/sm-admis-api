import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import {AdmissionApplication} from './AdmissionApplication';

@Entity('financial_background')
export class FinancialBackground {

    @PrimaryColumn({
        type: 'smallint',
        unsigned: true,
        unique: true,
    })
    public applicationId: number;

    @Column('decimal', {
        precision: 8,
        scale: 2,
        nullable: true,
    })
    public annualHouseholdIncome: number;

    @Column('decimal', {
        precision: 6,
        scale: 2,
        nullable: true,
    })
    public monthlyRent: number;

    @Column({
        type: 'boolean',
        nullable: false,
        default: false,
    })
    public isFourPsBeneficiary: boolean;

    @OneToOne(type => AdmissionApplication, application => application.financialBackground,
        { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'applicationId', referencedColumnName: 'id' })
    public application: AdmissionApplication;
}
