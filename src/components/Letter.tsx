import { useEffect, useState } from 'react';


function Letter({ letterIndex }:{ letterIndex: number}){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');
    const targetWord = "LOADING";
    const [letter, setLetter] = useState(' ');
    const correctLetter = targetWord[letterIndex];
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        let writeTimeout: number | undefined;

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
    }, [animate, correctLetter, alphabet]);

    // Trigger the random letter animation after a delay based on the letter's index
    useEffect(() => {
        const delay = (letterIndex + 1) * 300;
        const timer = setTimeout(() => {
            setAnimate(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [letterIndex]);

    return (
        <span id={letterIndex.toString()} className={`letter ${letter === correctLetter ? 'glow' : ''}`}>{letter}</span>
    );
}
export default Letter;