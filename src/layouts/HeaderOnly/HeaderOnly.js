import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="dl_wrapper">
            <Header />
            <div className="dl_container">{children}</div>
        </div>
    );
}

export default HeaderOnly;
