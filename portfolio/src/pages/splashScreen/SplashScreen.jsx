import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.ts";

import { Snippets } from "./DummyCode.js";

const SplashScreen = ({ text, className, showSplash }) => {
    const [randomString, setRandomString] = useState("");

    let itr = 250;
    useEffect(() => {
        if (showSplash) {
            let intervalId = setInterval(() => {
                let str = generateRandomString(25000);
                setRandomString(str);
            }, itr);

            let initialStr = generateRandomString(25000);
            setRandomString(initialStr);

            return () => clearInterval(intervalId);
        }
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

export const generateRandomString = (length) => {
    let result = "";
    while (result.length < length) {
        const randomSnippet = Snippets[Math.floor(Math.random() * Snippets.length)].Snippet;
        result += randomSnippet + " ";
    }
    return result.slice(0, length);
};

const CardPattern = ({ randomString, showSplash }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (showSplash) {
            controls.start({
                backgroundImage: [
                    'linear-gradient(to right, rgb(13, 10, 28), rgba(13, 10, 28, 0))',
                    'linear-gradient(to right, rgb(13, 10, 28), rgb(13, 10, 28, 1))',
                ],
                // backgroundPosition: ["10% 10%", "90% 90%"],
                // backgroundSize: ['200%','200%'],
                // backgroundImage: [
                //     'radial-gradient(circle at 50% 50%, rgb(13, 10, 28) 1%, rgba(128, 0, 128, 0) 20%)',
                //     'radial-gradient(circle at 50% 50%, rgb(13, 10, 28) 90%, rgba(128, 0, 128, 0) 100%)',
                // ],
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
                className="absolute inset-0 rounded-2xl transition duration-500"
            >
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-yellow-500 font-mono font-bold">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
};
