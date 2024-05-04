import Image from "next/image";

const CardAcumulado = ({ mesA, mesC, añoA }) => {

    return (
        <div className="col col-m-12 col-t-4 col-d-4 col-d-lg-5 ">
            <div className="service-item card-box min-h-[236px] text-left">
                <div className="flex items-center">
                    <div className="w-2/4 mr-6">
                        <Image src="/agua.svg" alt="agua" width={130} height={130} />
                    </div>
                    <div className="text-center">

                        <div className="my-6 text-[20px] text-white font-bold">Precipitaciones acumuladas</div>

                        <div className="text-white">
                            <p className="m-0 text-[20px]"><span className="text-extra-color">Mes anterior: </span> {mesA} l</p>
                            <p className="m-0 text-[20px]"><span className="text-extra-color">Mes actual: </span>{mesC} l</p>
                            <p className="m-0 text-[20px]"><span className="text-extra-color">Año anterior: </span>{añoA} l</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
};
export { CardAcumulado };