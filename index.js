const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.get("/", function (req, res) {
  //res.send('Saludos desde express');
  let obj = {
    fechayhora: "2022-03-11 12:00:00",
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
