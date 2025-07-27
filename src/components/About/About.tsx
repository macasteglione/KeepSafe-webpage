import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about-background-image.png";
import { Typography } from "@mui/material";

import "./about.css";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <Typography className="primary-subheading" variant="h4" sx={{ mb: 3 }}>
                    About
                </Typography>
                <h1 className="primary-heading">
                    Sometimes Internet isn't Safe
                </h1>
                <p className="primary-text">
                    We are sorrounded by the internet, and it has become an integral part of our daily lives.
                    But with the convenience it brings, there are also risks that we need to be aware of.
                </p>
                <p className="primary-text">
                    That's why KeepSafe is here to help you navigate the digital world safely and securely.
                </p>
            </div>
        </div>
    );
};

export default About;