const Express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');


const app = Express();
const PORT = 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Express.static('public'));
app.use('/images', Express.static('./public/images'));
app.use(Express.json());

app.use(router);


app.listen(3030, () => console.log(`Listening on port ${PORT}!`));