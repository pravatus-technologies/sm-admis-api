import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {EducationHistory} from './EducationHistory';

@Entity('education_history_document')
export class EducationHistoryDocument {

    @PrimaryGeneratedColumn('increment', {
        type: 'smallint',
        unsigned: true,
    })
    public id: number;

    @Column({
        type: 'smallint',
        unsigned: true,
    })
    public educationHistoryId: number;

    @Column({
        type: 'longtext',
    })
    public document: string;

    @CreateDateColumn()
    public createdAt: Date;

    @ManyToOne(type => EducationHistory, educationHistory => educationHistory.educationHistoryDocument, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'educationHistoryId', referencedColumnName: 'id' })
    public educationHistory: EducationHistory;

}
