import { CardGrafics, CardGraficsQ, CardGraficsB } from "@/components/component/cardGrafics";
import { obtenerLecturasH } from "@/lib/mysqldb/consultasSensores";
import { fetchDatosLectura, fetchUltimaTupla, fetchDatosLecturaAmbiente } from "../../lib/mysqldb/demo_db_connection";
import { Suspense } from "react";
import Image from 'next/image';

export default async function Noticias() {
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
            <div class="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: "url('/verdeclaro.png')" }}>

            </div>
            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg absolute overflow-hidden left-0 top-[-50px] w-full text-[120px] leading-[120px] text-white uppercase font-bold tracking-[0.04em] text-center whitespace-nowrap pointer-events-none opacity-5">
                    Noticias
                  </div>
                </div>
              </div>
            </div>
            <div class="content blog !mt-[-10px] !pt-0">
              <div class="row">
                <div class="col col-m-12 col-t-5 col-d-5 col-d-lg-5">


                  <div class="title m-0 relative text-[20px] leading-[28px] text-white font-bold"><span class="text-extra-color"></span> </div>

                </div>

              </div>


              <div class="row grid-items">

              <div class="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item photo">
                  <div class="box-item card-box relative overflow-hidden text-center !p-0">
                    <div class="image relative overflow-hidden">
                      <a href="assets/images/works/work1.jpg" class="has-popup-image block text-[0]">
                        <Image
                          src="/work5.jpg"
                          width={27}
                          height={27}
                          alt="Sensor"
                          className="relative w-full h-auto rounded-tr-[18px] rounded-tl-[18px] transition-all duration-500"
                        />


                        
                      </a>
                    </div>
                    <div class="desc p-[15px] relative">
                      <a href="assets/images/works/work1.jpg" class="name has-popup-image m-0 block text-[16px] text-white font-bold">Motorcycle Helmet</a>
                      <div class="category m-0 p-0 relative inline-block text-[12px] leading-[12px] text-[#777] font-normal">Photo</div>
                    </div>
                  </div>
                </div>
                <div class="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item photo">
                  <div class="box-item card-box relative overflow-hidden text-center !p-0">
                    <div class="image relative overflow-hidden">
                      <a href="assets/images/works/work1.jpg" class="has-popup-image block text-[0]">
                        <Image
                          src="/work3.jpg"
                          width={27}
                          height={27}
                          alt="Sensor"
                          className="relative w-full h-auto rounded-tr-[18px] rounded-tl-[18px] transition-all duration-500"
                        />


                        
                      </a>
                    </div>
                    <div class="desc p-[15px] relative">
                      <a href="assets/images/works/work1.jpg" class="name has-popup-image m-0 block text-[16px] text-white font-bold">Motorcycle Helmet</a>
                      <div class="category m-0 p-0 relative inline-block text-[12px] leading-[12px] text-[#777] font-normal">Photo</div>
                    </div>
                  </div>
                </div>
 <div class="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item photo">
                  <div class="box-item card-box relative overflow-hidden text-center !p-0">
                    <div class="image relative overflow-hidden">
                      <a href="assets/images/works/work1.jpg" class="has-popup-image block text-[0]">
                        <Image
                          src="/work3.jpg"
                          width={27}
                          height={27}
                          alt="Sensor"
                          className="relative w-full h-auto rounded-tr-[18px] rounded-tl-[18px] transition-all duration-500"
                        />


                        
                      </a>
                    </div>
                    <div class="desc p-[15px] relative">
                      <a href="assets/images/works/work1.jpg" class="name has-popup-image m-0 block text-[16px] text-white font-bold">Motorcycle Helmet</a>
                      <div class="category m-0 p-0 relative inline-block text-[12px] leading-[12px] text-[#777] font-normal">Photo</div>
                    </div>
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
