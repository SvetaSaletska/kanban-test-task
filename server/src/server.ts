import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { env } from './utils/env.js';

dotenv.config();

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();
  app.use(cors());
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};