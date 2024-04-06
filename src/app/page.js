import { Card, CardContainer } from "@/components/component/card";
import { Section, SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";
import Image from 'next/image';


export default  function Home() {

  return (
    <div className="flex flex-col md:flex-row flex-grow dark:bg-[#2F2F2F]">
      {/* Div para el contenido principal */}
      
      <div className="w-full  bg-[#8a8d60] flex justify-center items-center p-8">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">¡BIENVENIDO A Brot-x!</h1>
          <p className="text-lg">Descubre una experiencia más cercana a tus cultivos a través de nuestra plataforma especializada en el monitoreo de parcelas. 
          </p><p>Te proporcionaremos herramientas para comprender mejor tus terrenos y optimizar tus resultados agrícolas.</p>
          <div className="w-full md:w-4/5 mx-auto mt-8">
            <Image src="/fondo1.jpeg" alt="Descripción de la imagen" width={805} height={600} />
          </div>
        </div>
      </div>

    
      
    </div>
  );
}