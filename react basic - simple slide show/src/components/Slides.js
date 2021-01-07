import React, { useEffect, useState } from 'react';

function Slides({slides}) {
    const [slideState, setSlideState] = useState(slides[0]);
    const [resetButtonClasses, setResetButtonClasses] = useState("");
    const [slideIndex, setSlideIndex] = useState(0);
    
    const reset = () => {
        setSlideState(slides[0]);
        setResetButtonClasses("disabled");
    }
    const next = () => {
        setResetButtonClasses("");
        let index = slideIndex;
        ++index;
        if(index === slides.length) {
            index = 0;
            setResetButtonClasses("disabled");
        }

        setSlideIndex(index);
        setSlideState(slides[index]);
    }
    const prev = () => {
        setResetButtonClasses("");
        let index = slideIndex;
        --index;
        if(index === -1) {
            index = slides.length - 1;
        }
        else if(index === 0) {
            setResetButtonClasses("disabled");
        }
        
        setSlideIndex(index);
        setSlideState(slides[index]);

        console.log(index)
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className={"small outlined " + resetButtonClasses} onClick={reset}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={prev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slideState.title}</h1>
                <p data-testid="text">{slideState.text}</p>
            </div>
        </div>
    );

}

export default Slides;
