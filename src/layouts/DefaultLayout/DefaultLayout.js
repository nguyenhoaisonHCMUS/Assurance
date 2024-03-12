import Footer from '../components/Footer';
import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="dl_wrapper">
            <Header />
            <div className="dl_container">{children}</div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
