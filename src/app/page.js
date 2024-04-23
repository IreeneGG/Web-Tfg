import { Card, CardContainer } from "@/components/component/card";
import { Section, SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";
import Image from 'next/image';


export default  function Home() {

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fondo1.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white">
          <h1 className="text-8xl font-bold items-center justify-center">Brot</h1>

          <p className="text-lg mt-4 text-gray-400">Plataforma de Monitoreo.</p>
        </div>
      </div>
    </div>

    

    
      

  );
}