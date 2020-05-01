import {EntityRepository, Repository} from 'typeorm';
import {AdmissionApplication} from '../models/AdmissionApplication';

@EntityRepository(AdmissionApplication)
export class AdmissionApplicationRepository extends Repository<AdmissionApplication> {

}
