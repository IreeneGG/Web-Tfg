import { Card, CardContainer } from "@/components/component/card";
import { Section,SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";

export default async function SensoresDetalle() {
  const res= await fetch('http://192.168.135.150:7000/')
  const data = await res.json()
  console.log(data)
  
  // Asegurémonos de que hay datos antes de intentar acceder al primer elemento
  if (!data || !data.length) {
    return <div>No hay datos disponibles</div>;
  }
  
  const firstItem = data[0]; // Obtenemos el primer elemento de los datos
  
  return (
    <div className="flex flex-col md:flex-row flex-grow drak:bg-[#]">
      {/* Div para el contenido principal */}
      <div className="w-full md:w-4/5">

        <Title>Sensores</Title>
        <p className="text-black text-left p-4 items-center  pl-10 dark:text-white"> Visualización de los datos de los sensores instalados en la parcela</p>
        <Section>
          <CardContainer>
            <Card item={"SENSOR1"} />
            <Card item={"SENSOR2"} />
            <Card item={"SENSOR3"} />
          </CardContainer>
        </Section>

        <SectionT Title="INFORMACION">
            <div className="flex justify-center items-center h-full">
              <div className="grid lg:max-w-6xl lg:w-full lg:grid-cols-auto lg:text-right w-full">
                <p>MAS INFORMACION</p>
              </div>
            </div>
          </SectionT>

      </div>

      {/* Contenido del div estrecho */}
      <div className="w-full md:w-1/5 bg-cover bg-center p-4  bg-black bg-opacity-50" style={{ backgroundImage: "url('/fondoI.jpeg')", backgroundBlendMode: 'soft-light' }}>
        <div className="max-w-full">
          <h3 className="text-white text-2xl text-center">Tiempo real</h3>
          <p className="text-white text-left p-4 items-center">Tiempo real captado por la platafroma AEMET en estos momentos</p>
          <Section>
            <div className="flex justify-center items-center h-full">
              <div className="grid lg:max-w-6xl lg:w-full lg:grid-cols-auto lg:text-right w-full">
                <CardWeather item={firstItem} temperature={4} estado={"frio"} />
              </div>
            </div>
          </Section>
         
        </div>
      </div>

    </div>
  );
}
