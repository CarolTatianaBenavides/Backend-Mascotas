import { Schema , model } from "mongoose";

// Parte 1: Definri la estructura de datos de mi Documento 

const UserSchema = new Schema ({
    name: {
        type: String,       // Tipo de dato
        required: true ,     // Regla:Es obligatorio
        trim: true          // Modificador:
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    }
   
},{
    timestamps:true 
    
});

// Parte 2: Definir el modelo.Dicho modelo esta atado al nombre de un documento

const UserModel = model ();


export default UserModel;

