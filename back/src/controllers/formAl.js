import Form from '../models/formAl';

async function insertarDatos(nombre,precio,stock,categoria,descripcionCorta,
    descripcionLarga,envioSinCargo,edadDesde,edadHasta){
    try {
        const newInfo = new Form({ nombre,precio,stock,categoria,descripcionCorta,
        descripcionLarga,envioSinCargo,edadDesde,edadHasta });
        await newInfo.save();
        return newUser;
      } catch (error) {
        throw error;
      }
      
}