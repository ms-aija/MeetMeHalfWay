const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./router');

const app = Express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`🎪 Server running on http://localhost/${PORT} 🎪`)
})