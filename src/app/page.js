import { Card, CardContainer } from "@/components/component/card";
import { Section, SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-grow">
      {/* Div para el contenido principal */}
      <div className="w-full md:w-3/4">
       
            <Title>Sensores</Title>
            <p className="text-black text-left p-4 items-center  pl-10"> Visualización de los datos de los sensores instalados en la parcela</p>
            <Section>
              <CardContainer>
                <Card item={"SENSOR1"} />
                <Card item={"SENSOR2"} />
                <Card item={"SENSOR3"} />
              </CardContainer>
            </Section>

           
          
      </div>

      {/* Contenido del div estrecho */}
      <div className="w-full md:w-1/4 bg-cover bg-center p-4  bg-black bg-opacity-50" style={{ backgroundImage: "url('/fondo2.jpeg')", backgroundBlendMode: 'soft-light' }}>
        <div className="max-w-full">
          <h3 className="text-white text-2xl text-center">Tiempo real</h3>
          <p className="text-white text-left p-4 items-center">Tiempo real captado por la platafroma AEMET en estos momentos</p>
          <Section>
            <div className="grid lg:max-w-6xl lg:w-full lg:grid-cols-auto lg:text-left w-full h-full">
              <CardWeather item={"VALLARTA"} temperature={11} estado={"nublado"} />
            </div>
          </Section>
        </div>
      </div>

    </div>
  );
}
