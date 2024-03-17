import './Home.scss';
import imgs from '../../assets/imgs';
import Advantage from './component/Advantage';
import ProductList from '../../component/ProductList';
import Apart from '../../component/Apart';
import Question from '../../component/Question/Question';
import ListSlide from '../../component/ListSlide';
import config from '../../config';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../../component/ProductList/ProductItem/ProductItem';
import ChildrenProductHome from './component/ChildrenProductHome/ChildrenProductHome';

const products = [
    {
        src: imgs.mcareyou,
        heading: 'Bảo hiểm sức khỏe M-CareYou',
        content: 'Giải pháp bảo vệ sức khoẻ ưu việt cho gia đình bạn sống vui khoẻ và an tâm tận hưởng cuộc sống',
        advans: [
            'Phí chỉ từ 3.000 đồng/ngày',
            'Tổng quyền lợi lên tới lên đến 454 triệu đồng/năm',
            'Bảo lãnh viện phí tại gần 200 bệnh viện trên cả nước',
        ],
        href: config.routes.mcareyou,
    },
    {
        src: imgs.otobm,
        heading: 'Bảo hiểm ô tô Bảo Minh',
        content:
            'Giải pháp bảo vệ toàn diện giúp bảo vệ bản thân và tài sản trước những rủi ro trên mọi hành trình của bạn',
        advans: [
            'Phí chỉ từ 1.200 đồng/ngày',
            'Tổng quyền lợi lên tới 7 tỉ đồng',
            'Thủ tục bồi thường tinh gọn và nhanh chóng',
        ],
        href: config.routes.otobm,
    },
    {
        src: imgs.nhantho,
        heading: 'Bảo hiểm nhân thọ Prudential',
        content:
            'Giải pháp trọn đời giúp bạn chủ động làm chủ cuộc sống & đảm bảo tương lai cho những người thương yêu',
        advans: [
            'Phí đóng linh hoạt từ 30.000 đồng/ngày',
            'Quyền lợi bảo hiểm đa dạng theo nhu cầu về chăm sóc sức khỏe, tiết kiệm an toàn, đầu tư đa dạng',
            'Thưởng tri ân khách hàng cùng với các tính năng phù hợp với thiết kế kế hoạch tài chính trong suốt thời gian bảo vệ',
        ],
        href: config.routes.bhnhantho,
    },
];

const slides = [
    {
        src: imgs.banner1,
        content: 'Mua bảo hiểm trực tuyến tại MSB thật dễ dàng chỉ với vài thao tác',
        content_btn: 'Tìm hiểu ngay',
    },
    {
        src: imgs.banner2,
        content: 'Bảo hiểm sức khoẻ ưu việt chỉ từ 3.000đ/ngày',
        content_btn: 'Mua ngay',
    },
    {
        src: imgs.banner3,
        content: 'Bảo hiểm ô tô toàn diện chỉ từ 1.200đ/ngày',
        content_btn: 'Mua ngay',
    },
    {
        src: imgs.banner4,
        content: 'Bảo hiểm nhân thọ Prudential',
        content_btn: 'Tìm hiểu ngay',
    },
];

function Home() {
    return (
        <div className="home">
            <ListSlide slides={slides} />
            <Advantage />

            <ProductList
                children={
                    <Fragment>
                        {products.map((product, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    src={product.src}
                                    children={
                                        <ChildrenProductHome
                                            href={product.href}
                                            content={product.content}
                                            advans={product.advans}
                                            heading={product.heading}
                                        />
                                    }
                                />
                            );
                        })}
                    </Fragment>
                }
            />
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

            <div className="home_questions_bg">
                <Apart className="home_questions" src={imgs.question_img} heading="Câu hỏi thường gặp">
                    <Question
                        ques="Mua bảo hiểm trực tuyến qua MSB có những điểm gì vượt trội?"
                        render={
                            <Fragment>
                                <li>
                                    Cung cấp các chương trình bảo hiểm từ những đối tác bảo hiểm hàng đầu, uy tín và có
                                    năng lực tài chính vững vàng
                                </li>
                                <li>Quy trình mua và quản lý hợp đồng bảo hiểm tiện lợi và trực tuyến 100%</li>
                                <li>Cam kết mức phí bảo hiểm ưu đãi và cạnh tranh nhất</li>
                            </Fragment>
                        }
                    />
                    <Question
                        ques="Tôi có thể mua các sản phẩm bảo hiểm trực tuyến nào qua MSB?"
                        render={
                            <Fragment>
                                <li>
                                    Bảo hiểm Sức khoẻ M-CareYou của Tổng Công ty Bảo hiểm Bảo Việt (thông tin chi tiết{' '}
                                    <Link to={config.routes.mcareyou} style={{ color: '#06aed4' }}>
                                        tại đây
                                    </Link>
                                    )
                                </li>
                                <li>
                                    Bảo hiểm Xe cơ giới của Công ty Bảo hiểm Bảo Minh, bao gồm: Bảo hiểm TNDS bắt buộc,
                                    Bảo hiểm Vật chất, Bảo hiểm Tai nạn lái xe và người ngồi trên xe (thông tin chi tiết{' '}
                                    <Link to={config.routes.otobm} style={{ color: '#06aed4' }}>
                                        tại đây
                                    </Link>
                                    )
                                </li>
                            </Fragment>
                        }
                    />
                    <Question
                        ques="Tôi có thể mua các sản phẩm bảo hiểm trực tuyến nào qua MSB?"
                        render={
                            <Fragment>
                                <p>
                                    MSB đóng vai trò là đối tác phân phối, chọn lọc sản phẩm và công ty bảo hiểm phù hợp
                                    nhất với khách hàng của MSB. Nếu khách hàng có phát sinh các yêu cầu liên quan đến
                                    hợp đồng và bồi thường bảo hiểm, công ty bảo hiểm sẽ có trách nhiệm hỗ trợ và giải
                                    quyết trực tiếp cùng khách hàng.
                                </p>
                            </Fragment>
                        }
                    />
                    <Question
                        ques="Tôi có thể mua các sản phẩm bảo hiểm trực tuyến nào qua MSB?"
                        render={
                            <Fragment>
                                <p>
                                    Khách hàng có thể liên hệ trực tiếp Hotline của MSB hoặc Công ty Bảo hiểm cung cấp
                                    sản phẩm bảo hiểm để được hỗ trợ.
                                </p>
                                <li>
                                    Hotline MSB <p style={{ color: '#06aed4', display: 'inline' }}>1900 6083</p>: Giải
                                    đáp thắc mắc, tư vấn lựa chọn, đăng ký bảo hiểm trực tuyến.
                                </li>
                                <li>
                                    Hotline Công ty bảo hiểm: Tư vấn yêu cầu bồi thường bảo hiểm, sửa đổi bổ sung hợp
                                    đồng.
                                    <br />
                                    Tổng Công ty Bảo hiểm Bảo Việt:
                                    <br /> <p style={{ color: '#06aed4', display: 'inline' }}>1900 55 88 99</p> / Nhánh
                                    số 3
                                    <br />
                                    Tổng Công ty cổ phần Bảo Minh:
                                    <br />
                                    <p style={{ color: '#06aed4' }}>1800 58 88 12</p>
                                </li>
                            </Fragment>
                        }
                    />
                </Apart>
            </div>
        </div>
    );
}

export default Home;
