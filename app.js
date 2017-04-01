require('./config/server');

const express          = require('express'),
      { mongoose }     = require('./config/mongoose'),
      bodyParser       = require('body-parser'),
      app              = express();

const indexRoutes      = require('./routes/indexRoutes');

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRoutes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message});
});

app.listen(port, function() {
  console.log(`Server up and running on port: ${port}`);
});
