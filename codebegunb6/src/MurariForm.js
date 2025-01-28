import React from "react";

function MurariForm() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form>
                <div className="border p-4 rounded" style={{ maxWidth: "500px" }}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                        />
                    </div>

                    {/* Date of Birth Field */}
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">
                            Date of Birth:
                        </label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            className="form-control"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                        />
                    </div>

                    {/* Checkbox Field */}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="form-check-input"
                        />
                        <label htmlFor="terms" className="form-check-label">
                            I agree to the terms and conditions
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MurariForm;
