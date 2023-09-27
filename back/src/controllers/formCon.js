import Form from '../models/formCon';

async function insertarDatos(nombre, email, comentarios){
    try {
        const newInfo = new Form({ nombre, email, comentarios });
        await newInfo.save();
        return newUser;
      } catch (error) {
        throw error;
      }
      
}