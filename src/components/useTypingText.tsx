import React, { useState, useEffect, useRef } from "react";

const FORWARD = "forward";
const BACKWARD = "backward";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/a-typing-text-effect-with-react-hooks
 */
export const useTypingText = (words: string[], keySpeed = 1000, maxPauseAmount = 10) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState<string[]>([]);
    const [isStopped, setIsStopped] = useState(false);

    const direction = useRef<"forward" | "backward">(FORWARD);
    const typingInterval = useRef<ReturnType<typeof setInterval> | null>(null);
    const letterIndex = useRef(0);

    const stop = () => {
        if (typingInterval.current) {
            clearInterval(typingInterval.current);
        }
        setIsStopped(true);
    };

    useEffect(() => {
        let pauseCounter = 0;

        if (isStopped) return;

        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = BACKWARD;
                pauseCounter = maxPauseAmount;
                return;
            }

            const nextLetter = words[wordIndex][letterIndex.current];
            setCurrentWord((prev) => [...prev, nextLetter]);
            letterIndex.current += 1;
        };

        const backspace = () => {
            if (letterIndex.current === 0) {
                const nextWordIndex = wordIndex === words.length - 1 ? 0 : wordIndex + 1;
                setWordIndex(nextWordIndex);
                direction.current = FORWARD;
                return;
            }

            setCurrentWord((prev) => prev.slice(0, -1));
            letterIndex.current -= 1;
        };

        typingInterval.current = setInterval(() => {
            if (pauseCounter > 0) {
                pauseCounter -= 1;
                return;
            }

            if (direction.current === FORWARD) {
                typeLetter();
            } else {
                backspace();
            }
        }, keySpeed);

        return () => {
            if (typingInterval.current) {
                clearInterval(typingInterval.current);
            }
        };
    }, [wordIndex, isStopped, keySpeed, maxPauseAmount, words]);

    return {
        word: (
            <span className={`word ${currentWord.length ? "full" : "empty"}`}>
                {currentWord.length ? currentWord.join("") : "0"}
            </span>
        ),
        start: () => setIsStopped(false),
        stop,
    };
};
