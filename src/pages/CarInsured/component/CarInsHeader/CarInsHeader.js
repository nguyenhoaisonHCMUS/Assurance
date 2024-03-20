import './CarInsHeader.scss';

function CarInsHeader() {
    return (
        <div className="cartnsheader">
            <div className="cartnsheader_step">
                <div className="cartnsheader_step_line"></div>
                <div className="cartnsheader_step_number">
                    <p>1</p>
                </div>
                <div className="cartnsheader_step_name">
                    <p>Chọn chương trình</p>
                </div>
            </div>
            <div className="cartnsheader_step">
                <div className="cartnsheader_step_line"></div>
                <div className="cartnsheader_step_number">
                    <p>2</p>
                </div>
                <div className="cartnsheader_step_name">
                    <p>Đăng ký thông tin</p>
                </div>
            </div>
            <div className="cartnsheader_step">
                <div className="cartnsheader_step_line"></div>
                <div className="cartnsheader_step_number">
                    <p>3</p>
                </div>
                <div className="cartnsheader_step_name">
                    <p>Thanh toán</p>
                </div>
            </div>
            <div className="cartnsheader_step">
                <div className="cartnsheader_step_number">
                    <p>4</p>
                </div>
                <div className="cartnsheader_step_name">
                    <p>Nhận hợp đồng</p>
                </div>
            </div>
        </div>
    );
}

export default CarInsHeader;
