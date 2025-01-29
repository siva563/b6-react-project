import React from 'react';

function Designtask() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{textalign:"center"}}>Create Student</h1>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
       
        <div style={{ gridColumn: "span 1" }}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: "8px", width: "100%" }}
          />
        </div>
        <div style={{ gridColumn: "span 1" }}>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            placeholder="Email"
            style={{ padding: "8px", width: "100%" }}
          />
        </div>

        <div style={{ gridColumn: "span 2" }}>
          <label htmlFor="Bio" style={{margin:left}}>Biographical Statement</label>
          <textarea
            placeholder="A bit about you"
            style={{
              padding: "8px",
              width: "100%",
              resize: "vertical",
            }}
          ></textarea>
        </div>

        
        <div style={{ gridColumn: "span 2" }}>
          <label>Details</label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", 
              gap: "15px", 
            }}
          >
            <div>
              <label htmlFor="Level">Level</label>
              <input
                type="text"
                placeholder="Domain"
                style={{ padding: "8px", width: "100%" }}
              />
            </div>
            <div>
              <label htmlFor="GPA">GPA</label>
              <input
                type="text"
                placeholder="%"
                style={{ padding: "8px", width: "100%" }}
              />
            </div>
            <div>
              <label htmlFor="Date">Date</label>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                style={{ padding: "8px", width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div style={{ gridColumn: "span 2" }}>
          <label htmlFor="Hobbies">Hobbies: </label>
            <input type="checkbox" name="Hobbies" value="surfing" /> Surfing
            <input type="checkbox" name="Hobbies" value="Running" /> Running
            <input type="checkbox" name="Hobbies" value="Biking" /> Biking
            <input type="checkbox" name="Hobbies" value="Padding" /> Padding
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <label htmlFor="Major">Major:</label>
            <input type="radio" name="Major" value="Physics" /> Physics
            <input type="radio" name="Major" value="Math" /> Math
            <input type="radio" name="Major" value="Chemistry" /> Chemistry
            <input type="radio" name="Major" value="Computers" /> Computers
        </div>
        <div style={{ gridColumn: "span 2" }}>
          <button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Designtask;
