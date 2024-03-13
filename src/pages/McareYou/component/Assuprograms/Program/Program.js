import './Program.scss';
import ProTypes from 'prop-types';
import { Chevronright } from '../../../../../assets/icons';
import { formatNumberWithDots } from '../../../../../utils/funcs';

function Program({ className, program, onProgramBtnClick }) {
    const handleButtonClick = () => {
        // Dữ liệu bạn muốn truyền vào drawer
        onProgramBtnClick(program); // Gọi hàm được truyền từ component gốc
    };
    return (
        <div className={`program ${className ? className : ''}`}>
            <div className="program_header">
                <div className="Program_name">
                    <img alt="program" src={program.logo} />
                    <p>{program.name}</p>
                </div>
                <div className="program_btn" onClick={handleButtonClick}>
                    <span>Chi tiết</span>
                    <Chevronright className="program_btn_btn" />
                </div>
            </div>
            <div className="program_main">
                <div className="program_main_permiss">
                    <p>Quyền lợi chính</p>
                    <span>{formatNumberWithDots(program.permiss)}đ</span>
                </div>
                <div className="program_main_cost">
                    <p>Phí</p>
                    <span>Từ {formatNumberWithDots(program.cost)}đ/Năm</span>
                </div>
            </div>
        </div>
    );
}
Program.propTypes = {
    className: ProTypes.string,
    program: ProTypes.object,
    onProgramBtnClick: ProTypes.func.isRequired,
};

export default Program;
