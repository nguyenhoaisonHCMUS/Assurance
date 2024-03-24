import { Formik, Form, Field, ErrorMessage } from 'formik';
import './ContactForm.scss';

function ContactForm() {
    const handleSubmit = (values) => {
        console.log(values);
    };

    const validate = (values) => {
        const errors = {};
        if (!values.fullName) {
            errors.fullName = 'Full Name is required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        }
        if (!values.address) {
            errors.address = 'Address is required';
        }
        if (!values.bankName) {
            errors.bankName = 'Name of Bank is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        return errors;
    };

    return (
        <div className="contactform">
            <div className="contactform_heading">
                <h2>Để lại thông tin tư vấn</h2>
                <p>Bạn vẫn còn phân vân về sản phẩm? Hãy liên hệ ngay với chúng tôi</p>
            </div>
            <Formik
                initialValues={{ fullName: '', phoneNumber: '', address: '', bankName: '', email: '' }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="contactform_form">
                        <p>Họ và tên</p>
                        <Field className="contactform_field contactform_name" type="text" name="fullName" />
                        <ErrorMessage name="fullName" component="p" className="error" />
                    </div>
                    <div className="contactform_phonemail">
                        <div>
                            <p>Số điện thoại</p>
                            <Field className="contactform_field contactform_phone" type="text" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component="p" className="error" />
                        </div>
                        <div>
                            <p>Email</p>
                            <Field className="contactform_field contactform_email" type="text" name="email" />
                            <ErrorMessage name="email" component="p" className="error" />
                        </div>
                    </div>
                    <div className="contactform_phonemail">
                        <div>
                            <p>Địa chỉ</p>
                            <Field className="contactform_field contactform_address" type="text" name="address" />
                            <ErrorMessage name="address" component="p" className="error" />
                        </div>
                        <div>
                            <p>Chi nhánh/ PGD MSB</p>
                            <Field className="contactform_field contactform_cn" type="text" name="bankName" />
                            <ErrorMessage name="bankName" component="p" className="error" />
                        </div>
                    </div>
                    <div className="contactform_submit">
                        <button className="contactform_submitbtn" type="submit">
                            Gửi yêu cầu tư vấn
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default ContactForm;
