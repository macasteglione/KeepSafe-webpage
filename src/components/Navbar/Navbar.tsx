import { useState, useEffect } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhotoIcon from "@mui/icons-material/Photo";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import GitHubIcon from '@mui/icons-material/GitHub';

import "./navbar.css";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const menuOptions = [
        { text: "Screenshots", icon: <PhotoIcon /> },
        { text: "Setup", icon: <BuildIcon /> },
        { text: "About", icon: <InfoIcon /> },
        { text: "FAQ", icon: <QuizIcon /> },
        { text: "GitHub", icon: <GitHubIcon />, href: "https://github.com/macasteglione/KeepSafe" },
    ];

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY < 50) {
                setShowNavbar(true);
            } else if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
            }}
        >
            <div className="nav-logo-container">
                <a href="#"><h1 className="navbar-logo-container">KeepSafe</h1></a>
            </div>
            <div className="navbar-links-container">
                <a href="#about">About</a>
                <a href="#setup">Setup</a>
                <a href="#screenshots">Screenshots</a>
                <a href="#faq">FAQ</a>
                <a href="https://github.com/macasteglione/KeepSafe" target="_blank">GitHub</a>
            </div>
            <div className="navbar-menu-container" onClick={() => setOpenMenu(true)}>
                <HiOutlineBars3 />
            </div>

            <Drawer
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                anchor="right"
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    component="a"
                                    href={item.href ? item.href : `#${item.text.toLowerCase()}`}
                                    target={item.href ? "_blank" : undefined}
                                    rel={item.href ? "noopener noreferrer" : undefined}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
