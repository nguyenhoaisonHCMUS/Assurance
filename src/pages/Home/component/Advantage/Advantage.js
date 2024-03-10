import './Advantage.scss';
import PropTyles from 'prop-types';
import { CheckIcon } from '../../../../assets/icons/Icons';

function Advantage({ className }) {
    const advantage = 'advantage';
    const generateClassString = () => {
        const classes = { [className]: className, advantage };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };
    return (
        <div className="bg_advan">
            <div className={generateClassString()}>
                <h2 className="advan_header">Ưu điểm nổi bật</h2>
                <div className="advan_more">
                    <div className="advan_more_s">
                        <span className="advan_more_paicon">
                            <CheckIcon className="advan_more_icon" />
                        </span>
                        <h4 className="advan_more_heading">4 bước đăng ký</h4>
                        <p className="advan_more_content">Bảo hiểm trực tuyến dễ dàng</p>
                    </div>
                    <div className="advan_more_s">
                        <span className="advan_more_paicon">
                            <CheckIcon className="advan_more_icon" />
                        </span>
                        <h4 className="advan_more_heading">100% trực tuyến</h4>
                        <p className="advan_more_content">Đăng ký, nhận và quản lý hợp đồng bảo hiểm</p>
                    </div>
                    <div className="advan_more_s">
                        <span className="advan_more_paicon">
                            <CheckIcon className="advan_more_icon" />
                        </span>
                        <h4 className="advan_more_heading">An toàn tuyệt đối</h4>
                        <p className="advan_more_content">Bảo mật thông tin khách hàng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Advantage.proTypes = {
    className: PropTyles.string,
};

export default Advantage;
