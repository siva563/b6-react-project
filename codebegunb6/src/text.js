import React from "react";
import bootstrap from "bootstrap";
function Text() {
    return (
        <div className="container mt-4">
            <form>
                <h1>Enter Text Below</h1>
                <input
                    type="text"
                    id="myTextBox"
                    className="form-control"
                    placeholder="Enter text here"
                />
            </form>
        </div>
    );
}

export default Text;
