const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/guardar-cursos', (req, res) => {
  const cursos = req.body;

  // Guardar los datos en el archivo cursos.json
  fs.writeFile('../database/cursos.json', JSON.stringify(cursos), (err) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      res.status(500).json({ error: 'Error al guardar los datos' });
    } else {
      console.log('Datos guardados exitosamente');
      res.json({ message: 'Datos guardados exitosamente' });
    }
  });
});

app.listen(3000, () => {
  console.log('Backend escuchando en el puerto 3000');
});
