require('./config/server');

const express          = require('express'),
      { mongoose }     = require('./config/mongoose'),
      bodyParser       = require('body-parser'),
      hbs              = require('hbs'),
      app              = express();

const indexRoutes      = require('./routes/indexRoutes');

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.use('/', indexRoutes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message});
});

app.listen(port, function() {
  console.log(`Server up and running on port: ${port}`);
});
