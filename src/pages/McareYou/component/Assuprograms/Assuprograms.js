import ProTypes from 'prop-types';
import './Assuprograms.scss';
import imgs from '../../../../assets/imgs';
import Program from './Program/Program';

const programs = [
    {
        name: 'Đồng',
        permiss: 92800000,
        cost: 1196000,
        logo: imgs.prog_dong,
    },
    {
        name: 'Bạc',
        permiss: 92800000,
        cost: 1196000,
        logo: imgs.prog_bac,
    },
    {
        name: 'Vàng',
        permiss: 92800000,
        cost: 1196000,
        logo: imgs.prog_vang,
    },
    {
        name: 'Bạch Kim',
        permiss: 92800000,
        cost: 1196000,
        logo: imgs.prog_bk,
    },
    {
        name: 'Kim Cương',
        permiss: 92800000,
        cost: 1196000,
        logo: imgs.prog_kc,
    },
];

function Assuprograms({ className, onProgramBtnClicks }) {
    //console.log(typeof onProgramBtnClicks);

    return (
        <div className="bg_assuprograms">
            <div className={`assuprograms ${className || ''}`}>
                <div className="assuprograms_heading">
                    <h2>Các chương trình bảo hiểm</h2>
                    <p>Bảo hiểm Sức khoẻ M-CareYou cung cấp 5 chương trình bảo hiểm linh hoạt theo nhu cầu của bạn</p>
                </div>
                <div className="assuprograms_main">
                    {programs.map((program, index) => {
                        return (
                            <div className="assuprograms_main_container" key={index}>
                                <Program
                                    name={program.name}
                                    cost={program.cost}
                                    permission={program.permiss}
                                    logo={program.logo}
                                    onProgramBtnClick={onProgramBtnClicks}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
Assuprograms.propTypes = {
    className: ProTypes.string,
    name: ProTypes.string,
    cost: ProTypes.string,
    permission: ProTypes.string,
    onProgramBtnClicks: ProTypes.func.isRequired,
};

export default Assuprograms;
