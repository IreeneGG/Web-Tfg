import Image from "next/image";

const CardTiempo = ({ titulo, tempMa, tempMi, estado }) => {
    let srcImage;

    
    // Verificamos si la frase contiene ciertas palabras clave
    if (estado && estado.includes("lluvia")) {
        srcImage = "/nublado.png";
    } else if (estado && (estado.includes("nuboso") || estado.includes("nubosos"))) {
        srcImage = "/llover.png";
    } else if (estado && estado.includes("sol")) {
        srcImage = "/sol.png";
    } else {
        srcImage = "/nublado.png"; // Imagen por defecto si no coincide con ninguna condición
    }

    return (
        <div className="col col-m-12 col-t-4 col-d-4 col-d-lg-5 ">
            <div className="service-item card-box min-h-[236px] text-left">
                <div className="flex items-center">
                    <div className="w-2/4 mr-6">
                        <Image src={srcImage} alt="Descripción de la imagen" width={140} height={140} />
                    </div>
                    <div className="text-center">

                        <div className="my-6 text-[15px] text-white font-bold">{titulo}</div>

                        <div className="text-[35px] text-white">
                            <p className="m-0 text-[40px]">{tempMa}/{tempMi} ºC</p>

                        </div>
                    </div>
                </div>
                {/* Descripción */}
                <p className="m-0 text-[20px] mt-2">

                </p>
            </div>
        </div>


    )
};
export { CardTiempo };