const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./knex');
const port = 443;

app.set('port', process.env.PORT || port);

app.use(cors());

app.get('/api/v1/places', async (request, response) => {
  try {
    const places = await knex.select().from('places');
    response.status(200).json(places);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8080, () => {
  console.log(`server has started on port ${port}`);
});