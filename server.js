const express = require('express');
const app = express();
const port = 3000;

const Web3 = require('web3');

var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
global.__basedir = __dirname;

app.get('/', (req, res) => {
  res.render('index');
})
app.get('/detect-connection', async (req, res) => {
  
})

app.listen(port, (err, res) => {
  console.log('Server running on ' + port);
})
