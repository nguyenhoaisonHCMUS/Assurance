import './ProductListOto.scss';
import ProductItem from '../../../../component/ProductList/ProductItem';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ChildrenProductOto from './ChildrenProductOto/ChildrenProductOto';
import { Fragment, useEffect, useState } from 'react';
import Button from '../../../../component/Button';
import Drawer from '../../../../component/Drawer';
import config from '../../../../config';

function ProductListOto({ products }) {
    const [program1, setProgram1] = useState(false);
    const [program2, setProgram2] = useState(false);
    const [program3, setProgram3] = useState(false);

    const [showProgram1Detail, setShowProgram1Detail] = useState(false);
    const [showProgram2Detail, setShowProgram2Detail] = useState(false);
    const [showProgram3Detail, setShowProgram3Detail] = useState(false);

    console.log('he:', program1 === false && program2 === false);
    console.log(program3);
    useEffect(() => {
        if (program1 === false && program2 === false) {
            setProgram3(false);
        }
    }, [program1, program2]);

    const handleOffshowProgram1Detail = () => {
        setShowProgram1Detail(false);
    };
    const handleOffshowProgram2Detail = () => {
        setShowProgram2Detail(false);
    };
    const handleOffshowProgram3Detail = () => {
        setShowProgram3Detail(false);
    };

    const program = {
        trachnhiemdansu: program1 ? 1 : 0,
        vatchatoto: program2 ? 1 : 0,
        phu: program3 ? 1 : 0,
    };

    return (
        <div className={classNames({ productlistoto: true })}>
            <h1 className="productlistoto_header">Các sản phẩm bảo hiểm</h1>
            <div className="productlistoto_content">
                <Fragment>
                    <ProductItem
                        className="productlistoto_item"
                        src={products[0].src}
                        children={
                            <ChildrenProductOto
                                name={products[0].heading}
                                permiss={products[0].permiss}
                                fee={products[0].fee}
                                onBuy={() => {
                                    setProgram1(!program1);
                                }}
                                onShowDetail={() => {
                                    setShowProgram1Detail(true);
                                }}
                                des={
                                    <>
                                        <ul style={{ opacity: 0.5, fontSize: 14 }}>
                                            <li style={{ listStyleType: 'disc', marginLeft: 16 }}>
                                                Thiệt hại về thân thể, tính mạng và tài sản đối với bên thứ ba do xe cơ
                                                giới gây ra.
                                            </li>
                                            <li style={{ listStyleType: 'disc', marginLeft: 16 }}>
                                                Thiệt hại về thân thể và tính mạng của hành khách theo hợp đồng vận
                                                chuyển hành khách do xe cơ giới gây ra.
                                            </li>
                                        </ul>
                                    </>
                                }
                            />
                        }
                    />
                    <ProductItem
                        className="productlistoto_item"
                        src={products[1].src}
                        children={
                            <ChildrenProductOto
                                name={products[1].heading}
                                permiss={products[1].permiss}
                                fee={products[1].fee}
                                onBuy={() => {
                                    setProgram2(!program2);
                                }}
                                onShowDetail={() => {
                                    setShowProgram2Detail(true);
                                }}
                                des={
                                    <>
                                        <ul style={{ opacity: 0.5, fontSize: 14 }}>
                                            <p>Bồi thường cho chủ xe trong các trường hợp:</p>
                                            <li style={{ listStyleType: 'disc', marginLeft: 16 }}>
                                                Bị tai nạn do đâm va, lật đổ.
                                            </li>
                                            <li style={{ listStyleType: 'disc', marginLeft: 16 }}>
                                                Cháy nổ, bão lụt, sét đánh.
                                            </li>
                                            <li style={{ listStyleType: 'disc', marginLeft: 16 }}>
                                                Mất cắp toàn bộ và các rủi ro bất ngờ khác.
                                            </li>
                                        </ul>
                                    </>
                                }
                            />
                        }
                    />
                    <ProductItem
                        className="productlistoto_item"
                        src={products[2].src}
                        children={
                            <ChildrenProductOto
                                name={products[2].heading}
                                permiss={products[2].permiss}
                                fee={products[2].fee}
                                onBuy={() => {
                                    setProgram3(!program3);
                                }}
                                onShowDetail={() => {
                                    setShowProgram3Detail(true);
                                }}
                                disabled={!(program1 || program2)}
                                des={
                                    <>
                                        <ul style={{ opacity: 0.5, fontSize: 14 }}>
                                            <p>
                                                Bảo vệ cho Thiệt hại thân thể đối với người được bảo hiểm do tai nạn khi
                                                đang ở trên xe, lên xuống xe trong quá trình xe đang tham gia giao
                                                thông.
                                            </p>
                                            <span style={{ color: 'var(--primary-color)', fontSize: 13 }}>
                                                Chỉ có thể mua kèm với các chương trình khác
                                            </span>
                                        </ul>
                                    </>
                                }
                            />
                        }
                    />
                </Fragment>
            </div>
            <div className="productlistoto_btn">
                <Button
                    bg_color
                    disabled={!(program1 || program2)}
                    to={config.routes.carinsured}
                    state={{ data: program }}
                >
                    Mua ngay
                </Button>
            </div>
            {showProgram1Detail && (
                <Drawer onClose={handleOffshowProgram1Detail} drawer_right>
                    <div className="productlistoto_drawer">
                        <div className="productlistoto_drawerheading">
                            <h2>Bảo hiểm trách nhiệm dân sự bắt buộc</h2>
                        </div>
                        <ul className="productlistoto_list1">
                            <p>Đối tượng áp dụng</p>
                            <li>
                                Chủ xe cơ giới tham gia giao thông trên lãnh thổ nước Cộng hòa xã hội chủ nghĩa Việt
                                Nam.
                            </li>
                            <li>
                                Chủ xe cơ giới (tổ chức, cá nhân) là chủ sở hữu xe cơ giới hoặc được chủ sở hữu xe cơ
                                giới giao chiếm hữu, sử dụng hợp pháp, điều khiển xe cơ giới.
                            </li>
                            <p>Phạm vi bảo hiểm</p>
                            <li>
                                Thiệt hại về thân thể, tính mạng và tài sản đối với bên thứ ba do xe cơ giới gây ra.{' '}
                            </li>
                            <li>
                                Thiệt hại về thân thể và tính mạng của hành khách theo hợp đồng vận chuyển hành khách do
                                xe cơ giới gây ra.
                            </li>
                            <p>Mức trách nhiệm bảo hiểm</p>
                            <li>Đối với thiệt hại về người: 150.000.000 đồng/1 người/1 vụ tai nạn.</li>
                            <li>Đối với thiệt hại về tài sản (do xe ô tô gây ra) : 100.000.000 đồng/1 vụ tai nạn.</li>
                            <p>Các loại trừ bảo hiểm</p>
                            <li>Hành động cố ý của chủ xe, lái xe hoặc của người bị thiệt hại.</li>
                            <li>Lái xe gây tai nạn cố ý bỏ chạy.</li>
                            <li>Lái xe không có giấy phép lái xe phù hợp.</li>
                            <li>Thiệt hại đối với tài sản bị mất cắp hoặc bị cướp trong tai nạn.</li>
                            <li>Chiến tranh, khủng bố, động đất.</li>
                            <li>
                                Thiệt hại đối với vàng, bạc, đá quý, tiền, các loại giấy tờ có giá trị tiền, đồ cổ,
                                tranh ảnh quý hiếm, thi hài, hài cốt.
                            </li>
                            <p>Thời hạn và hiệu lực bảo hiểm</p>
                            <li>
                                Thời điểm bắt đầu có hiệu lực của Giấy chứng nhận bảo hiểm được ghi cụ thể trên Giấy
                                chứng nhận bảo hiểm nhưng không được trước thời điểm chủ xe cơ giới đóng đủ phí bảo
                                hiểm.
                            </li>
                            <li>
                                Thời hạn bảo hiểm ghi trên Giấy chứng nhận bảo hiểm là 01 năm. Trong một số trường hợp
                                cụ thể, thời hạn bảo hiểm có thể dưới 1 năm.
                            </li>
                            <p>Phí bảo hiểm</p>
                            <li>Xe ôtô không kinh doanh dưới 6 chỗ ngồi: 437.000đ/năm bảo hiểm.</li>
                            <li>Xe ôtô không kinh doanh từ 6 – 11 chỗ ngồi: 794.000đ/năm bảo hiểm.</li>
                            <li>Xe ôtô kinh doanh dưới 6 chỗ ngồi: 756.000đ/năm bảo hiểm.</li>
                            <li>Xe ôtô kinh doanh 7 chỗ ngồi: 1.080.000đ/năm bảo hiểm.</li>
                            <li>Xe taxi: bằng 150% xe kinh doanh cùng số chỗ ngồi.</li>
                        </ul>
                        <div className="productlistoto_drawer_btn">
                            <Button border onClick={handleOffshowProgram1Detail}>
                                Đã hiểu
                            </Button>
                        </div>
                    </div>
                </Drawer>
            )}

            {showProgram2Detail && (
                <Drawer drawer_right onClose={handleOffshowProgram2Detail}>
                    <div className="productlistoto_drawer">
                        <div className="productlistoto_drawerheading">
                            <h2>Bảo hiểm vật chất ô tô</h2>
                        </div>
                        <ul className="productlistoto_list1">
                            <p>Đối tượng áp dụng</p>
                            <span>
                                Xe cơ giới hoạt động trên lãnh thổ Việt Nam bao gồm thân vỏ, máy móc và trang thiết bị
                                khác trên xe.
                            </span>
                            <p>Phạm vi bảo hiểm</p>
                            <span>
                                Bồi thường cho chủ xe những thiệt hại vật chất xe xảy ra do những tai nạn bất ngờ, ngoài
                                sự kiểm soát của chủ xe, lái xe trong các trường hợp:
                            </span>
                            <li>Bị tai nạn do đâm va, lật đổ. </li>
                            <li>Cháy nổ, bão lụt, sét đánh.</li>
                            <li>Mất cắp toàn bộ và các rủi ro bất ngờ khác.</li>
                            <li>
                                Ngoài ra thanh toán những chi phí cần thiết và hợp lý cho việc ngăn ngừa, hạn chế tổn
                                thất, trục vớt, kéo xe đến nơi sửa chữa, giám định tổn thất.
                            </li>

                            <p>Các loại trừ bảo hiểm</p>
                            <li>Các loại trừ chung theo quy định của pháp luật.</li>
                            <li>
                                Hao mòn, hư hỏng tự nhiên, hư hỏng do khuyết tật, mất giá, do sửa chữa, về điện hoặc các
                                bộ phận thiết bị.
                            </li>
                            <li>
                                Hư hỏng hay tổn thất do quá trình vận hành các thiết bị chuyên dùng trên xe cơ giới.
                            </li>
                            <li>
                                Xe sau khi sửa chữa trung, đại tu hoặc xe cải tạo mới theo quy định phải đăng kiểm lại
                                mà chưa đi đăng kiểm lại theo quy định của Nhà nước.
                            </li>
                            <li>Xe bị mất, chiếm dụng, tranh chấp dân sự, mất cắp bộ phận của xe.</li>
                            <li>
                                Tổn thất động cơ do xe đi vào đường ngập nước hay do nước lọt vào động cơ xe gây nên
                                hiện tượng thủy kích phá hủy động cơ xe.
                            </li>
                            <p>Thời hạn và hiệu lực bảo hiểm</p>
                            <li>
                                Thời điểm bắt đầu có hiệu lực của Giấy chứng nhận bảo hiểm được ghi cụ thể trên Giấy
                                chứng nhận bảo hiểm nhưng không được trước thời điểm chủ xe cơ giới đóng đủ phí bảo
                                hiểm.
                            </li>
                            <li>
                                Thời hạn bảo hiểm ghi trên Giấy chứng nhận bảo hiểm là 01 năm. Trong một số trường hợp
                                cụ thể, thời hạn bảo hiểm có thể dưới 1 năm.
                            </li>
                            <p>Phí bảo hiểm</p>
                            <li>Xe ôtô không kinh doanh dưới 6 chỗ ngồi: 437.000đ/năm bảo hiểm.</li>
                            <li>Xe ôtô không kinh doanh từ 6 – 11 chỗ ngồi: 794.000đ/năm bảo hiểm.</li>
                            <li>Xe ôtô kinh doanh dưới 6 chỗ ngồi: 756.000đ/năm bảo hiểm.</li>
                            <li>Xe ôtô kinh doanh 7 chỗ ngồi: 1.080.000đ/năm bảo hiểm.</li>
                            <li>Xe taxi: bằng 150% xe kinh doanh cùng số chỗ ngồi.</li>
                        </ul>
                        <div className="productlistoto_drawer_btn">
                            <Button border onClick={handleOffshowProgram2Detail}>
                                Đã hiểu
                            </Button>
                        </div>
                    </div>
                </Drawer>
            )}
            {showProgram3Detail && (
                <Drawer drawer_right onClose={handleOffshowProgram3Detail}>
                    <div className="productlistoto_drawer">
                        <div className="productlistoto_drawerheading">
                            <h2>Bảo hiểm tai nạn lái, phụ xe và người ngồi trên xe</h2>
                        </div>
                        <ul className="productlistoto_list1">
                            <p>Đối tượng áp dụng</p>
                            <span>Lái xe, phụ xe và những người khác được chở trên xe cơ giới.</span>
                            <p>Phạm vi bảo hiểm</p>
                            <span>
                                Thiệt hại thân thể đối với Người được bảo hiểm do tai nạn khi đang ở trên xe, lên xuống
                                xe trong quá trình xe đang tham gia giao thông.
                            </span>
                            <p> Mức trách nhiệm bảo hiểm</p>
                            <span>
                                A. Đối với số tiền bảo hiểm bằng hoặc dưới 20 triệu đồng/người vụ: Người được bảo hiểm :
                            </span>
                            <li>
                                Bị tử vong do tai nạn thuộc phạm vi bảo hiểm: trả toàn bộ số tiền bảo hiểm ghi trong
                                giấy chứng nhận bảo hiểm.
                            </li>
                            <li>
                                Bị thương tật vĩnh viễn hoặc tạm thời do tai nạn thuộc phạm vi bảo hiểm: trả tiền bảo
                                hiểm theo tỷ lệ % số tiền bảo hiểm nêu trong bảng tỷ lệ trả tiền bảo hiểm thương tật do
                                Bảo Minh ban hành theo QĐ số 1564/2004-BM/BMCN ngày 12/11/2004 của TGĐ Bảo Minh.
                            </li>
                            <span>B. Đối với số tiền bảo hiểm trên 20 triệu đồng/người vụ: Người được bảo hiểm : </span>
                            <li>
                                Bị chết do tai nạn thuộc phạm vi bảo hiểm: trả toàn bộ số tiền bảo hiểm ghi trong giấy
                                chứng nhận bảo hiểm.
                            </li>
                            <li>
                                Bị thương tật vĩnh viễn do tai nạn thuộc phạm vi bảo hiểm: trả tiền bảo hiểm theo tỷ lệ
                                % số tiền bảo hiểm nêu trong bảng tỷ lệ trả tiền bảo hiểm thương tật do Bảo Minh ban
                                hành theo QĐ số 1564/2004-BM/BMCN ngày 12/11/2004.
                            </li>
                            <li>
                                Bị thương tật tạm thời do tai nạn thuộc phạm vi bảo hiểm: tiền bảo hiểm = (Theo tỷ lệ %
                                của thương tật tạm thời theo quy định trong bảng tỷ lệ trả tiền bảo hiểm thương x
                                20.000.000 đồng) + số tiền bảo hiểm x 0,1% x số ngày điều trị, tối đa không quá 180 ngày
                                /vụ tai nạn.
                            </li>
                            <li>
                                Số ngày điều trị được xác định bởi một trong hai trường hợp sau, tùy số ngày nào ngắn
                                hơn: - Số ngày điều trị nội trú trong bệnh viện và điều trị sau khi xuất viện. Số ngày
                                điều trị sau khi xuất viện được xác định theo chỉ định của Bác sĩ điều trị. - Số ngày
                                nghỉ không đi làm do hậu quả của tai nạn được xác định theo xác nhận của đơn vị công
                                tác.
                            </li>

                            <p>Các loại trừ bảo hiểm</p>
                            <span>
                                Người được bảo hiểm có hành động cố ý tự gây tai nạn, tham gia đánh nhau trừ khi xác
                                nhận đó là hành động tự vệ, sử dụng và bị ảnh hưởng của rượu, bia vượt nồng độ theo quy
                                định của pháp luật, sử dụng ma túy và chất kích thích tương tự khác, bị cảm đột ngột,
                                trúng gió, bệnh tật, bị ngộ độc thức ăn, đồ uống và sử dụng thuốc không theo chỉ dẫn của
                                cơ quan y tế.
                            </span>
                            <p>Thời hạn và hiệu lực</p>
                            <span>1 năm</span>
                            <p>Phí bảo hiểm</p>
                            <span>Dựa theo số tiền bảo hiểm/người/vụ</span>
                        </ul>
                        <div className="productlistoto_drawer_btn">
                            <Button border onClick={handleOffshowProgram3Detail}>
                                Đã hiểu
                            </Button>
                        </div>
                    </div>
                </Drawer>
            )}
        </div>
    );
}

ProductListOto.proTypes = {
    products: PropTypes.array.isRequired,
};
export default ProductListOto;
