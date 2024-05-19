import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.ts";
import { Snippets } from "./DummyCode.js";

const fonts = [
    "Abnes",
    "Agoka",
    "AnandaBlack",
    "Andmorey",
    "AnkhSanctuary",
    "BlackJaguar",
    "CoffeeHealing",
    "CreamySugar",
    "Emotions",
    "HFLacrimosa",
    "MonainnRegular",
    "Queensides",
    "Sequences",
    "Supercharge",
    "Tostada",
    "Vodan",
    "Wolfgang",
    "Xenosphere"
];

const SplashScreen = ({ text, className, showSplash, onFontChange }) => {
    const [randomString, setRandomString] = useState("");
    const [randomFont, setRandomFont] = useState("");

    const [itr, setItr] = useState(0);

    useEffect(() => {
        let intervalId;

        if (showSplash) {
            intervalId = setInterval(() => {
                let str = generateRandomString(25000);
                setItr(prevItr => prevItr + 250);
                console.log('itr ' + itr);
                setRandomString(str);
                let font = fonts[Math.floor(Math.random() * fonts.length)];
                if (itr < 3500) {
                    setRandomFont(font);
                    onFontChange(font);
                }
            }, 250);
        }

        return () => {
            clearInterval(intervalId);
            if (itr > 4500) {
                onFontChange(randomFont);
            }
        };
    }, [showSplash, itr, onFontChange]);

    return (
        <div
            className={cn(
                "p-0.5 bg-black flex items-center justify-center w-full h-full absolute overflow-hidden",
                className
            )}
            // style={{ fontFamily: randomFont }}
        >
            <CardPattern randomString={randomString} showSplash={showSplash} />
            <motion.h1
                className="main-title"
                style={{ fontFamily: randomFont }}
                initial={{ letterSpacing: "1em" }}
                animate={{ letterSpacing: "normal" }}
                transition={{ duration: 5 }}
            >
                {text}
            </motion.h1>
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
                    "linear-gradient(to right, rgb(13, 10, 28), rgba(13, 10, 28, 0))",
                    "linear-gradient(to right, rgb(13, 10, 28), rgb(13, 10, 28, 1))",
                ],
                transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
            });
        } else {
            controls.stop();
        }
    }, [showSplash, controls]);

    return (
        <div className="pointer-events-none relative w-full h-full">
            <motion.div className="absolute inset-0 rounded-2xl transition duration-500" animate={controls} />
            <motion.div className="absolute inset-0 rounded-2xl mix-blend-overlay transition duration-500">
                <p className="absolute inset-x-0 text-xs h-full text-white font-mono font-bold">{randomString}</p>
            </motion.div>
        </div>
    );
};