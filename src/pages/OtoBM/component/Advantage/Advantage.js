import './Advantage.scss';
import PropTyles from 'prop-types';
import { CheckIcon } from '../../../../assets/icons';

function Advantage({ className }) {
    const advantages = 'advantages';
    const generateClassString = () => {
        const classes = { [className]: className, advantages };

        return Object.keys(classes)
            .filter((className) => classes[className])
            .join(' ');
    };
    return (
        <div className="bg_advans">
            <div className={generateClassString()}>
                <h2 className="advans_header">Ưu điểm nổi bật</h2>
                <div className="advans_more">
                    <div className="advans_more_s">
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Phí chỉ từ <strong>1.200 đồng/ngày</strong>
                            </p>
                        </div>
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Tổng quyền lợi <strong>lên tới 7 tỉ đồng</strong>
                            </p>
                        </div>
                    </div>
                    <div className="advans_more_s">
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Bảo vệ toàn diện <strong>(nội trú, phẫu thuật)</strong> bao gồm: bảo hiểm trách nhiệm
                                dân sự, tai nạn người ngồi trên xe và vật chất xe.
                            </p>
                        </div>
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Lựa chọn <strong>hệ thống garage đạt chuẩn toàn quốc</strong>
                            </p>
                        </div>
                    </div>
                    <div className="advans_more_s">
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Thủ tục<strong> bồi thường tinh gọn và nhanh chóng</strong>
                            </p>
                        </div>
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
