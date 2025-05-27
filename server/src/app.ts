import express from 'express';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';

import userRouter from './routes/userRoutes.js';
import habitRouter from './routes/habitRoutes.js';
import errorController from './controllers/errorController.js';
import cookieParser from 'cookie-parser';

const app = express();

app.set('trust proxy', 1);

app.use(helmet());

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//LIMIT REQUEST FROM SAME API
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: 'Too many requests from this IP, please try again in an hour',
});

app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));

app.use(compression());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/habits', habitRouter);

app.use(errorController);

export default app;
