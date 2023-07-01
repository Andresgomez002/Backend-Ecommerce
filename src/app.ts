import 'dotenv/config';
import express, { Request, Response } from 'express';
import routeMain from './routes/index.route';
import db from "./config/mongo.config";

const app = express();
const PORT = process.env.PORT || 3001;

/** Routing: Enrutamiento */
// http://localhost:3000/       (EndPoint)
app.get( '/', ( req: Request, res: Response ) => {
    const message : string = 'Bienvenido a la API de Ecommerce';

    console.log( message );     // Mensaje a la terminal
    res.send( `<h1>${ message }</h1>` );        // Mensaje al navegador
});

// http://localhost:3000/home   (EndPoint)
app.get( '/home', ( req: Request, res: Response ) => {
    const namePage : string = 'Home';

    console.log( namePage );
    res.send( `<h1>${ namePage }</h1>` );
});

/** Implementando Middlewares a Express */
app.use( express.json() );      // 

// http://localhost:3000/api
app.use( '/api', routeMain );

/** Resolvemos la promesa: Conexion a Mongo usando Mongoose */
db()
    .then( () => console.log( `MongoDB se conecto correctamente` ) )
    .catch( () => console.error( `MongoDB sufre un problema de conexión` ) );

// Lanza el servidor web
app.listen( PORT, () => {
    console.log( `Servidor en http://localhost:${ PORT }` );
});