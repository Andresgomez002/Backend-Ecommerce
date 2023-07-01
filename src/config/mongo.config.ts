import { connect } from "mongoose";

// Configuracion para la conexion con MongoDB
async function dbConnect() : Promise<void> {
    const DB_URI = `${ process.env.DB_URI }`;     // <string> 
    await connect( DB_URI );
}


export default dbConnect;