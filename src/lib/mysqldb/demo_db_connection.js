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
    con.query("SELECT DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, AVG(humedad) AS humedad_media FROM lecturaSuelo GROUP BY DATE_FORMAT(fecha, '%Y-%m-%d')", function (err, result) {
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
    con.query("SELECT DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, AVG(humedad) AS humedad_media FROM lecturaSuelo ORDER BY fecha DESC LIMIT 1", function (err, result) {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error
      } else {
        resolve(result); // Resolver la promesa con el resultado de la consulta
      }
    });
  }).catch(error => {
    console.error('Error al obtener la última tupla:', error);
    throw error; // Lanzar el error para que sea manejado en el código que llama a esta función
  });
}

// Exportar el método fetchDatosLectura para que pueda ser utilizado desde otros archivos
module.exports = {
  fetchDatosLectura,
  fetchUltimaTupla
};
