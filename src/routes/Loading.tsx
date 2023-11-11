import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  Letter  from '../components/Letter';
function Loading() {
    const navigate = useNavigate();
    useEffect(() => {
        
        const timer = setTimeout(() => {
            const matrix = document.querySelector('.matrix');
            const makeMatrix = () => {
                const number = Math.floor(Math.random() * 2); // random 0 or 1
                const span = document.createElement('span');
                span.textContent = number.toString();
                span.style.left = Math.random() * window.innerWidth + 'px';
                span.style.animationDuration = Math.random() * 2 + 1 + 's'; // random duration
                matrix?.appendChild(span);
    
                // remove the span after the animation is over to prevent div from getting too large
                setTimeout(() => {
                    if(matrix?.children)matrix?.removeChild(span);
                }, 1500);
    
            };
            const intervalId = setInterval(makeMatrix, 1); // create a new number every 100ms
            setTimeout(() => {
                clearInterval(intervalId);
                setTimeout(() => {
                    navigate('/home');
                }, 2500);
            }, 500);
        }, 3000);
        return () => clearTimeout(timer);
    },[]);
    return (
        <>
            <div className='center divstyled'>
                <div className="matrix divstyled"></div>
                <div id="loading">
                    {"LOADING".split('').map((_, index) => (
                        <Letter key={index} letterIndex={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Loading;