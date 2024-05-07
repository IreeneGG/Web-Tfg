import LinesChart from "./LinesChart"
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

const CardGraficsQ = ({ titulo, descripcion,datos  }) => {
    return (
        <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
            <div className="service-item card-box min-h-[236px] text-left">
                <LinesChart datos={datos}/>
            </div>
        </div>


    )
};
export { CardGraficsQ };