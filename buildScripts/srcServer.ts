import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as path from 'path';
//import * as router from './router';
import * as evnconf from 'dotenv';

import * as admin from 'firebase-admin';
let serviceAccount = require(' ./../../serviceAccountKey.json5');
//let account = require('../serviceAccountKey.json');

import { CarPost } from './controllers/carPost';
const carPost = new CarPost();

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  public config(): void {
    admin.initializeApp({
      credential:admin.credential.cert(serviceAccount),
      databaseURL: "https://crafty-cairn-194009.firebaseio.com"
    });

    const db = admin.firestore();
    console.log(db);
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use((_, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  public routes(): void {
    const router: express.Router = express.Router();
    this.app.use('/', router);
    this.app.use('/postCar',  carPost.router);
    this.app.all('/*', (req, res) => {
      res.sendFile(path.resolve('buildscripts/public/index.html'));
  });
  }
}

export default new Server().app;


