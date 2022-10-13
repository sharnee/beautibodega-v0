import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import session from 'express-session'
import * as bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(
  session({
    secret: 'adjkfhaljskdfhalskdjfasdlgkjhalsgfabweuybfskdjfhgaskjdgk',
    resave: true,
    saveUninitialized: true,
  })
)

app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

app.get('/api', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(require('./routes/getData'))
app.use(require('./routes/login'))
app.use(require('./routes/register'))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

