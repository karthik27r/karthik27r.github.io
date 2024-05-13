import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useMotionTemplate, motion } from "framer-motion";

import { cn } from "../../utils/cn.ts";

const SplashScreen = ({
    text,
    className,
    showSplash, }) => {
    const [randomString, setRandomString] = useState("");
    const controls = useAnimation();

    useEffect(() => {
        if (showSplash) {
            controls.start({ x: "100%" });
        } else {
            controls.stop(); 
        }

        let str = generateRandomString(25000);
        setRandomString(str);
    }, [showSplash]);
    return (
        <div
            className={cn(
                "p-0.5 bg-transparent flex items-center justify-center w-full h-full absolute",
                className
            )}
        >
            <motion.div
                animate={controls}
                transition={{ type: "tween", duration: 2 }} // Adjust duration as needed
                className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
            >
                <CardPattern randomString={randomString} />
                <div className="relative z-10 flex items-center justify-center">
                    <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                        <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
                        <span className="dark:text-white text-black z-20">{text}</span>
                    </div>
                </div>
            </motion.div>
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

const CardPattern = ({ randomString }) => {
    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-800 to-blue-900 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
            />
            <motion.div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100">
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
};

