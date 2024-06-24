import React, { useState, useEffect } from "react";
import './ContentContainerStyle.css';
import { motion } from "framer-motion";

function Container({ children, heading, variantType }) {
    const [homeSwitch, setHomeSwitch] = useState(true);

    useEffect(() => {
        setHomeSwitch(variantType === 'home');
    }, [variantType]);
    
    const variants = {
        home: {
            initial: homeSwitch ? { y: 220 } : { y: 175, opacity: 0 },
            in: homeSwitch ? { y: 120, opacity: 1 } : { y: 120, opacity: 1 },
            out: homeSwitch ? { y: 100, opacity: 0 } : { y: 100, opacity: 0 },
            transition: { duration: 0.2 } 
        },
        downToUp: {
            initial: { y: -50, opacity: 0 },
            in: { y: 0, opacity: 1 },
            out: { y: 50, opacity: 0 },
            transition: { duration: 0.5 } 
        },
        upToDown: {
            initial: { y: 50, opacity: 0 },
            in: { y: 0, opacity: 1 },
            out: { y: -50, opacity: 0 },
            transition: { duration: 0.5 }
        },
    };

    const selectedVariant = variants[variantType] || variants.home;

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={selectedVariant}
            transition={selectedVariant.transition}
            className="container"
        >
            {heading && (
                <div className="heading">
                    {heading}
                </div>
            )}
            {children}
        </motion.div>
    );
}

export default Container;
