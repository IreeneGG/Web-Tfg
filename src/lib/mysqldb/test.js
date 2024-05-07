const { obtenerLecturasH } = require( "./consultasSensores");

async function pruebaConsulta() {
  try {
    const lecturasHoy = await obtenerLecturasH();
    console.log("Lecturas de hoy:", lecturasHoy);
  } catch (error) {
    console.error("Error al obtener las lecturas:", error);
  }
}

pruebaConsulta();
