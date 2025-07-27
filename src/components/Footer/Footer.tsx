import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-content">
                <h3 className="footer-logo">KeepSafe</h3>
                <p className="footer-copy">
                    © {year} KeepSafe - Community project not affiliated with any corporation.
                </p>
            </div>
        </div>
    );
};

export default Footer;