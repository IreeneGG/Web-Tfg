import { Card, CardContainer } from "@/components/component/card";
import { Section, SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";


export default async function SensoresDetalle() {
  //const res= await fetch('http://192.168.135.150:7000/')
  //const data = await res.json()
  //console.log(data)

  // Asegurémonos de que hay datos antes de intentar acceder al primer elemento
  //if (!data || !data.length) {
  //  return <div>No hay datos disponibles</div>;
  //}

  //const firstItem = data[0]; // Obtenemos el primer elemento de los datos

  return (

    <div className="card-inner card-started active" id="home-card">
      <div className="row card-container">

        <div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar>


          <div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: "url('/fondo1.jpeg')" }}></div>


          <div className="content inner-top">
            <div className="row">
              <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                <div className="title-bg absolute overflow-hidden left-0 top-[-50px] w-full text-[90px] leading-[120px] text-white uppercase font-bold tracking-[0.04em] text-center whitespace-nowrap pointer-events-none opacity-5">About Brot</div>
                <div className="text">
                  <p className="m-0 mb-[30px] text-[23px] font-extralight">
                    <strong className="font-bold text-extra-color">Hello, I’m a Patrick</strong>, web-developer based on Paris. <br />
                    I have rich experience in web site design & building <br />
                    and customization. Also I am good at <strong className="font-bold text-extra-color">html, css, <br />
                      wordpress, php, jquery, bootstrap.</strong>
                  </p>
                </div>
                <div className="circle-bts">
                  <a href="#"><span><i className="icon la la-download"></i>Download CV</span></a>
                  <a href="#"><i className="icon la la-github"></i></a>
                  <a href="#"><i className="icon la la-stack-overflow"></i></a>
                  <a href="#"><i className="icon la la-skype"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
