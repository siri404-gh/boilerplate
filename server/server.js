const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const dist = './.dist';
const port = process.env.NODE_ENV || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(morgan('tiny'));

app.use('/', express.static(dist));
// app.use('/docs', express.static(docs));
// app.use('/coverage', express.static(karma_coverage_dir));
// app.use('/pa11y', express.static(output));
// app.use('/sitespeed', express.static(sitespeedDir));
// app.use('/eslint', express.static('output/reports/.eslint'));
// app.use('/cucumber', express.static(report));

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));
