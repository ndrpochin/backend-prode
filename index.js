const express = require("express");
const app = express();

app.get("/resultado", function (req, res) {
  //res.send('Saludos desde express');
  let obj = {
    fechayhora: "2022-03-11 12:00:00",
    fase: "grupos",
    pais_local: "Argentina",
    pais_visitante: "Qatar",
    goles_local: 3,
    goles_visitante: 1,
    tipo_resultado: {
      idtipo_resultado: 1,
      tipo_resultado: "Final",
    },
  };
  res.send(obj);
});


//LOGIN & LOGOUT
app.post('/login', function (req, res) {
  res.send('Loggueado');
})

app.post('/logout', function (req, res) {
  res.send('deslogueado');
})



//TEST
app.post('/test', function (req, res) {
  res.send('[POST] Saludos desde express');
});

app.get('/test', function (req, res) {
  res.send('[GET] Saludos desde express');
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});