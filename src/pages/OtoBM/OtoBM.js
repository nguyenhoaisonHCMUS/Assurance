import './OtoBM.scss';
import PropTypes from 'prop-types';
import imgs from '../../assets/imgs';
import ListSlide from '../../component/ListSlide';
import Apart from '../../component/Apart';
import Question from '../../component/Question/Question';
import { Fragment } from 'react';
import config from '../../config';
import Advantage from './component/Advantage/Advantage';
import ProductListOto from './component/ProductListOto/ProductListOto';

const slides = [
    {
        src: imgs.otobm,
        content: 'Mua bảo hiểm trực tuyến tại MSB thật dễ dàng chỉ với vài thao tác',
        content_btn: 'Tìm hiểu ngay',
        href: '#mcareyou_product',
    },
    {
        src: imgs.otobn2,
        content: 'Bảo hiểm sức khoẻ ưu việt chỉ từ 3.000đ/ngày',
        content_btn: 'Mua ngay',
        href: config.routes.carinsured,
    },
    {
        src: imgs.otobn3,
        content: 'Bảo hiểm ô tô toàn diện chỉ từ 1.200đ/ngày',
        content_btn: 'Mua ngay',
        href: '#',
    },
];

const products = [
    {
        src: imgs.oto_t1,
        heading: 'Bảo hiểm Trách nhiệm dân sự bắt buộc',
        permiss: '150.000.000đ/người/vụ',
        fee: 'Từ 437.000đ/năm',
    },
    {
        src: imgs.oto_t2,
        heading: 'Bảo hiểm Vật chất ô tô',
        permiss: 'Bồi thường theo giá trị xe',
        fee: 'Phụ thuộc vào loại xe',
    },
    {
        src: imgs.oto_t3,
        heading: 'Bảo hiểm tai nạn lái, phụ xe và người ngồi trên xe',
        permiss: 'Đến 500.000.000đ/người/vụ',
        fee: 'Từ 10.000đ/người/năm',
    },
];

function OtoBM() {
    return (
        <div className="mcareyou">
            <ListSlide slides={slides} />

            <Advantage />
            <ProductListOto products={products} />

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
                    ques="1. Bảo hiểm vật chất xe là gì?"
                    render={
                        <Fragment>
                            <p>
                                Đây loại hình <strong>BH về tài sản</strong> , Bảo Minh chịu trách nhiệm{' '}
                                <strong>
                                    {' '}
                                    bồi thường cho chủ xe những thiệt hại của chính chiếc xe nếu tai nạn xảy ra thuộc
                                    phạm vi BH.
                                </strong>
                                <br /> Bồi thường cho chủ xe những thiệt hại vật chất xe xảy ra do những tai nạn bất
                                ngờ, ngoài sự kiểm soát của chủ xe, lái xe trong các trường hợp:
                            </p>
                            <li>Bị tai nạn do đâm va, lật đổ.</li>
                            <li>Cháy nổ, bão lụt, sét đánh.</li>
                            <li>Mất cắp toàn bộ và các rủi ro bất ngờ khác.</li>
                            <li>
                                Ngoài ra thanh toán những chi phí cần thiết và hợp lý cho việc ngăn ngừa hạn chế tổn
                                thất, trục vớt, kéo xe đến nơi sửa chữa, giám định tổn thất.
                            </li>
                        </Fragment>
                    }
                />
                <Question
                    className="mcareyou_question"
                    ques="2. Bảo hiểm TNDS bắt buộc là gì?"
                    render={
                        <Fragment>
                            <p>
                                Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới với bên thứ ba{' '}
                                <strong> là bảo hiểm bắt buộc phải mua theo Nghị định 03/2021/NĐ-CP </strong> của Thủ
                                tướng Chính phủ ngày 15 tháng 01 năm 2021 và Thông tư 04/2021 của Bộ Tài chính ngày 15
                                tháng 01 năm 2021 <br /> Mọi xe ô tô lưu hành trên đường đều phải mua bảo hiểm trách
                                nhiệm dân sự bên thứ 3 mức bắt buộc theo qui định của Nhà nước.
                                <strong>Khái niệm “Bên thứ ba”:</strong> là người bị thiệt hại về thân thể, tính mạng,
                                tài sản do xe cơ giới gây ra, trừ những người sau:
                            </p>
                            <li>Lái xe, phụ xe trên chính chiếc xe đó.</li>
                            <li>Người trên xe và hành khách trên chính chiếc xe đó.</li>

                            <li>
                                Chủ sở hữu xe trừ trường hợp chủ sở hữu đã giao cho tổ chức, cá nhân khác chiếm hữu, sử
                                dụng chiếc xe đó.
                            </li>
                            <p>
                                Mức trách nhiệm đối với thiệt hại về người: 150trđ/người/vụ;
                                <br /> Mức trách nhiệm đối với thiệt hại về tài sản: 100trđ/vụ
                            </p>
                        </Fragment>
                    }
                />

                <Question
                    className="mcareyou_question"
                    ques="3. Bảo hiểm Tai nạn lái xe và người ngồi trên xe là gì?"
                    render={
                        <Fragment>
                            <p>
                                Bảo hiểm <strong>thiệt hại thân thể</strong> đối với{' '}
                                <strong> Người được bảo hiểm</strong> do tai nạn{' '}
                                <strong>
                                    {' '}
                                    khi đang ở trên xe, lên xuống xe trong quá trình xe đang tham gia giao thông.
                                </strong>{' '}
                                <br />
                                Trường hợp xe chỉ tham gia bảo hiểm với số lượng Người được bảo hiểm thấp hơn số người
                                được phép chở trên xe thì mặc nhiên lái xe, phụ được bảo hiểm và số người còn lại là
                                hành khách được bảo hiểm, trừ khi có thỏa thuận khác được thỏa thuận bằng văn bản.
                            </p>
                        </Fragment>
                    }
                />
                <Question
                    className="mcareyou_question"
                    ques="4. Tôi mua xe ô tô chưa sang tên thì có thể mua bảo hiểm và ghi tên tôi vào giấy chứng nhận bảo hiểm được không?"
                    render={
                        <Fragment>
                            <p>
                                Khách hàng
                                <strong>
                                    {' '}
                                    có thể mua Bảo hiểm như bình thường,tuy nhiên trên giấy CNBH phải ghi tên chủ xe
                                    giống như trên giấy đăng ký xe.
                                </strong>
                                <br />
                                Theo quy định thì khi mua bán xe, chủ xe mới phải kê khai làm các thủ tục sang tên đổi
                                chủ. Trong trường hợp Chủ xe chưa kịp sang tên thì vẫn có thể tham gia BH cho xe ô tô,
                                KH vẫn được hưởng đầy đủ các quyền lợi BH nhưng mục chủ xe vẫn phải ghi tên chủ xe cũ,
                                tổn thất xảy ra Công ty BH vẫn sẽ bồi thường cho Chủ xe mới.
                            </p>
                        </Fragment>
                    }
                />
            </Apart>
        </div>
    );
}

OtoBM.propTypes = {
    className: PropTypes.string,
};

export default OtoBM;
