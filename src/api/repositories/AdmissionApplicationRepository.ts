import {EntityRepository, Repository} from 'typeorm';
import {AdmissionApplication} from '../models/AdmissionApplication';

@EntityRepository(AdmissionApplication)
export class AdmissionApplicationRepository
    extends Repository<AdmissionApplication> {

    // public getUserByLastLogin(take: number, skip: number) {
    //     return this.createQueryBuilder("user")
    //         .leftJoinAndSelect("user.photos", "photos")
    //         .orderBy("user.last_login_date", "ASC")
    //         .addOrderBy("photos.upload_date", "DESC")
    //         .take(take)
    //         .skip(skip)
    //         .getMany()
    // }
}
