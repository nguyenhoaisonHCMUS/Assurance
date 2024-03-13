import { useParams } from 'react-router-dom';
import './InsuranceDetail.scss';
import * as programApi from '../../apiServices/programService';
import { useEffect, useState } from 'react';
import Button from '../../component/Button';
import { ChevronDown, Iicon } from '../../assets/icons';
import { formatNumberWithDots } from '../../utils/funcs';

function InsuranceDetail() {
    const { id } = useParams();

    const [programs, setPrograms] = useState([]);
    const [additionalFee, setAdditionalFee] = useState(0);
    const [isOutpatient, setisOutpatient] = useState(false);
    const [isDental, setIsDental] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const programResult = await programApi.program();
            setPrograms(programResult);
        };
        fetchApi();
    }, []);

    const handlePatient = (event) => {
        const checked = event.target.checked;
        setisOutpatient(checked);
        if (checked) {
            setAdditionalFee((prev) => prev + 1716000);
        } else {
            setAdditionalFee((prev) => prev - 1716000);
        }
    };
    const handleDental = (event) => {
        const checked = event.target.checked;
        setIsDental(checked);
        if (checked) {
            setAdditionalFee((prev) => prev + 1200000);
        } else {
            setAdditionalFee((prev) => prev - 1200000);
        }
    };

    const program = programs.find((program) => program.id.toString() === id);
    if (!program) {
        return <h2 style={{ color: 'red' }}>Không có chương trình bảo hiểm này</h2>;
    }
    return (
        <div className="insurancedetail">
            <div className="insurancedetail_main">
                <div className="insurancedetail_header">
                    <div className="insurancedetail_content">
                        <div className="insurancedetail_img">
                            <img alt="x" src={program.logo} />
                        </div>
                        <h3 className="insurancedetail_name">Chương trình bảo hiểm {program.name}</h3>
                    </div>

                    <div className="insurancedetail_content">
                        <p style={{ color: 'var(--primary-color)' }}>
                            {formatNumberWithDots(program.cost + additionalFee)}đ
                        </p>
                        <Button bg_color>Mua ngay</Button>
                    </div>
                </div>
                <div className="insurancedetail_benefitmain">
                    <div className="insurancedetail_benemain_header">
                        <h3>Quyền lợi chính </h3>
                        <Iicon />
                    </div>
                    <div className="insurancedetail_benemain_main">
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Tổng hạn mức chi trả</p>
                                <span>(số tiền/người/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.permiss}đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Chi phí nằm viện</p>
                                <span>(số tiền/ngày)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}.000.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Chi phí khám và điều trị trong vòng 30 ngày trước khi nhập viện </p>
                                <span>(Số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}.000.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Chi phí tái khám và điều trị trong vòng 30 ngày sau khi xuất viện </p>
                                <span>(Số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}.000.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Chi phí phẫu thuật </p>
                                <span>(Số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}0.000.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Phục hồi chức năng </p>
                                <span>(Số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}0.000.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Trợ cấp bệnh viện công </p>
                                <span>(Số tiền/ngày) Không quá 60 ngày/năm</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}00.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Dịch vụ xe cứu thương, xe cấp cứu bằng đường bộ </p>
                                <span>(Số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}.000.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <p>Trợ cấp mai táng phí trong trường hợp tử vong tại bệnh viện </p>
                                <span>(Số tiền/vụ)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}00.000đ</div>
                        </div>
                    </div>
                    <div className="insurancedetail_benemain_header">
                        <h3>Mua thêm quyền lợi bổ sung </h3>
                    </div>
                    <div className="insurancedetail_benemain_main">
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <input
                                    className="insurancedetail_benemain_checkbox"
                                    type="checkbox"
                                    onChange={handlePatient}
                                />
                                <p>Điều trị ngoại trú do ốm bệnh, tai nạn</p>
                                <span>(số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">{program.id}.000.000đ</div>
                            <div className="insurancedetail_benemain_bonus">Phí: 1.716.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <input
                                    className="insurancedetail_benemain_checkbox"
                                    type="checkbox"
                                    value
                                    onChange={handleDental}
                                />
                                <p>Bảo hiểm Nha khoa</p>
                                <span>(số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">5.000.000đ/năm, 2.500.000đ/lần khám</div>
                            <div className="insurancedetail_benemain_bonus">Phí: 1.200.000đ</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <input className="insurancedetail_benemain_checkbox" type="checkbox" value />
                                <p>Bảo hiểm Tai nạn cá nhân </p>
                                <span></span>
                            </div>
                            <div className="insurancedetail_benemain_fee">
                                <p>Tối đa 1 tỷ đồng</p>
                                <span>
                                    {' '}
                                    Chọn số tiền bảo hiểm <ChevronDown className="insurancedetail_benemain_fee_icon" />
                                </span>
                            </div>
                            <div className="insurancedetail_benemain_bonus">Phí: 0,09% số tiền bảo hiểm</div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <input className="insurancedetail_benemain_checkbox" type="checkbox" value />
                                <p>Bảo hiểm Sinh mạng cá nhân </p>
                                <span></span>
                            </div>
                            <div className="insurancedetail_benemain_fee">
                                <p>Tối đa 290 triệu đồng</p>
                                <span>
                                    {' '}
                                    Chọn số tiền bảo hiểm <ChevronDown className="insurancedetail_benemain_fee_icon" />
                                </span>
                            </div>
                            <div className="insurancedetail_benemain_bonus">Phí: 0,09% số tiền bảo hiểm</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="insurancedetail_btn">
                <Button
                    className="insurancedetail_btn_btn"
                    href="https://www.baoviet.com.vn/insurance/Uploads/Library/Images/SP09031710_Quyen%20loi%20ca%20nhan%20CV%20HD.pdf"
                    target="_blank"
                >
                    Xem chi tiết quyền lợi
                </Button>
            </div>
        </div>
    );
}

InsuranceDetail.propTypes = {};

export default InsuranceDetail;
