import {Body, Get, JsonController, OnUndefined, Param, Post, Put} from 'routing-controllers';
import {AdmissionApplicationService} from '../services/AdmissionApplicationService';
import {ResponseSchema} from 'routing-controllers-openapi';
import {IsUUID} from 'class-validator';
import {AdmissionApplication} from '../models/AdmissionApplication';
import {ApplicationNotFoundError} from '../errors/ApplicationNotFoundError';
import {Address} from '../models/Address';

export class AdmissionApplicationResponse {
    public id: number;

    @IsUUID()
    public applicant_id: string;

    public title: string;
    public givenName: string;
    public middleName: string;
    public familyName: string;
    public birthday: Date;
    public birthPlace: string;
    public civilStatus: string;
    public nationality: string;
    public gender: string;
    public religion: string;
    public certified: boolean;
    public address: Address[];
}

@JsonController('/application')
export class AdmissionApplicationController {

    constructor(
        private service: AdmissionApplicationService
    ) { }

    @Get()
    @ResponseSchema(AdmissionApplicationResponse, { isArray: true })
    public find(): Promise<AdmissionApplication[]> {
        return this.service.find();
    }

    @Get('/:applicantId')
    @OnUndefined(ApplicationNotFoundError)
    @ResponseSchema(AdmissionApplicationResponse)
    public findByApplicantId(@Param('applicantId') applicantId: string): Promise<AdmissionApplication | undefined> {
        return this.service.findByApplicant(applicantId);
    }

    @Post()
    @ResponseSchema(AdmissionApplicationResponse)
    public create(@Body({ required: true }) application: AdmissionApplication): Promise<AdmissionApplication> {
        const newApplication = new AdmissionApplication();
        Object.assign(newApplication, application);

        return this.service.create(newApplication);
    }

    @Put('/:id')
    public update(@Param('id') id: number, @Body() application: AdmissionApplication): Promise<AdmissionApplication> {
        const app = new AdmissionApplication();
        Object.assign(app, application);

        return this.service.update(id, app);
    }
}
