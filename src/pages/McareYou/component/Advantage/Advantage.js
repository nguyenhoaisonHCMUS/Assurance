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
                                Phí chỉ từ <strong>3.000 đồng/ngày</strong>
                            </p>
                        </div>
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Tổng quyền lợi <strong>lên tới 454 triệu đồng/năm</strong>
                            </p>
                        </div>
                    </div>
                    <div className="advans_more_s">
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Bảo vệ toàn diện với quyền lợi chính <strong>(nội trú, phẫu thuật)</strong> và quyền lợi
                                bổ sung <strong>(ngoại trú, nha khoa, thai sản, sinh mạng và tai nạn cá nhân)</strong>
                            </p>
                        </div>
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                <strong>Bảo lãnh viện phí 24/7 tại gần 200 bệnh viện</strong> trên cả nước
                            </p>
                        </div>
                    </div>
                    <div className="advans_more_s">
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                Đăng ký & nhận hợp đồng bảo hiểm trực tuyến <strong>nhanh - gọn - đơn giản</strong>
                            </p>
                        </div>
                        <div className="advans_more_item">
                            <span className="advans_more_paicon">
                                <CheckIcon className="advans_more_icon" />
                            </span>
                            <p className="advans_more_content">
                                <strong>Bồi thường trong vòng 15 ngày</strong> làm việc
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
