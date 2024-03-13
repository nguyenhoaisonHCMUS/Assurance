import ProTypes from 'prop-types';
import './Assuprograms.scss';
import Program from './Program/Program';
import { useEffect, useState } from 'react';
import * as programApi from '../../../../apiServices/programService';

function Assuprograms({ className, onProgramBtnClicks }) {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const programResult = await programApi.program();
            setPrograms(programResult);
        };
        fetchApi();
    }, []);

    return (
        <div className="bg_assuprograms">
            <div className={`assuprograms ${className || ''}`}>
                <div className="assuprograms_heading">
                    <h2>Các chương trình bảo hiểm</h2>
                    <p>Bảo hiểm Sức khoẻ M-CareYou cung cấp 5 chương trình bảo hiểm linh hoạt theo nhu cầu của bạn</p>
                </div>
                <div className="assuprograms_main">
                    {programs.map((program) => {
                        return (
                            <div className="assuprograms_main_container" key={program.id}>
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
