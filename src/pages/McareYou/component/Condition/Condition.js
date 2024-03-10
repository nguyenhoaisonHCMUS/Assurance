import PropTyles from 'prop-types';
import { CheckIcon } from '../../../../assets/icons';
import './Condition.scss';

function Condition({ className }) {
    const condition = 'condition';
    const generateClassString = () => {
        const classes = { [className]: className, condition };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };
    return (
        <div className="bg_condition">
            <div className={generateClassString()}>
                <h2 className="condition_header">Điều kiện tham gia</h2>
                <div className="condition_more">
                    <div className="condition_more_s">
                        <p className="condition_more_heading">Người được bảo hiểm là</p>
                        <div className="condition_more_item">
                            <span className="condition_more_paicon">
                                <CheckIcon className="condition_more_icon" />
                            </span>
                            <p className="condition_more_content">
                                Công dân Việt Nam từ 6 tuổi đến 60 tuổi (mua mới) hoặc đến 65 tuổi (tái tục)
                            </p>
                        </div>
                    </div>
                    <div className="condition_more_s">
                        <p className="condition_more_heading">Người mua bảo hiểm là</p>
                        <div className="condition_more_item">
                            <span className="condition_more_paicon">
                                <CheckIcon className="condition_more_icon" />
                            </span>
                            <p className="condition_more_content">Cá nhân từ 18 tuổi trở lên</p>
                        </div>
                        <div className="condition_more_item">
                            <span className="condition_more_paicon">
                                <CheckIcon className="condition_more_icon" />
                            </span>
                            <p className="condition_more_content">
                                Bản thân hoặc bố/mẹ, vợ/chồng, con của Người được bảo hiểm
                            </p>
                        </div>
                    </div>

                    <div className="condition_more_s">
                        <p>Bảo hiểm trong phạm vi lãnh thổ Việt Nam</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Condition.proTypes = {
    className: PropTyles.string,
};

export default Condition;
