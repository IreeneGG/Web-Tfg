import Image from "next/image"

const CardWeather = ({ item, temperature,estado }) => {
  let srcImage;
  if (estado =="nublado") {
    srcImage = "/nublado.png";
  } else if (estado =="llover") {
    srcImage = "/llover.png";
  } else if (estado =="calor") {
    srcImage = "/sol.png";
  } else {
    srcImage = "/llover.png";
 
  }
  return (
    <div
      className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-[#3f4d1f] hover:dark:bg-[#3f4d1f]"
    >
      <h3 className="text-xl text-center">{item}</h3>
      <div className="gap-4 relative">
        <Image src={srcImage} alt="Weather Image" width={100} height={100} />
        <h4
          className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center group-hover:translate-x-8 group-hover:-translate-y-16 group-hover:scale-150"
        >
          {temperature}°
        </h4>
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
        <p className="text-sm">light rain</p>
        <p className="text-sm">50% humidity</p>
      </div>
    </div>
  );
};
export default CardWeather;
