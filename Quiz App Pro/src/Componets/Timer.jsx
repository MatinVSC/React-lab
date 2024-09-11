import { useEffect } from "react"


export default function Timer ({onDispatch, SecondsRemaining}) {

    const mins = Math.floor(SecondsRemaining / 60);
    const seconds = SecondsRemaining % 60;

    useEffect( () => {
       const time = setInterval( () => {
            onDispatch({type: 'tick'})
        }, 1000);

        return () => clearInterval(time);

    }, [onDispatch]);

    return (
        <div className="timer">
            {mins < 10 && '0'}{mins}:{seconds}
        </div>
    )
};