import { useEffect, useState } from 'react';
import './AutomobileMaterial.scss';
import CarList from '../CarList/CarList';
import { formatNumberWithDots } from '../../../../utils/funcs';

const carmodel = [];

function AutomobileMaterial({ onEstimateCost }) {
    const [kd, setKd] = useState('no');
    const [carType, setCarType] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carModels, setCarModels] = useState([]);

    const [registrationDate, setRegistrationDate] = useState('');
    const [insuranceStartDate, setInsuranceStartDate] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(5);
    const [insuranceEndDate, setInsuranceEndDate] = useState('');

    const [cost, setCost] = useState(0);

    const handleSetCarType = (cartype) => {
        setCarType(cartype);
    };
    const handleSetCarBrand = (carbrand) => {
        setCarBrand(carbrand);
    };
    const handleSetCarModel = (carmodel) => {
        setCarModel(carmodel);
    };

    // console.log(carType);

    useEffect(() => {
        switch (carBrand) {
            case 'BMW':
                setCarModels(['A1', 'A2']);
                break;
            case 'Audi':
                setCarModels(['B3', 'B2']);
                break;
            case 'Benley':
                setCarModels(['C1', 'C2']);
                break;
            default:
                break;
        }
    }, [carBrand]);

    useEffect(() => {
        // Chỉ tính phí khi cả ba trường đều được chọn
        if (carType && carBrand && carModel) {
            let newCost = 0;
            switch (carType) {
                case 'Bán tải':
                    newCost += 1000000;
                    break;
                case 'Xe thương mại':
                    newCost += 1500000;
                    break;
                case 'Xe chuyên chở':
                    newCost += 2000000;
                    break;
                default:
                    break;
            }

            switch (carBrand) {
                case 'BMW':
                    switch (carModel) {
                        case 'A1':
                            newCost += 500000;
                            break;
                        case 'A2':
                            newCost += 600000;
                            break;
                        default:
                            break;
                    }
                    break;
                case 'Audi':
                    switch (carModel) {
                        case 'B3':
                            newCost += 700000;
                            break;
                        case 'B2':
                            newCost += 500000;
                            break;
                        default:
                            break;
                    }
                    break;
                case 'Benley':
                    switch (carModel) {
                        case 'C1':
                            newCost += 900000;
                            break;
                        case 'C2':
                            newCost += 1000000;
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }

            // Cập nhật giá trị của state cost
            onEstimateCost(newCost);
            setCost(newCost);
        }
    }, [carType, carBrand, carModel]);

    // Function to calculate insurance end date
    const calculateInsuranceEndDate = (startDate) => {
        const startDateObject = new Date(startDate);
        const endDateObject = new Date(startDateObject);
        endDateObject.setFullYear(startDateObject.getFullYear() + 1); // Add one year
        const endDateString = endDateObject.toISOString().slice(0, 10); // Convert to YYYY-MM-DD format
        return endDateString;
    };

    // Update insurance end date whenever insurance start date changes
    const handleInsuranceStartDateChange = (event) => {
        const startDate = event.target.value;
        const minStartDate = registrationDate || new Date().toISOString().slice(0, 10); // Ensure start date is not before registration date
        if (new Date(startDate) < new Date(minStartDate)) {
            // If start date is before minimum start date, reset to minimum start date
            setInsuranceStartDate(minStartDate);
        } else {
            // Otherwise, set the selected start date
            setInsuranceStartDate(startDate);
        }
        const endDate = calculateInsuranceEndDate(startDate);
        setInsuranceEndDate(endDate);
    };

    return (
        <div className="automobilematerial">
            <div className="automobilematerial_heading">
                <h2>Bảo hiểm vật chất ô tô</h2>
            </div>
            <div className="automobilematerial_main">
                <div className="automobilematerial_main_heading">
                    <h4> Quyền lợi bảo hiểm chính</h4>
                </div>
                <div className="automobilematerial_main_kd">
                    <h3> Kinh doanh vận tải</h3>

                    <div className="automobilematerial_main_radio">
                        <div className="automobilematerial_main_no">
                            <input type="radio" checked={kd === 'no'} value="no" onChange={() => setKd('no')} />
                            <p>Không</p>
                        </div>
                        <div className="automobilematerial_main_yes">
                            <input type="radio" value="yes" checked={kd === 'yes'} onChange={() => setKd('yes')} />
                            <p>Có</p>
                        </div>
                    </div>
                </div>
                <div className="automobilematerial_main_set">
                    <div className="automobilematerial_main_cartype">
                        <p>Kiểu loại xe</p>
                        <CarList data={['Bán tải', 'Xe thương mại', 'Xe chuyên chở']} onCheckType={handleSetCarType} />
                    </div>
                    <div className="automobilematerial_main_cartype">
                        <p>Hãng xe</p>
                        <CarList data={['Benley', 'Audi', 'BMW']} onCheckType={handleSetCarBrand} />
                    </div>
                    <div className="automobilematerial_main_cartype">
                        <p>Dòng xe/Hiệu xe</p>
                        <CarList data={carModels} onCheckType={handleSetCarModel} />
                    </div>
                    <div className="automobilematerial_main_time">
                        <p>Ngày đăng ký xe lần đầu</p>
                        <input
                            type="date"
                            value={registrationDate}
                            onChange={(e) => setRegistrationDate(e.target.value)}
                        />
                    </div>
                    <div className="automobilematerial_main_time">
                        <p>Thời gian bắt đầu bảo hiểm</p>
                        <input type="date" value={insuranceStartDate} onChange={handleInsuranceStartDateChange} />
                    </div>
                    <div className="automobilematerial_main_seat">
                        <p>Số chỗ ngồi(dựa trên xe)</p>
                        <input
                            type="text"
                            value={numberOfSeats || '--'}
                            onChange={(e) => setNumberOfSeats(e.target.value)}
                        />
                    </div>
                    <div className="automobilematerial_main_fee">
                        <p>Mức khấu trừ</p>
                        <input type="text" value="500.000đ/vụ" readOnly disabled />
                    </div>
                    <div className="automobilematerial_main_seat">
                        <p>Thời hạn kết thúc</p>
                        <input type="text" value={insuranceEndDate} readOnly />
                    </div>
                </div>
            </div>
            <div className="automobilematerial_cost">Phí: {cost === 0 ? '--' : `${formatNumberWithDots(cost)}đ`}</div>
        </div>
    );
}

export default AutomobileMaterial;
