import express from 'express';
import compression from 'compression';  // compresses requests
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import dotenv from 'dotenv';
import logger from './util/logger';
import fs from 'fs';
import nunjucks from 'nunjucks';

import { homepage } from './controllers/home';
import { list } from './controllers/list';
import { edit } from './controllers/edit';


if (fs.existsSync('.env')) {
    logger.debug('Using .env file to supply config environment variables');
    dotenv.config({ path: '.env' });
} else {
  logger.error('Create an appropriate .env');
}

// Create Express server
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

nunjucks.configure(path.join(__dirname, '../views'), {
  autoescape: true,
  express: app,
});

app.use(express.json());

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

// routes

app.get('/', homepage);
app.get('/:language/', list);
app.route('/:language/:key/')
  .get(edit)
  .post(edit);


export default app;
