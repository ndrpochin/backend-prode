const express = require("express");
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Prode Qatar 2022 API",
      description: "API para jugar al prode del mundial de Qatar 2022",
      contact: {
        name: "Nadir "
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["index.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//endpoint que muestra la definicion de swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Default entry point
app.get('/', function(req, res) {
  respuesta = {
   error: true,
   codigo: 200,
   mensaje: 'Punto de inicio'
  };
  res.send(respuesta);
 });

/**
 * @swagger
 * /resultado:
 *  get:
 *   tags: ['partidos']
 *   description: Devuelve el resultado final de un partido
 *   responses:
 *    '200':
 *      description: ejecucion correcta
 */
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


/**
 * @swagger
 * /login:
 *  post:
 *   tags: ['usuarios']
 *   description: Endpoint para iniciar sesión en la API
 *   responses:
 *    '200':
 *      description: aca deberia devolver un token (JWT o similar)
 */
app.post('/login', function (req, res) {
  res.send('Loggueado');
})


/**
 * @swagger
 * /logout:
 *  post:
 *   tags: ['usuarios']
 *   description: Endpoint para cerrar sesión
 *   responses:
 *    '200':
 *      description: Devuelve un mensaje de confirmacion del cierre de sesión
 */
app.post('/logout', function (req, res) {
  res.send('deslogueado');
})

/**
 * @swagger
 * /userinfo:
 *  get:
 *   tags: ['usuarios']
 *   description: Endpoint para mostrar los datos del usuario 
 *   responses:
 *    '200':
 *      description: Devuelve los datos del usuario 
 */
 app.post('/logout', function (req, res) {
  res.send('deslogueado');
})


app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});