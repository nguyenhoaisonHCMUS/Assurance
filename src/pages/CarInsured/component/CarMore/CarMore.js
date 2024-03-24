import { useState } from 'react';
import { formatNumberWithDots } from '../../../../utils/funcs';
import { ChevronRight } from '../../../../assets/icons';
import './CarMore.scss';

function CarMore({ number, onSetCost }) {
    const [cost, setCost] = useState(10000000);
    const [show, setShow] = useState(false);

    return (
        <div className="carmore">
            <div className="carmore_heading">
                <div className="carmore_heading_p1">
                    <input
                        type="checkbox"
                        checked={show}
                        onChange={() => {
                            setShow(!show);
                        }}
                    />
                    <h2>Bảo hiểm tai nạn, phụ xe và người ngồi trên xe</h2>
                </div>
                <div className="carmore_heading_btn">
                    <p>Mua nhiều</p>
                </div>
            </div>
            <div className="carmore_detail">
                <p> Xem chi tiết</p>{' '}
                <span>
                    <ChevronRight />
                </span>
            </div>
            {show && (
                <div className="carmore_main">
                    <div className="carmore_main_p1">
                        <div className="carmore_numberIns">
                            <p>Số người được bảo hiểm</p>
                            <input type="text" value={number || '--'} disabled readOnly />
                        </div>
                        <div className="carmore_numberIns">
                            <div className="carmore_cost">
                                <p>
                                    Số tiền bảo hiểm <span>(Người/vụ)</span>
                                </p>
                            </div>
                            <div className="carmore_cost_range">
                                <p>{formatNumberWithDots(cost)}</p>
                                <span>đ</span>
                            </div>
                            <input
                                type="range"
                                min={10000000}
                                max={500000000}
                                value={cost}
                                step={10000000}
                                onChange={(e) => {
                                    onSetCost(parseInt(e.target.value));
                                    setCost(parseInt(e.target.value));
                                }}
                            />
                        </div>
                    </div>
                    <div className="carmore_fee">
                        <p>Phí: {formatNumberWithDots(cost * 0.009)}đ</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CarMore;
