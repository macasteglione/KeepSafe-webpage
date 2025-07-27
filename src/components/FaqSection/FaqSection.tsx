import { useState } from "react";
import { Typography } from "@mui/material";

import "./faqSection.css";

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Is KeepSafe free?",
            answer:
                "Yes! KeepSafe is completely free to use. We believe in providing a experience without any cost."
        },
        {
            question: "How do I install KeepSafe?",
            answer:
                "Just download the APK from our website and follow the installation instructions. It's quick and easy!"
        },
        {
            question: "Is this app compatible with my device?",
            answer:
                "KeepSafe is currently optimized for Android devices. We are working on versions for other platforms."
        },
        {
            question: "Is this app secure?",
            answer:
                "Absolutely! All the code is open source, so you can verify its security yourself."
        },
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section-container" id="faq">
            <div className="faq-content">
                <Typography className="primary-subheading" sx={{ mb: 3 }} variant="h4">
                    FAQ
                </Typography>
                <h1 className="faq-primary-heading">Frequently Asked Questions</h1>
                <p className="faq-primary-text">
                    Here we answer the most common questions about KeepSafe.
                </p>

                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                {item.question}
                                <span className="faq-toggle">{activeIndex === index ? "−" : "+"}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
