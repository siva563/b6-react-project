import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Chandu_form () {
    return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Student</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Biographical Statement</label>
          <textarea
            className="form-control"
            id="bio"
            rows="3"
            placeholder="A bit about you"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Hobbies:</label>
          <div className="mb-5">
          <input type="Checkbox" name="Running" id="Running"/>Running
          <input type="Checkbox" name="Cricket" id="Cricket"/>Cricket
          <input type="Checkbox" name="Surfing" id="Surfing"/>Surfing
          <input type="Checkbox" name="Paddling" id="Paddling"/>Paddling
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Major:</label>
          <div className="mb-5">
          <input type="radio" name="Physics"/>Physics
          <input type="radio" name="Maths" />Maths
          <input type="radio" name="Chemistry" />Chemistry
          <input type="radio" name="Computer Science"/>Computer Science
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="level" className="form-label">Level</label>
            <select
              className="form-select"
              id="level"
              required
            >
              <option value="">Select level</option>
              <option value="Freshman">Freshman</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="gpa" className="form-label">GPA</label>
            <input
              type="number"
              className="form-control"
              id="gpa"
              placeholder="GPA"
              step="0.1"
              min="0"
              max="4"
              required
            />
          </div>

          <div className="col-md-4">
            <label For="dateEnrolled" className="form-label">Date Enrolled</label>
            <input
              type="date"
              className="form-control"
              id="dateEnrolled"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chandu_form;
