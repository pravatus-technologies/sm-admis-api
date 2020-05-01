import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {IsNotEmpty} from 'class-validator';
import {AdmissionApplication} from './AdmissionApplication';
import {LevelDescription} from './LevelDescription';
import {EducationHistoryDocument} from './EducationHistoryDocument';

@Entity('education_history')
export class EducationHistory {

    @PrimaryGeneratedColumn('increment', {
        type: 'smallint',
        unsigned: true
    })
    public id: number;

    @Column({
        type: 'char',
        length: 15,
    })
    public levelDescriptionCd: string;

    @IsNotEmpty()
    @Column({
        type: 'varchar',
        length: 90,
        nullable: false,
    })
    public institutionName: string;

    @Column({
        type: 'varchar',
        length: 45,
        nullable: true,
    })
    public major: string;

    @Column({
        type: 'varchar',
        length: 15,
        nullable: true,
    })
    public lastTermAttended: string;

    @IsNotEmpty()
    @Column({
        type: 'boolean',
        default: false,
        nullable: false,
    })
    public isCompleted: boolean;

    @Column({
        type: 'char',
        length: 5,
        nullable: true,
    })
    public finalGrade: string;

    @Column({
        type: 'varchar',
        length: 125,
        nullable: true,
    })
    public address: string;

    @ManyToOne(type => AdmissionApplication, application => application.educationHistory,
        { onDelete: 'CASCADE'})
    public application: AdmissionApplication;

    @ManyToOne(type => LevelDescription)
    @JoinColumn({ name: 'levelDescriptionCd', referencedColumnName: 'cd' })
    public levelDescription: LevelDescription;

    @OneToMany(type => EducationHistoryDocument, educationHistoryDocument => educationHistoryDocument.educationHistory, { cascade: ['insert', 'update'], eager: true })
    public educationHistoryDocument: EducationHistoryDocument[];
}
