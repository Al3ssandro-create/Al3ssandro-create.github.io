import React, { useEffect, useState } from 'react';
const Letter = ({ letterIndex }) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');
    const targetWord = "LOADING";
    const [letter, setLetter] = useState(' ');
    const correctLetter = targetWord[letterIndex];
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        let writeTimeout;

        // If the animation has started for this letter, begin the random letter display
        const write = () => {
            const c = Math.floor(Math.random() * alphabet.length);
            setLetter(alphabet[c]);
            writeTimeout = setTimeout(write, 75);
        };
        write();

        // When the animation is triggered, stop the random display and set the correct letter
        if (animate) {
            clearTimeout(writeTimeout);
            setLetter(correctLetter);
        }

        return () => clearTimeout(writeTimeout);
    }, [animate, correctLetter]);

    // Trigger the random letter animation after a delay based on the letter's index
    useEffect(() => {
        const delay = (letterIndex + 1) * 500;
        const timer = setTimeout(() => {
            setAnimate(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [letterIndex]);

    return (
        <span id={letterIndex} className={`letter ${letter === correctLetter ? 'glow' : ''}`}>{letter}</span>
    );
};
export default Letter;