import BannerBackground from "../../assets/home-banner-background.png";
import BannerImage from "../../assets/home-banner-image.png";
import Navbar from "../Navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";

import "./home.css";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Protect Yourself and your Internet
                    </h1>
                    <p className="primary-text">
                        Our technology protects your connection, blocks threats,
                        and ensures that your browsing is always in good hands.
                    </p>
                    <a href="#setup">
                        <button className="secondary-button">
                            Download<FiArrowRight />{""}
                        </button>
                    </a>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default Home;