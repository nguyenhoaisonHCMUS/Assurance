import { useParams } from 'react-router-dom';
import './InsuranceDetail.scss';
import * as programApi from '../../apiServices/programService';
import { useEffect, useState } from 'react';
import Button from '../../component/Button';
import { ChevronDown, Iicon } from '../../assets/icons';
import { formatNumberWithDots } from '../../utils/funcs';
import Drawer from '../../component/Drawer/Drawer';
import PersonalAcident from './component/PersonalAcident/PersonalAcident';

function InsuranceDetail() {
    const { id } = useParams();

    const [programs, setPrograms] = useState([]);
    const [additionalFee, setAdditionalFee] = useState(0);
    const [isOutpatient, setisOutpatient] = useState(false);
    const [isDental, setIsDental] = useState(false);
    const [showPersonalAcident, setshowPersonalAcident] = useState(false);
    const [costPersonalAcident, setCostPersonalAcident] = useState(0);
    const [showLife, setshowLife] = useState(false);
    const [costLife, setCostLife] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const programResult = await programApi.program();
            setPrograms(programResult);
        };
        fetchApi();
    }, []);

    const handlePatient = () => {
        setisOutpatient(!isOutpatient);
        if (!isOutpatient) {
            setAdditionalFee((prev) => prev + 1716000);
        } else {
            setAdditionalFee((prev) => prev - 1716000);
        }
    };
    const handleDental = () => {
        setIsDental(!isDental);
        if (!isDental) {
            setAdditionalFee((prev) => prev + 1200000);
        } else {
            setAdditionalFee((prev) => prev - 1200000);
        }
    };

    const handleShowPersonalAcident = () => {
        setshowPersonalAcident(true);
    };

    const handleCostPersonalAcident = (cost_PersonalAcident) => {
        setshowPersonalAcident(false);
        setCostPersonalAcident(cost_PersonalAcident);
    };
    const handleOffPersonalAcident = () => {
        setshowPersonalAcident(false);
    };
    // console.log(costPersonalAcident);

    const handleShowLife = () => {
        setshowLife(true);
    };

    const handleCostLife = (cost_Life) => {
        setshowLife(false);
        setCostLife(cost_Life);
    };
    const handleOffLife = () => {
        setshowLife(false);
    };

    const program = programs[parseInt(id)];
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
                            <div className="insurancedetail_benemain_fee">{formatNumberWithDots(program.permiss)}đ</div>
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
                                    checked={isOutpatient}
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
                                    checked={isDental}
                                    onChange={handleDental}
                                />
                                <p>Bảo hiểm Nha khoa</p>
                                <span>(số tiền/năm)</span>
                            </div>
                            <div className="insurancedetail_benemain_fee">5.000.000đ/năm, 2.500.000đ/lần khám</div>
                            <div className="insurancedetail_benemain_bonus">Phí: 1.200.000đ</div>
                        </div>

                        {/* //////////////////////////////////////////////////////////// */}
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <input className="insurancedetail_benemain_checkbox" type="checkbox" value />
                                <div
                                    className="insurancedetail_benemain_checkboxbefore"
                                    onClick={handleShowPersonalAcident}
                                ></div>
                                <p>Bảo hiểm Tai nạn cá nhân </p>
                                <span></span>
                            </div>
                            <div className="insurancedetail_benemain_fee">
                                {costPersonalAcident === 0 ? (
                                    <p>Tối đa 1 tỷ đồng</p>
                                ) : (
                                    <p>{formatNumberWithDots(costPersonalAcident)}đ</p>
                                )}
                                <span onClick={handleShowPersonalAcident}>
                                    {' '}
                                    {costPersonalAcident === 0 ? <p>Chọn số tiền bảo hiểm</p> : <p>Thay đổi</p>}{' '}
                                    <ChevronDown className="insurancedetail_benemain_fee_icon" />
                                </span>
                            </div>
                            <div className="insurancedetail_benemain_bonus">
                                {costPersonalAcident === 0 ? (
                                    <p>Phí: 0,09% số tiền bảo hiểm</p>
                                ) : (
                                    <p>Phí: {formatNumberWithDots(costPersonalAcident * 0.0009)}đ</p>
                                )}
                            </div>
                        </div>
                        <div className="insurancedetail_benemain_ingredient">
                            <div className="insurancedetail_benemain_name">
                                <input className="insurancedetail_benemain_checkbox" type="checkbox" />
                                <div className="insurancedetail_benemain_checkboxbefore" onClick={handleShowLife}></div>
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

            {showPersonalAcident && (
                <Drawer drawer_right onClose={handleOffPersonalAcident}>
                    <PersonalAcident
                        name="Bảo hiểm Tai nạn cá nhân"
                        initCost={costPersonalAcident}
                        min={50000000}
                        max={1000000000}
                        range={50000000}
                        fee_percent={0.0009}
                        onClose={handleOffPersonalAcident}
                        onUpdate={handleCostPersonalAcident}
                    />
                </Drawer>
            )}

            {showLife && (
                <Drawer drawer_right onClose={handleOffLife}>
                    <PersonalAcident
                        name="Bảo hiểm Sinh mạng cá nhân"
                        initCost={costLife}
                        min={50000000}
                        max={290000000}
                        range={10000000}
                        fee_percent={0.002}
                        onClose={handleOffLife}
                        onUpdate={handleCostLife}
                    />
                </Drawer>
            )}
        </div>
    );
}

InsuranceDetail.propTypes = {};

export default InsuranceDetail;
