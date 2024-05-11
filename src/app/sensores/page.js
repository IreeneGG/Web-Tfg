
import { CardGrafics, CardGraficsQ,CardGraficsB } from "@/components/component/cardGrafics";
import { obtenerLecturasH } from "@/lib/mysqldb/consultasSensores";
import { fetchDatosLectura, fetchUltimaTupla, fetchDatosLecturaAmbiente } from "../../lib/mysqldb/demo_db_connection";



export default async function SensoresDetalle() {
  let datos = [];
  let ultimaTupla = {};
  let datosAmbiente = [];

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

  try {
    // Obtener la última tupla de la consulta
    const result1 = await fetchUltimaTupla();

    // Modificar ultimaTupla dentro del bloque try
    ultimaTupla = result1.length > 0 ? {
      fecha: result1[0].fecha,
      humedad_media: result1[0].humedad_media
    } : {};
    // console.log('Última tupla de la consulta:', ultimaTupla);
  } catch (error) {
    console.error('Error al obtener la última tupla de la consulta:', error);
  }
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
  return (

    <div className="card-inner active" id="about-card">
      <div className="row card-container">
        <div className="relative overflow-x-hidden overflow-hidden overflow-y-auto -webkit-overflow-scrolling-touch h-full block col col-m-12 col-t-12 col-d-9 col-d-lg-7" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
          <div className="card-normal col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: "url('/fondo2.jpeg')" }}></div>


          <div className="content inner-top">
            <div className="row">
              <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                <div className="title-bg absolute overflow-hidden left-0 top-[-50px] w-full text-[120px] leading-[120px] text-white uppercase font-bold tracking-[0.04em] text-center whitespace-nowrap pointer-events-none opacity-5">Sensores</div>
                <div className="text">
                  <p className="m-0 mb-[30px] text-[23px] font-extralight">
                    La página <strong className="font-bold text-extra-color">Sensores </strong>te muestra una página <br />
                    donde vas a poder ver los datos recogidos  <br />
                    por tus sensores en <strong className="font-bold text-extra-color">gráficas</strong>
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="content services">
            <div className="row">
              <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">


                <div className="title m-0 relative text-[40px] leading-[28px] text-white font-bold"><span className="text-extra-color">~ </span>Gráficas </div>

              </div>
            </div>


            <div className="row service-items text-[0]">
              <CardGrafics datos={datos} />
              <CardGraficsQ datos1={ultimaTupla} />
              <CardGraficsB datosAmbiente={datosAmbiente}/>
              

            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
