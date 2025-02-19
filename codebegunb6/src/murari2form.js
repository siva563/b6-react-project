import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function murari2form() {
    return (

        <div className="container mt-5">
            <h1>Create Student</h1>

            <div className="border p-3" style={{ height: "450px" }}>

                {/* Row for Name and Email */}
                <div className="row align-items-end">

                    {/* Name Field */}
                    <div className="col-md-6">
                        <label className="form-label" style={{ float: "left" }}>Name</label>
                        <input type="text" className="form-control" placeholder="Your name" />
                    </div>

                    {/* Email Field */}
                    <div className="col-md-6">
                        <label className="form-label" style={{ float: "left" }}>Email</label>
                        <input type="email" className="form-control" placeholder="Your name" />
                    </div>

                    <div className="col-md-12 ">
                        <label className="form-label" style={{ float: "left" }}>Biographical Statement</label>
                        <input type="text" className="form-control " placeholder="A bit about you" style={{ height: "80px", width: "100%" }} />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label" style={{ float: "left" }}>Level</label>
                        <input type="text" className="form-control " placeholder="level" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label" style={{ float: "left" }}>GPA</label>
                        <input type="text" className="form-control " placeholder="GPA" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label" style={{ float: "left" }}>Date Erolled</label>
                        <input type="date" className="form-control " />
                    </div>
                    <div>
                        <label style={{ float: "left" }}>Hobbies</label><br />
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="checkbox" id="surfing" name="hobbies" value="surfing" />
                            <label htmlFor="surfing" style={{ marginLeft: "5px" }}>Surfing</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="checkbox" id="running" name="hobbies" value="running" />
                            <label htmlFor="running" style={{ marginLeft: "5px" }}>Running</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="checkbox" id="biking" name="hobbies" value="biking" />
                            <label htmlFor="biking" style={{ marginLeft: "5px" }}>Biking</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="checkbox" id="paddling" name="hobbies" value="paddling" />
                            <label htmlFor="paddling" style={{ marginLeft: "5px" }}>Paddling</label>

                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <p style={{ color: "gray" }}> (optional)</p>
                        </div>
                    </div>
                    <div>
                        <label style={{ float: "left" }}>Major</label><br />
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="radio" id="Physics" name="Major" value="Physics" />
                            <label htmlFor="Physics" style={{ marginLeft: "5px" }}>Physics</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="radio" id="Math" name="Major" value="Math" />
                            <label htmlFor="Math" style={{ marginLeft: "5px" }}>Math</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="radio" id="Chemistry" name="Major" value="Chemistry" />
                            <label htmlFor="Chemistry" style={{ marginLeft: "5px" }}>Chemistry</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <input type="radio" id="Computer" name="Major" value="Computer" />
                            <label htmlFor="Computer" style={{ marginLeft: "5px" }}>Computer Science</label>
                        </div>
                        <div className="col-md-2" style={{ float: "left" }}>
                            <p style={{ color: "red" }}> (required)</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>


                </div>

            </div>
        </div>

    );
}

export default murari2form;