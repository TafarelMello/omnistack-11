const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('Hellow World');
});

app.get('/json', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    Aluno: 'Tafarel Mello',
  });
});

app.listen(3333);
