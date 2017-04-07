require('./config/server');

const express          = require('express'),
      { mongoose }     = require('./config/mongoose'),
      bodyParser       = require('body-parser'),
      dateFormat       = require('dateformat'),
      hbs              = require('hbs'),
      app              = express();

const indexRoutes      = require('./routes/indexRoutes');
const blogRoutes       = require('./routes/blogRoutes');

const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('dateFormat', (date) => dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT").toUpperCase());
hbs.registerHelper('sliceBlog', (string) => {
  let firstParagraph = string.indexOf('</p>');
  return string.slice(0, firstParagraph) + "..";
});
// hbs.registerHelper('blogFormat', (text) => text.replace(/\r?\n/g, '<br />'));

app.use('/', indexRoutes);
app.use('/blog', blogRoutes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message});
});

app.listen(port, function() {
  console.log(`Server up and running on port: ${port}`);
});
