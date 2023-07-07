import { User } from "../interfaces/user.interface";
import AuthModel from "../models/auth.model";

const registerNewUser = async ( newUser: User ) => {
    // 1. Consultar en la BD si existe el usuario
    const userFound = await AuthModel.findOne({ email: newUser.email });

    // Verificar si el usuario existe
    if( userFound ) {
        return 'USER_ALREADY_EXISTS';
    }

    // 2. Registra el usuario si no existe
    const response = await AuthModel.create( newUser );

    return response;
}


export {
    registerNewUser
};