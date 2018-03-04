const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const {
  dist, port, docs, eslintDir, bddDir, karma: { coverageDir },
} = require('../globals');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(morgan('tiny'));

app.use('/', express.static(dist));
app.use('/eslint', express.static(eslintDir));
app.use('/docs', express.static(docs));
app.use('/coverage', express.static(coverageDir));
app.use('/bdd', express.static(bddDir));
// app.use('/pa11y', express.static(output));
// app.use('/sitespeed', express.static(sitespeedDir));

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));
