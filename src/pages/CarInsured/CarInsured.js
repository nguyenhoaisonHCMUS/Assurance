import './CarInsured.scss';
import { useLocation } from 'react-router-dom';

function CarInsured() {
    const location = useLocation();
    const data = location.state && location.state.data;
    const { trachnhiemdansu, vatchatoto, phu } = data || {};

    return <div className="carinsurance"></div>;
}

export default CarInsured;
