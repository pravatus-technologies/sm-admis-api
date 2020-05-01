import * as express from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

const noCache = require('nocache');

@Middleware({ type: 'before' })
export class SecurityNoCacheMiddleware implements ExpressMiddlewareInterface {

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        return noCache()(req, res, next);
        //return helmet.noCache()(req, res, next);
    }

}
