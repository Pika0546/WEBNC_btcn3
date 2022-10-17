import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';

const ScrollToTop = () => {
    const [isDisplay, setIsDisplay] = useState(false);
    const handleScrollTop = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setIsDisplay(true);
        }
        else {
            setIsDisplay(false);
        }
    }

    const scrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScrollTop)
        return () => {
            document.removeEventListener("scroll", handleScrollTop);
        }
    }, []);
    return (
        <Fade
            in={isDisplay}
        >
            <IconButton
                onClick={scrollTop}
                sx={{
                    position: 'fixed',
                    bottom: "1rem",
                    right: "1rem",
                    zIndex: 10,
                    background: "#1976d2",
                    "&:hover":{
                        background: "#1565c0"
                    }
                }}

            >
                <ExpandLessIcon sx={{color: "white"}}></ExpandLessIcon>
            </IconButton>
        </Fade>

    )
}

export default ScrollToTop