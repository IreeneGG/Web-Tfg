import { CardGrafics, CardGraficsQ, CardGraficsB } from "@/components/component/cardGrafics";
import { obtenerLecturasH } from "@/lib/mysqldb/consultasSensores";
import { fetchDatosLectura, fetchUltimaTupla, fetchDatosLecturaAmbiente } from "../../lib/mysqldb/demo_db_connection";
import { Suspense } from "react";
import Image from 'next/image';
import Chat from "@/components/component/chat";

export default async function ChatBot() {
  let datos = [];
  let datosAmbiente = [];

  return (
    <div className="card-inner active" id="about-card">
      <div className="row card-container">
        <div
          className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6 relative overflow-hidden"
          style={{ height: '100%' }}
        >
          <div
            className="overflow-x-hidden overflow-y-auto -webkit-overflow-scrolling-touch h-full w-full"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div class="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: "url('/bot.jpg')" }}>

            </div>
            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg absolute overflow-hidden left-0 top-[-50px] w-full text-[120px] leading-[120px] text-white uppercase font-bold tracking-[0.04em] text-center whitespace-nowrap pointer-events-none opacity-5">Asistente</div>
                  <div className="text">
                    <p className="m-0 mb-[30px] text-[23px] font-extralight">
                      La página <strong className="font-bold text-extra-color">ASISTENTE BROT </strong>te muestra una página <br />
                      donde vas a Contacatar con la persona<br />

                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="content contacts-info !mt-[-10px] !pt-0">
              <div className="row">

              </div>

              <div className="row contacts-items text-[0]">
                
                
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12 ">
                  <div className="contacts-item card-box min-h-[87px] !py-[20px] !pr-[20px] !pl-[20px]">
                    
                    <div className="name m-0 text-[16px] text-white font-bold">BROTIX</div>
                    <Chat/>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
}