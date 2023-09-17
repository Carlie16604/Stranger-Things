import { useState } from 'react'

function buttonBlocker() {
    const [stop, setStop] = useState;
    const handler = (e) => {
        setStop(e.target.value);
    };

    return (
        <div>
            <input 
            type="text"
            placeholder="username"
            value={stop}
            onChange={setStop}
            />
            <button disabled={stop.trim() === ''}></button>
        </div>
    )
}

export default buttonBlocker