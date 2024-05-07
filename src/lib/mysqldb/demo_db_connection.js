// Importar el módulo de mysql
var mysql = require('mysql');

// Crear la conexión a la base de datos
var con = mysql.createConnection({
  host: "192.168.236.150",
  user: "admin",
  password: "1234",
  database: "sensores"
});

// Método para realizar una consulta a la base de datos
function fetchDatosLectura() {
  return new Promise((resolve, reject) => {
    con.query("SELECT DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, AVG(humedad) AS humedad_media FROM lecturaSuelo GROUP BY DATE_FORMAT(fecha, '%Y-%m-%d')", function (err, result) {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error
      } else {
        resolve(result); // Resolver la promesa con el resultado de la consulta
      }
    });
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
  });
}


// Exportar el método fetchDatosLectura para que pueda ser utilizado desde otros archivos
module.exports = {
  fetchDatosLectura,
  fetchUltimaTupla
};
