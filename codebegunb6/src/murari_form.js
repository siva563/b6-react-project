import React from 'react';

function MurariForm() {
    return (
        <form>
            <div style={{ border: "1px solid black", padding: "10px" }}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <br />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" />

                <br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <br />

                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default MurariForm;
