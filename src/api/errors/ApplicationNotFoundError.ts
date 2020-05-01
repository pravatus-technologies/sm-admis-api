import { HttpError } from 'routing-controllers';

export class ApplicationNotFoundError extends HttpError {
    constructor() {
        super(404, 'Application not found!');
    }
}
