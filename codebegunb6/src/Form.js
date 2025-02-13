import React, { useState } from 'react';

function StaticForm() {
    const [FormData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        date: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };

    const handleSubmit = (e) => {
        alert("hello");
        e.preventDefault();
        console.log(FormData);
        localStorage.setItem("myFormData", JSON.stringify(FormData)); // Fixed typo
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Firstname</label>
                <input type="text" placeholder="firstname" name="firstname" value={FormData.firstname} onChange={handleInput} />
            </div>
            <div>
                <label>Lastname</label>
                <input type="text" placeholder="lastname" name="lastname" value={FormData.lastname} onChange={handleInput} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="email" name="email" value={FormData.email} onChange={handleInput} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" name="date" value={FormData.date} onChange={handleInput} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default StaticForm;
