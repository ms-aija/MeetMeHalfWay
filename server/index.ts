'use strict'

import Express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import router from './router';

console.log(process.env.CLIENT_ID);

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(router);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`🎪 Server running on http://localhost/${PORT} 🎪`);
});
