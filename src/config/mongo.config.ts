import { connect } from "mongoose";

// Configuracion para la conexion con MongoDB
async function dbConnect() : Promise<void> {
    const DB_URI = 'mongodb://127.0.0.1:27017/store';
    await connect( DB_URI );
}


export default dbConnect;