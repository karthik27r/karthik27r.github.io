import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.ts";


const SplashScreen = ({ text, className, showSplash }) => {
    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(25000);
        setRandomString(str);
    }, [showSplash]);

    return (
        <div
            className={cn(
                "p-0.5 bg-black flex items-center justify-center w-full h-full absolute overflow-hidden",
                className
            )}
        >
            <CardPattern randomString={randomString} showSplash={showSplash} />
        </div>
    );
};

export default SplashScreen;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const CardPattern = ({ randomString, showSplash }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (showSplash) {
            controls.start({
                // backgroundPosition: ["10% 10%", "90% 90%"],
                backgroundImage: [
                    'radial-gradient(circle at 50% 50%, rgb(13, 10, 28) 1%, rgba(128, 0, 128, 0) 20%)',
                    'radial-gradient(circle at 50% 50%, rgb(13, 10, 28) 90%, rgba(128, 0, 128, 0) 100%)',
                ],
                // backgroundSize: ['200%','200%'],
                transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
            });
        } else {
            controls.stop();
        }
    }, [showSplash, controls]);

    return (
        <div className="pointer-events-none relative w-full h-full">
            <motion.div
                className="absolute inset-0 rounded-2xl transition duration-500"
                animate={controls}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl mix-blend-overlay transition duration-500"
            >
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
};
