import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Chandu_form() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Student</h2>
      <div className="border p-4 rounded">
        <form>
          <div className="row mb-3">
            <div className="col-md-12">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" required />
            </div>
            <div className="col-md-12 mt-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your email" required/>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="bio" className="form-label">Biographical Statement</label>
            <textarea className="form-control" id="bio" rows="3" placeholder="A bit about you"></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Hobbies:</label>
            <div className="mb-2">
              <input type="checkbox" id="Running" /> Running
              <input type="checkbox" id="Cricket" className="ms-2" /> Cricket
              <input type="checkbox" id="Surfing" className="ms-2" /> Surfing
              <input type="checkbox" id="Paddling" className="ms-2" /> Paddling
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Major:</label>
            <div className="mb-2">
              <input type="radio" name="major" id="Physics" /> Physics
              <input type="radio" name="major" id="Maths" className="ms-2" /> Maths
              <input type="radio" name="major" id="Chemistry" className="ms-2" /> Chemistry
              <input type="radio" name="major" id="ComputerScience" className="ms-2" /> Computer Science
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="level" className="form-label">Level</label>
              <select className="form-select" id="level" required>
                <option value="">Select level</option>
                <option value="Freshman">Freshman</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="gpa" className="form-label">GPA</label>
              <input type="number" className="form-control" id="gpa" placeholder="GPA" required/>
            </div>

            <div className="col-md-4">
              <label htmlFor="dateEnrolled" className="form-label">Date Enrolled</label>
              <input type="date" className="form-control" id="dateEnrolled" required />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chandu_form;
