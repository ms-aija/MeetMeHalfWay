const Express = require('express');
const cors = require('cors');

const router = require('./router');

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(router);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`🎪 Server running on http://localhost/${PORT} 🎪`)
})