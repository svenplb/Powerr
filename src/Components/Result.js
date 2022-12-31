
const Result = (props) => {
    const { correctWords, startCounting, totalWords, timeElapsed, testFinished, setTestFinished} = props;
    const minutes = timeElapsed / 60;
    return(
        <div className=" bg-neutral-900 p-20 rounded-xl shadow-xl shadow-zinc-900">
            <p>Speed: {Math.round(correctWords / minutes || 0)} WPM</p>
            <p>acc: {100 - ((totalWords.length - correctWords)/(totalWords.length/100))}%</p>
            <p>raw wpm: {Math.round(totalWords.length / minutes || 0)}</p>
        </div>
    )
}

export default Result;