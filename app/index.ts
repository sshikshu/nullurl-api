import * as Koa from 'koa';
import * as cors from 'kcors';
import * as bodyParser from 'koa-bodyparser';
import * as jwt from 'koa-jwt';
import * as logger from 'koa-logger';
import * as mongoose from 'mongoose';

import { router as urlRouter } from './url/url.router';

// mongoose
(<any>mongoose).Promise = global.Promise
mongoose.set('debug', true);
mongoose.connect('localhost/nullurl')
  .then(() => console.info('connected to db'))
  .catch(err => console.error(`could not connect to db: ${err.message}`));

const app = new Koa();

// logger
app.use(logger());

// cors
app.use(<any>cors());

// jwt
app.use(jwt({ secret: 'keyboard cat' }));

// body-parser
app.use(bodyParser());

//router
app.use(urlRouter.routes());

app.listen(50010);