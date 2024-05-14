import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn.ts";

const SplashScreen = ({
    text,
    className,
    showSplash,
}) => {
    const [randomString, setRandomString] = useState("");
    useEffect(() => {
        let str = generateRandomString(25000);
        setRandomString(str);
    }, [showSplash]);

    return (
        <div
            className={cn(
                "p-0.5 bg-transparent flex items-center justify-center w-full h-full absolute overflow-hidden ",
                className
            )}
        >
                        {/* <div className="relative z-10 flex items-center justify-center">
                <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                    <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
                    <span className="dark:text-white text-black z-20">{text}</span>
                </div>
            </div> */}
            <CardPattern randomString={randomString} showSplash={showSplash} />
        </div>
    );
};

export default SplashScreen;

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const CardPattern = ({ randomString, showSplash }) => {
    return (
        <div className="pointer-events-none relative w-full h-full">
            <motion.div
                className={`absolute inset-0 rounded-2xl opacity-0 transition duration-500`}
                initial={{
                    background: 'radial-gradient(circle at top left, rgba(128, 0, 128, 1), rgba(128, 0, 128, 0))',
                }}
                animate={{
                    opacity: showSplash ? 1 : 0,
                    backgroundImage: showSplash ? 'radial-gradient(circle at bottom right, rgba(128, 0, 128, 1), rgba(128, 0, 128, 0))' : 'none',
                }}
                transition={{ type: "tween", duration: 5 }}
            />
            <motion.div className={`absolute inset-0 rounded-2xl mix-blend-overlay opacity-100 transition duration-500`}>
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
};
