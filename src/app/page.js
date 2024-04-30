import { Card, CardContainer } from "@/components/component/card";
import { Section, SectionT, Title } from "@/components/ui/section";
import CardWeather from "@/components/component/cardWeather";
import Image from 'next/image';




export default  function Home() {

  return (
    <div className="card-inner card-started active" id="home-card">


    <div id="particles-bg" className="slide absolute overflow-hidden left-0 top-0 w-full h-full bg-[#262628] bg-no-repeat bg-cover"  style={{ backgroundImage: "url('/fondo1.jpeg')" }}></div>

      <div className="centrize full-width">
        <div className="vertical-center">


          <div className="title mx-0 mt-0 mb-[30px] text-[66px] leading-[66px] text-white font-semibold tracking-[-0.035em]"><span className="pr-[15px] opacity-50">Platform</span> Brot</div>
          <div className="subtitle m-0 text-[20px] leading-[20px] font-extralight">
            I am
            <div className="typing-title">
              <p className="m-0">a <strong className="text-white font-bold">web developer.</strong></p>
              <p className="m-0">a <strong className="text-white font-bold">blogger.</strong></p>
              <p className="m-0">a <strong className="text-white font-bold">freelancer.</strong></p>
              <p className="m-0">a <strong className="text-white font-bold">photographer.</strong></p>
            </div>
            <span className="typed-title"></span>
          </div>

        </div>
      </div>
     
    </div>
    
  
    
  );
}