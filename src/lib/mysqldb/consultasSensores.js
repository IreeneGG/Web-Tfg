// imporat la funcion queryDatabase de demo_db_connection para realizar la consulta a la bbdd

const { queryDatabase } = require('./demo_db_connection');

 async function fetchObtenerLecturas() {
  try {
    // Realizar la consulta a la base de datos utilizando la función queryDatabase
    //SELECT * FROM lecturaSuelo WHERE DATE(fecha) = CURDATE()
    const result = await queryDatabase('SELECT * FROM lecturas');
    console.log('Resultado de la consulta:', result);
    return result; // Devolver el resultado de la consulta
  } catch (error) {
    console.error('Error al obtener las lecturas:', error);
    throw error; // Reenviar el error para que pueda ser manejado por el código que llama a esta función
  }
}

module.exports = { fetchObtenerLecturas };