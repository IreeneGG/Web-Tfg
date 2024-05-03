
import { CardTiempo } from "@/components/component/cardTiempo";
import { CardTiempos } from "@/components/component/cardTiempos";

export default async function TiempoDetalle() {
  const res = await fetch('http://192.168.169.150:7000/')
  const data = await res.json()
  //console.log(data)

  // Asegurémonos de que hay datos antes de intentar acceder al primer elemento
  if (!data || !data.length) {
    return <div>No hay datos disponibles</div>;
  }

  const firstItem = data[0]; // Obtenemos el primer elemento de los datos
  const secondItem = data[1]; const threeItem = data[2];  const fourItem = data[3]; const fiveItem = data[4]; const sixItem = data[5]; const sevenItem = data[6]; const eightItem = data[7];
  const estadoCielo = secondItem['Estado Cielo'];
console.log(data[3])
  return (

    <div className="card-inner active" id="about-card">
      <div className="row card-container">
        <div className="relative overflow-x-hidden overflow-hidden overflow-y-auto -webkit-overflow-scrolling-touch h-full block col col-m-12 col-t-12 col-d-8 col-d-lg-6" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
          <div className="card-normal col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: "url('/fondo2.jpeg')" }}></div>


          <div className="content inner-top">
            <div className="row">
              <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                <div className="title-bg absolute overflow-hidden left-0 top-[-50px] w-full text-[120px] leading-[120px] text-white uppercase font-bold tracking-[0.04em] text-center whitespace-nowrap pointer-events-none opacity-5">Tiempo</div>
                <div className="text">
                  <p className="m-0 mb-[30px] text-[23px] font-extralight">
                    La página <strong className="font-bold text-extra-color">Tiempo </strong>te muestra las condiciones<br />
                    climatológicas que hace en tu explotación, <br />
                    ofrecido por la plataforma <strong className="font-bold text-extra-color">Aemet</strong>
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* tiempo actual */}
          <div className="content services">
            <div className="row">
              <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                <div className="title m-0 relative text-[40px] leading-[28px] text-white font-bold">Tiempo en <span className="text-extra-color">{firstItem.Nombre}</span></div>
              </div>
            </div>


            <div className="row service-items text-[0] ">

              <CardTiempo titulo={firstItem.Nombre} tempMa={secondItem.Máxima} tempMi={secondItem.Mínima} estado={estadoCielo} />

            </div>

            {/* tiempo semana */}
            <div className="content services">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title m-0 relative text-[40px] leading-[28px] text-white font-bold">Proxima semana </div>
                </div>
              </div>
            </div>

            <div className="row service-items text-[0]">

              <CardTiempos fecha={threeItem.Fecha} tempMa={threeItem.Máxima} tempMi={threeItem.Mínima} viento={threeItem.Viento} estado={threeItem['Estado Cielo']} />
              <CardTiempos fecha={fourItem.Fecha} tempMa={fourItem.Máxima} tempMi={fourItem.Mínima} viento={fourItem.Viento} estado={fourItem['Estado Cielo']} />
              <CardTiempos fecha={fiveItem.Fecha} tempMa={fiveItem.Máxima} tempMi={fiveItem.Mínima} viento={fiveItem.Viento} estado={fiveItem['Estado Cielo']} />
              <CardTiempos fecha={sixItem.Fecha} tempMa={sixItem.Máxima} tempMi={sixItem.Mínima} viento={sixItem.Viento} estado={sixItem['Estado Cielo']} />
              <CardTiempos fecha={sevenItem.Fecha} tempMa={sevenItem.Máxima} tempMi={sevenItem.Mínima} viento={sevenItem.Viento} estado={sevenItem['Estado Cielo']} />


            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
