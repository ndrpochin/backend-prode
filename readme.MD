# consideraciones de la API
    - clonar el repositorio
    - npm install, para instalar las dependencias
    - npm start, para arrancar el servidor en el puerto 3000
    - para ver la documentacion de Swagger: localhost:3000/api
    
# TODO: 
- Implementar un login con usuario y contraseña
- Implementar endpoints:
    - GET /partidos: 
        todos los partidos por jugarse en la fecha y hora actual.
    - GET /partido/:idpartido
        resultado del partido jugado.
    - POST /partido/:idpartido
        BODY: pronostico del resultado final del partido.