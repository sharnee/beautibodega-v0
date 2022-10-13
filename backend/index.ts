import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/api', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(require('./routes/getData'))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

