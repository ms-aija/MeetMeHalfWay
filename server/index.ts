import Express from 'express';
import cors from 'cors';

import router from './router';

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(router);

const PORT = 3007;
app.listen(PORT, () => {
  console.log(`🎪 Server running on http://localhost/${PORT} 🎪`);
});
