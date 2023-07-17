import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();


dotenv.config();

// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const DB_URL = process.env.DB_URL;

const PORT = '8080';

Connection(DB_URL);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));