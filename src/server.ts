import express from 'express';
import routes from './routes';
import mongo from './config/mongo'
import dotenv from 'dotenv';


const app = express();
routes(app);


dotenv.config();





mongo.connect();

app.listen(3333, () => console.log('server is running'));