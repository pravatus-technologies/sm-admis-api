import {Service} from 'typedi';
import {OrmRepository} from 'typeorm-typedi-extensions';
import {AdmissionApplicationRepository} from '../repositories/AdmissionApplicationRepository';
import {EventDispatcher, EventDispatcherInterface} from '../../decorators/EventDispatcher';
import {Logger, LoggerInterface} from '../../decorators/Logger';
import { AdmissionApplication } from '../models/AdmissionApplication';
import {events} from '../subscribers/events';

@Service()
export class AdmissionApplicationService {
    constructor(
        @OrmRepository() private repository: AdmissionApplicationRepository,
        @EventDispatcher() private dispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) {
    }

    public find(): Promise<AdmissionApplication[]> {
        this.log.info('Find all Admission Applications');
        return this.repository.find();
    }

    public findByApplicant(applicantId: string): Promise<AdmissionApplication | undefined> {
        this.log.info('Find Application for ' + applicantId);

        return this.repository.findOne({ where: { applicantId }, relations: ['address']});
    }

    public async create(application: AdmissionApplication): Promise<AdmissionApplication> {
        this.log.info('Create a new application');

        const newApplication = await this.repository.save(application);
        this.dispatcher.dispatch(events.application.created);

        return newApplication;
    }

    public update(applicationId: number, application: AdmissionApplication): Promise<AdmissionApplication> {
        this.log.info('Update application => ' + applicationId);

        application.id = applicationId;

        return this.repository.save(application);
    }
}
