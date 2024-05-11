import LinesChart from "./LinesChart"
import PiesChart from "./PiesChart"
import BarsChat from "./BarsChart"
const CardGrafics = ({ titulo, descripcion,datos  }) => {
    return (
        <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
            <div className="service-item card-box min-h-[236px] text-left">
                <LinesChart datos={datos}/>
            </div>
        </div>


    )
};
export { CardGrafics };

const CardGraficsQ = ({datos1}) => {
    // console.log("PIES DATOS1:",datos1);
    return (
        <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
            <div className="service-item card-box min-h-[236px] text-left">
                <PiesChart datos1={datos1}/>
              
            </div>
        </div>


    )
};
export { CardGraficsQ };

const CardGraficsB = ({datosAmbiente}) => {
    // console.log("PIES DATOS1:",datos1);
    return (
        <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
            <div className="service-item card-box min-h-[236px] text-left">
                <BarsChat datosAmbiente={datosAmbiente}/>
              
            </div>
        </div>


    )
};
export { CardGraficsB };