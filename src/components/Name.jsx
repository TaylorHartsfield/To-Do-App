import { useState } from 'react';

export default function Name({ updateName }) {

    const [name, setName] = useState('')
    const [checkedIn, setCheckedIn] = useState(false)

    function handleOnChange(e) {
        setName(e.target.value)
    }
    function handleNameWrapper() {
        setCheckedIn(true)
        updateName(name)
    }

    if (!checkedIn) {
        return (
            <div>
                <input
                    type="text"
                    placeholder="What should we call you?"
                    onChange={handleOnChange}
                    value={name}
                />
                <button type="button" onClick={handleNameWrapper}>That's me!</button>
            </div>

        )
    } else {
        return
    }
}