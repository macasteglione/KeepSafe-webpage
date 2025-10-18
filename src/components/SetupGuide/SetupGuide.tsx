import { Typography } from "@mui/material";
import SetupImage from "../../assets/give_permission1.png";

import "./setupGuide.css";

const SetupGuide = () => {
    return (
        <div className="setup-section-container" id="setup">
            <div className="setup-section-text-container">
                <Typography className="primary-subheading" variant="h4" sx={{ mb: 3 }}>
                    Setup
                </Typography>
                <h1 className="primary-heading">How to install KeepSafe</h1>
                <p className="primary-text">
                    KeepSafe is distributed as a <strong>APK</strong> file. To install it, first download it and then enable <em>Unknown sources</em> on your device.
                </p>
                <p className="primary-text">
                    Follow these steps to complete the installation:
                </p>

                <ul className="setup-steps-list">
                    <li>1. Download the APK from the start button.</li>
                    <li>2. Enable "Install apps from unknown sources" in Settings.</li>
                    <li>3. Open the downloaded APK file.</li>
                    <li>4. Complete the installation and open KeepSafe.</li>
                </ul>

                <div className="setup-buttons-container">
                    <a href="https://github.com/macasteglione/KeepSafe/releases/latest/download/KeepSafe.apk" className="secondary-button" download>
                        Download APK
                    </a>
                </div>
            </div>
            <div className="setup-section-image-container">
                <img src={SetupImage} alt="Setup Illustration" />
            </div>
        </div>
    );
};

export default SetupGuide;