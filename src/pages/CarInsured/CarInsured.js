import { useState } from 'react';
import './CarInsured.scss';
import { useLocation } from 'react-router-dom';
import * as carInsurance from '../../apiServices/carinsuranceService';
import CarInsHeader from './component/CarInsHeader/CarInsHeader';
import AutomobileMaterial from './component/AutomobileMaterial/AutomobileMaterial';
import CarMore from './component/CarMore/CarMore';
import { formatNumberWithDots } from '../../utils/funcs';
import Button from '../../component/Button/Button';

function CarInsured() {
    // const [carComp, setCarComp] = useState(null);

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const carCompResult = await carInsurance.car_company();
    //         setCarComp(carCompResult);
    //     };
    //     fetchApi();
    // });
    const location = useLocation();
    const data = location.state && location.state.data;
    // const { trachnhiemdansu, vatchatoto, phu } = data || {};
    const [cost, setCost] = useState(0);

    const handleSetCost = (cost_x) => {
        setCost(cost_x);
    };

    return (
        <div className="carinsurance">
            <div className="carinsurance_main">
                <CarInsHeader />
                <div className="carinsurance_cost">
                    <div className="carinsurance_cost_p1">
                        <AutomobileMaterial onEstimateCost={handleSetCost} />
                        <CarMore />
                    </div>
                    <div className="carinsurance_table">
                        <div className="carinsurance_table_heading">
                            <p>Tổng phí:</p>
                            <span>(Chưa bao gồm phí VAT)</span>
                        </div>
                        <div className="carinsurance_table_fee">{cost === 0 ? '--' : formatNumberWithDots(cost)}</div>
                        <div className="carinsurance_table_btn">
                            <Button className="carinsurance_table_btn_btn" bg_color>
                                Tiếp tục
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarInsured;
