import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Xmark } from '../../../../assets/icons';
import './PersonalAcident.scss';
import { formatNumberWithDots } from '../../../../utils/funcs';
import Button from '../../../../component/Button';

function PersonalAcident({ name, initCost, min, max, range, fee_percent, onClose, onUpdate }) {
    const [cost, setCost] = useState(initCost === 0 ? min : initCost);
    const [fee, setFee] = useState(fee_percent * cost);

    const handleCostChange = (e) => {
        let newValue = parseInt(e.target.value);
        setCost(newValue);
    };
    const onUpdatePerAc = () => {
        onUpdate(cost);
    };

    useEffect(() => {
        setFee(cost * fee_percent);
    }, [cost, fee_percent]);
    return (
        <div className="personalacident">
            <div className="personalacident_header">
                <h3>{name}</h3>
                <span onClick={onClose}>
                    <Xmark />
                </span>
            </div>
            <div className="personalacident_container">
                <div className="personalacident_container_heading">
                    <p>Chọn số tiền bảo hiểm</p>
                </div>
                <div className="personalacident_container_cost">
                    <div className="personalacident_container_costheader">
                        {formatNumberWithDots(cost)}
                        <span>đ</span>
                    </div>
                    <input type="range" min={min} max={max} step={range} value={cost} onChange={handleCostChange} />
                    <div className="personalacident_container_range">
                        <span> {formatNumberWithDots(min)}đ</span>
                        <span> {formatNumberWithDots(max)}đ</span>
                    </div>
                </div>
                <div className="personalacident_container_fee">
                    <p>Phí: {formatNumberWithDots(fee)}đ</p>
                </div>
                <div className="personalacident_container_wrapper"></div>
                <div className="personalacident_container_btn">
                    <Button className="personalacident_container_btn_btn" border onClick={onClose}>
                        Huỷ
                    </Button>
                    <Button className="personalacident_container_btn_btn" bg_color onClick={onUpdatePerAc}>
                        Cập nhật
                    </Button>
                </div>
            </div>
        </div>
    );
}

PersonalAcident.propTypes = {
    name: PropTypes.string.isRequired,
    initCost: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    range: PropTypes.number.isRequired,
    fee_percent: PropTypes.number.isRequired,
    onClose: PropTypes.func,
    onUpdate: PropTypes.func,
};

export default PersonalAcident;
