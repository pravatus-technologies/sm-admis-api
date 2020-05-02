import * as express from 'express';
import bodyParser from 'body-parser';
import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

@Middleware({ type: 'before' })
export class BodyParserMiddleware implements ExpressMiddlewareInterface {
    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return bodyParser.json({ limit: '5mb'})(req, res, next);
    }
}
