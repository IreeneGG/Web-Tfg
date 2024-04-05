import { Card, CardContainer } from "@/components/component/card";
import { Section, SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-grow dark:bg-[#2F2F2F]">
      {/* Div para el contenido principal */}
      <div className="w-full md:w-4/5 bg-[#8a8d60] flex justify-center items-center p-8">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">¡BIENVENIDO A Brot-x!</h1>
          <p className="text-lg">La página encargada de monitorear tus parcelas te ofrecerá una experiencia más cercana a tus cultivos para que puedas entenderlos mejor.</p>
          <div className="w-full md:w-4/5 mx-auto mt-8">
            <Image src="/fondo1.jpeg" alt="Descripción de la imagen" width={805} height={600} />
          </div>
        </div>
      </div>

      {/* Contenido del div estrecho */}
      <div className="w-full md:w-1/5 bg-cover bg-center p-4  bg-black bg-opacity-50" style={{ backgroundImage: "url('/fondoI.jpeg')", backgroundBlendMode: 'soft-light' }}>
        <div className="max-w-full">
          <h3 className="text-white text-2xl text-center">Tiempo real</h3>
          <p className="text-white text-left p-4 items-center">Tiempo real captado por la plataforma AEMET en estos momentos</p>
          <Section>
            <div className="flex justify-center items-center h-full">
              <div className="grid lg:max-w-6xl lg:w-full lg:grid-cols-auto lg:text-right w-full">
                <CardWeather item={"VALLARTA"} temperature={4} estado={"frio"} />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}