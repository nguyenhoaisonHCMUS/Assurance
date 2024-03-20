import './ChildrenProductOto.scss';
import { ChevronRight } from '../../../../../assets/icons/Icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

const ChildrenProductOto = ({ name, permiss, fee, des, disabled = false, onBuy, onShowDetail }) => {
    const [program, setProgram] = useState(false);
    const handleCheckBuy = () => {
        onBuy();
        setProgram(!program);
    };

    return (
        <div className="childrenproductoto">
            <div className="childrenproductoto_heading">
                <p>{name}</p>
                <div className="childrenproductoto_des">{des}</div>
            </div>
            <div className="childrenproductoto_main">
                <div className="childrenproductoto_permiss">
                    <p>Quyền lợi: </p>
                    <span>{permiss}</span>
                </div>
                <div className="childrenproductoto_fee">
                    <p>Phí: </p>
                    <span>{fee}</span>
                </div>
                <div className="childrenproductoto_btn">
                    <div
                        className={classNames({ childrenproductoto_btn_buy: true, disabled_productoto: disabled })}
                        onClick={handleCheckBuy}
                    >
                        <input
                            id="childrenproductoto_btn_buyid"
                            type="checkbox"
                            checked={program}
                            onChange={() => setProgram(!program)}
                        />
                        <label>Chọn mua</label>
                    </div>
                    <div className="childrenproductoto_btn_detail" onClick={onShowDetail}>
                        <p>Chi tiết</p>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

ChildrenProductOto.propTypes = {
    name: PropTypes.string,
};

export default ChildrenProductOto;
