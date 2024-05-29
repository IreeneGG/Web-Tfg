import Image from "next/image";
export default function Home() {

  return (

    <div className="card-inner card-started active" id="home-card">

      <div id="particles-bg" className="slide absolute overflow-hidden left-0 top-0 w-full h-full bg-[#262628] bg-no-repeat bg-cover" style={{ backgroundImage: "url('/fondo1.jpeg')" }}></div>
      
      <div className="centrize full-width">
        <div className="vertical-center">


          <div className=" flex justify-center items-center mx-0 mt-0 mb-[20px] text-[66px] leading-[66px] text-white font-semibold tracking-[-0.035em]"> 
            <Image src="/verdeclaro1.png"  width={400} height={400} alt="Casa" />
          </div>
          <div className="subtitle m-0 text-[20px] leading-[20px] font-extralight">
            
            <div className="typing-title">
              <p className="m-0">Una <strong className="text-white font-bold">plataforma de monitoreo</strong></p>
              <p className="m-0">para tus cultivos</p>
            </div>
            <span className="typed-title"></span>
          </div>

        </div>
      </div>

    </div>



  );
}