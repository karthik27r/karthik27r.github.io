import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn.ts";

export const FlipTextEffect = ({ words, duration = 5000, className }) => {
    const [currentPhrase, setCurrentPhrase] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = useCallback(() => {
        const nextPhrase = words[words.indexOf(currentPhrase) + 1] || words[0];
        setCurrentPhrase(nextPhrase);
        setIsAnimating(true);
    }, [currentPhrase, words]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: 0,
                    x: 40,
                    scale: 1.25,
                    width: 100,
                    filter: "blur(10px)",
                    position: "absolute"
                }}
                className={cn(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
                key={currentPhrase}
            >
                {currentPhrase.split(' ').map((word, wordIndex, wordsArray) => (
                    <React.Fragment key={wordIndex}>
                        {word.split('').map((char, charIndex) => (
                            <motion.span
                                key={`${wordIndex}-${charIndex}`}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: (wordIndex * (word.length + 1) + charIndex) * 0.08,
                                    duration: 0.4,
                                }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wordIndex < wordsArray.length - 1 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: (wordIndex + 1) * (word.length + 1) * 0.08 - 0.08,
                                    duration: 0.4,
                                }}
                                className="inline-block"
                                style={{ marginRight: '0.25em' }} 
                            >
                                &nbsp;
                            </motion.span>
                        )}
                    </React.Fragment>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};