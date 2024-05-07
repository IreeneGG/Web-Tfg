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
    con.query("SELECT * FROM lecturaSuelo", function (err, result) {
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
  fetchDatosLectura
};
