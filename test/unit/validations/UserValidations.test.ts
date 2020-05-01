import { validate } from 'class-validator';
import { AdmissionApplication } from '../../../src/api/models/AdmissionApplication';

describe('AdmisAppValidations', () => {
   test('User should always have a given name', async (done) => {
       const admissionApplication = new AdmissionApplication();

       // gather all validation errors
       const errorsOne = await validate(admissionApplication);
       // after setting a name errors two should be 1 less error
       admissionApplication.givenName = 'Test';

       // errors two should be less because we set a value to givenName
       const errorsTwo = await validate(admissionApplication);
       expect(errorsOne.length).toBeGreaterThan(errorsTwo.length);
       done();
   });
});
