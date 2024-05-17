  import LinesChart from "./LinesChart";
import PiesChart from "./PiesChart";
import BarsChat from "./BarsChart";
import { fetchDatosLectura, fetchUltimaTupla, fetchDatosLecturaAmbiente } from "../../lib/mysqldb/demo_db_connection";

const CardGrafics = async () => {
  let datos = [];
  
  try {
    // Obtener los datos de la consulta
    const result = await fetchDatosLectura();
    // console.log('Resultado de la consulta:', result);
  
    // Modificar datos dentro del bloque try
    datos = result.length > 0 ? result.map(row => ({
      fecha: row.fecha,
      humedad_media: row.humedad_media
    })) : [];
  } catch (error) {
    console.error('Error al obtener los datos de la consulta:', error);
  }
  

  return (
    <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
      <div className="service-item card-box min-h-[236px] text-left">
        <LinesChart datos={datos}/>
      </div>
    </div>
  );
};

const CardGraficsQ = async () =>  {
  let ultimaTupla = {};
   try {
      // Obtener la última tupla de la consulta
      const result1 = await fetchUltimaTupla();
  
      // Modificar ultimaTupla dentro del bloque try
      ultimaTupla = result1.length > 0 ? {
        fecha: result1[0].fecha,
        humedad: result1[0].humedad
      } : {};
       console.log('Última tupla de la consulta:', ultimaTupla);
    } catch (error) {
      console.error('Error al obtener la última tupla de la consulta:', error);
    }
  // console.log("PIES DATOS1:",datos1);
  return (
    <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
      <div className="service-item card-box min-h-[236px] text-left">
        <PiesChart datos1={ultimaTupla}/>
      </div>
    </div>
  );
};



const CardGraficsB = async () =>  {
  let datosAmbiente = [];
  
  try {
    // Obtener los datos de la consulta
    const result = await fetchDatosLecturaAmbiente();


    datosAmbiente = result.map(row => ({
      fecha: row.fecha,
      temperatura_media: row.temperatura_media,
      humedad_media: row.humedad_media
    }));
    console.log('Resultado de la consulta ambiente:', datosAmbiente);
  } catch (error) {
    console.error('Error al obtener los datos de la consulta:', error);

  }
  // console.log("PIES DATOS1:",datos1);
  return (
    <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
      <div className="service-item card-box min-h-[236px] text-left">
        <BarsChat datosAmbiente={datosAmbiente}/>
      </div>
    </div>
  );
};

export {CardGrafics,CardGraficsQ,CardGraficsB};
