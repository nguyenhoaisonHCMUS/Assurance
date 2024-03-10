import Slide from '../../component/Slide';
import imgs from '../../assets/imgs';
import Button from '../../component/Button';
import Advantage from './component/Advantage';
import Condition from './component/Condition/Condition';
import Assuprograms from './component/Assuprograms/Assuprograms';
import Apart from '../../component/Apart';
import Question from '../../component/Question/Question';
import Estimatecost from './component/Estimatecost/Estimatecost';
import { Fragment, useRef, useState } from 'react';
import './McareYou.scss';
import Drawer from '../../component/Drawer/Drawer';

function McareYou() {
    const mcareyouFormRef = useRef(null);
    const [showDrawer, setShowDrawer] = useState(false);

    const handleBuyNowClick = () => {
        mcareyouFormRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onProgramBtnClick = () => {
        setShowDrawer(true);
        alert('hh');
    };
    return (
        <div className="mcareyou">
            <Slide
                src={imgs.mcareyou}
                content="Bảo hiểm sức khỏe ưu việt chỉ từ 3.000đ/ngày"
                content_black
                btn={
                    <Button bg_color onClick={handleBuyNowClick}>
                        Mua ngay
                    </Button>
                }
            />

            <Advantage />
            <Condition />
            <Assuprograms onProgramBtnClicks={onProgramBtnClick} />
            <Apart id="mcareyou_form_id" reff={mcareyouFormRef} className="mcareyou_form" src={imgs.estim_form}>
                <Estimatecost
                    className="mcareyou_form_cost"
                    title="So sánh quyền lợi và phí"
                    des="Bạn muốn tìm hiểu thêm về các Chương trình bảo hiểm, nhập thông tin Người được bảo hiểm để nhận quyền lợi và mức phí chính xác"
                />
            </Apart>

            <Apart className="home_buystep" src={imgs.step_img} heading="Mua bảo hiểm trực tuyến dễ dàng với 4 bước">
                <div className="home_buystep_steps">
                    <div className="home_buystep_step">
                        <div className="number">
                            <span>1</span>
                        </div>
                        Chọn chương trình bảo hiểm
                    </div>
                    <div className="home_buystep_step">
                        <div className="number">
                            <span>2</span>
                        </div>
                        Đăng ký thông tin
                    </div>
                    <div className="home_buystep_step">
                        <div className="number">
                            <span>3</span>
                        </div>
                        Thanh toán
                    </div>
                    <div className="home_buystep_step">
                        <div className="number_out">
                            <span>4</span>
                        </div>
                        Quản lý hợp đồng trực tuyến
                    </div>
                </div>
            </Apart>

            <Apart className="mcareyou_questions" src={imgs.question_img} heading="Câu hỏi thường gặp">
                <Question
                    className="mcareyou_question"
                    ques="1. Trẻ em dưới 06 tuổi có thể tham gia bảo hiểm trực tuyến một mình không?"
                    render={
                        <Fragment>
                            <p>
                                Không. Trẻ em dưới 06 tuổi chưa thể mua bảo hiểm trực tuyến tại thời điểm này. Bạn có
                                thể để lại thông tin tư vấn/ gọi hotline MSB hoặc tới quầy giao dịch của MSB để được tư
                                vấn tham gia bảo hiểm. Lưu ý: Trẻ em dưới 06 tuổi phải tham gia cùng với bố và/hoặc mẹ,
                                chỉ được tham gia độc lập nếu bố/mẹ đang có một loại hình bảo hiểm y tế còn hiệu lực tại
                                Bảo hiểm Bảo Việt. Khi đó, chương trình bảo hiểm của con phải tương đương hoặc thấp hơn
                                chương trình của bố/mẹ.
                            </p>
                        </Fragment>
                    }
                />
                <Question
                    className="mcareyou_question"
                    ques="2. Có thể mua bảo hiểm M-CareYou trong ngắn hạn không?"
                    render={
                        <Fragment>
                            <p>
                                Không. Bảo hiểm M-CareYou là sản phẩm bảo hiểm được thiết kế cho thời hạn chuẩn là 1 năm
                                và sẽ được tái tục hàng năm.
                            </p>
                        </Fragment>
                    }
                />
                <Question
                    className="mcareyou_question"
                    ques="3. Có thể mua riêng quyền lợi bảo hiểm bổ sung không?"
                    render={
                        <Fragment>
                            <p>Bạn phải tham gia Quyền lợi chính thì mới có thể lựa chọn thêm các Quyền lợi bổ sung.</p>
                        </Fragment>
                    }
                />
                <Question
                    className="mcareyou_question"
                    ques="4. Có thể mua quyền lợi chính và các quyền lợi bổ sung theo chương trình bảo hiểm khác nhau không?"
                    render={
                        <Fragment>
                            <p>
                                Không. Các Quyền lợi bổ sung phải đồng hạng với chương trình tham gia Quyền lợi chính.
                            </p>
                        </Fragment>
                    }
                />
            </Apart>

            <Drawer drawer_right open={showDrawer}>
                <Estimatecost
                    className="mcareyou_drawer_estim"
                    title="So sánh quyền lợi và phí"
                    des="Bạn muốn tìm hiểu thêm về các Chương trình bảo hiểm, nhập thông tin Người được bảo hiểm để nhận quyền lợi và mức phí chính xác"
                />
            </Drawer>
        </div>
    );
}

export default McareYou;
