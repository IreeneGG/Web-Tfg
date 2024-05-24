// Importar el módulo de mysql
var mysql = require('mysql');

// Crear la conexión a la base de datos
var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234",
  database: "sensores"
});

function fetchDatosLectura() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        DATE_FORMAT(ls.fecha, '%Y-%m-%d') AS fecha, 
        AVG(ls.humedad) AS humedad_media 
      FROM 
        lecturaSuelo ls
      INNER JOIN (
        SELECT 
          DISTINCT DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha
        FROM 
          lecturaSuelo
        WHERE 
          fecha <= NOW()
        ORDER BY 
          fecha DESC
        LIMIT 4
      ) sub ON DATE_FORMAT(ls.fecha, '%Y-%m-%d') = sub.fecha
      GROUP BY 
        DATE_FORMAT(ls.fecha, '%Y-%m-%d')
      ORDER BY 
        fecha ASC;
    `;
    
    con.query(query, function (err, result) {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error
      } else {
        resolve(result); // Resolver la promesa con el resultado de la consulta
      }
    });
  }).catch(error => {
    console.error('Error al obtener datos de lectura:', error);
    throw error; // Lanzar el error para que sea manejado en el código que llama a esta función
  });
}


function fetchUltimaTupla() {
  return new Promise((resolve, reject) => {
    con.query("SELECT * FROM lecturaSuelo ORDER BY id DESC LIMIT 1", function (err, result) {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error
      } else {
        resolve(result); // Resolver la promesa con el resultado de la consulta
        console.log('ESTE:', result);
      }
    });
  }).catch(error => {
    console.error('Error al obtener la última tupla:', error);
    throw error; // Lanzar el error para que sea manejado en el código que llama a esta función
  });
}

function fetchDatosLecturaAmbiente() {
  return new Promise((resolve, reject) => {
    // Obtener la fecha actual
    const currentDate = new Date();
    // Crear la fecha del día anterior
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    
    // Crear la fecha para los últimos cinco días
    const lastFiveDays = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      lastFiveDays.push(date);
    }

    // Formatear las fechas en el formato 'YYYY-MM-DD'
    const formattedDates = lastFiveDays.map(date => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    });

    // Construir la consulta SQL para obtener la media de temperatura y humedad de los últimos cinco días
    const query = `
      SELECT 
        DATE_FORMAT(hora, '%Y-%m-%d') AS fecha,
        AVG(temperatura) AS temperatura_media,
        AVG(humedad) AS humedad_media
      FROM 
        lecturasAmbiente
      WHERE 
        DATE(hora) IN (${formattedDates.map(date => `'${date}'`).join(',')})
      GROUP BY 
        DATE(hora)
      ORDER BY 
        fecha DESC`;

    // Ejecutar la consulta
    con.query(query, function (err, result) {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error
      } else {
        resolve(result); // Resolver la promesa con el resultado de la consulta
      }
    });
  }).catch(error => {
    console.error('Error al obtener datos de lectura:', error);
    throw error; // Lanzar el error para que sea manejado en el código que llama a esta función
  });
}


// Exportar el método fetchDatosLectura para que pueda ser utilizado desde otros archivos
module.exports = {
  fetchDatosLectura,
  fetchUltimaTupla,
  fetchDatosLecturaAmbiente
};
