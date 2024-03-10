import './Program.scss';
import ProTypes from 'prop-types';
import { Chevronright } from '../../../../../assets/icons';

function Program({ className, name, cost, permission, logo, onProgramBtnClick }) {
    console.log(typeof onProgramBtnClick);
    return (
        <div className={`program ${className ? className : ''}`}>
            <div className="program_header">
                <div className="Program_name">
                    <img alt="program" src={logo} />
                    <p>{name}</p>
                </div>
                <div className="program_btn" onClick={onProgramBtnClick}>
                    <span>Chi tiết</span>
                    <Chevronright className="program_btn_btn" />
                </div>
            </div>
            <div className="program_main">
                <div className="program_main_permiss">
                    <p>Quyền lợi chính</p>
                    <span>{permission}đ</span>
                </div>
                <div className="program_main_cost">
                    <p>Phí</p>
                    <span>Từ {cost}đ/Năm</span>
                </div>
            </div>
        </div>
    );
}
Program.propTypes = {
    className: ProTypes.string,
    name: ProTypes.string,
    cost: ProTypes.number,
    permission: ProTypes.number,
    onProgramBtnClick: ProTypes.func.isRequired,
};

export default Program;
