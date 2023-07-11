import 'dotenv/config';
import { compare, hash } from "bcryptjs";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import AuthModel from "../models/auth.model";
import { sign } from "jsonwebtoken";

const registerNewUser = async ( newUser: User ) => {
    // 1. Consultar en la BD si existe el usuario
    const userFound = await AuthModel.findOne({ email: newUser.email });

    // Verificar si el usuario existe
    if( userFound ) {
        return 'USER_ALREADY_EXISTS';
    }

    // 2. Encriptar la contrasenia antes de registrar el usuario
    const hashPassword = await hash( newUser.password, 9 );
    newUser.password = hashPassword;

    // 3. Registra el usuario si no existe
    const response = await AuthModel.create( newUser );

    return response;
}

const loginUser = async ( user: Auth ) => {
    // 1. Consultar en la BD si el usuario NO existe
    const userFound = await AuthModel.findOne({ email: user.email });

    // Verificando si el usuario NO existe
    if( ! userFound ) {
        return 'USER_NOT_FOUND';
    }

    // 2. Verificar si la contrasena es correcta: isValidPassword (true/false)
    const isValidPassword = await compare( 
        user.password,          // Password suministrado por el usuario (no es un hash)
        userFound.password      // Password Hash que se encuentra registrado en la BD
    );

    // Verificar si contrasenia es valida
    if( ! isValidPassword ) {
        return 'WRONG_PASSWORD';
    }

    const JWT_SECRET = process.env.JWT_SECRET_KEY || '0tr4-cl4v3-s3cr3t4'; 

    // 3. Crear Token
    const token = sign(
        // Payload: Carga Util
        {
            userId:  userFound._id,
            rol: userFound.rol,
            name: userFound.nombre
        },
        // String Secret
        JWT_SECRET,
        // Configuracion JWT
        {
            expiresIn: '1h'
        }

    );

    return {
        token
    }

}


export {
    registerNewUser,
    loginUser
};