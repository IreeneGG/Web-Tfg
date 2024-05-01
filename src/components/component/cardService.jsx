import Image from "next/image";

const CardService = ({ titulo, descripcion, }) => {
    return (
        <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
            <div className="service-item card-box min-h-[236px] text-left">
                <div className="name my-[10px] mx-0 text-[20px] text-white font-bold">{titulo}</div>
                <p className="m-0 text-[20px]">
                    {descripcion}
                </p>
            </div>
        </div>


    )
};
export { CardService };