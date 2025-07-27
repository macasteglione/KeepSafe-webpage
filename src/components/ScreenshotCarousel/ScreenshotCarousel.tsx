import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import screenshot1 from "../../assets/screenshot1.jpeg";
import screenshot2 from "../../assets/screenshot2.jpeg";
import screenshot3 from "../../assets/screenshot3.jpeg";
import screenshot4 from "../../assets/screenshot4.jpeg";
import screenshot5 from "../../assets/screenshot5.jpeg";
import AboutBackground from "../../assets/about-background2.png";

import "./screenshotCarousel.css";

const ScreenshotCarousel = () => {
    const screenshots = [
        screenshot1,
        screenshot2,
        screenshot3,
        screenshot4,
        screenshot5,
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <Box id="screenshots" className="carousel-container">
            <Typography className="primary-subheading" sx={{ mb: 3 }} variant="h4">
                Screenshots
            </Typography>

            <Slider {...settings}>
                {screenshots.map((src, index) => (
                    <Box key={index} className="carousel-slide">
                        <img
                            src={src}
                            alt={`Screenshot ${index + 1}`}
                            className="carousel-image"
                        />
                    </Box>
                ))}
            </Slider>
            <div className="home-bannerImage-container">
                <img src={AboutBackground} />
            </div>
        </Box>
    );
};

export default ScreenshotCarousel;
