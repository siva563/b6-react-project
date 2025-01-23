import React, { useState } from "react";

function Radio() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h1>Select an Option</h1>
            <label>
                <input
                    type="radio"
                    value="Option 1"
                    checked={selectedOption === "Option 1"}
                    onChange={handleChange}
                />
                Option 1
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Option 2"
                    checked={selectedOption === "Option 2"}
                    onChange={handleChange}
                />
                Option 2
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Option 3"
                    checked={selectedOption === "Option 3"}
                    onChange={handleChange}
                />
                Option 3
            </label>
            <br />
            <p>You selected: {selectedOption}</p>
        </div>
    );
}

export default Radio;