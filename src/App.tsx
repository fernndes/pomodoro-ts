import React, { useEffect } from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
    useEffect(() => {
        document.title = 'Pomodoro TS';
    }, []);
    return (
        <div className="container">
            <PomodoroTimer
                defaultPomodoroTime={1500}
                shortRestTime={300}
                longRestTime={900}
                cycles={4}
            />
        </div>
    );
}

export default App;
