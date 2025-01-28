import React from 'react';
function Murali_form(){
    return (
    <div>
        <h5>Fill this form</h5>
        <form>
            <label>FirstName
                <input type='text'placeholder='firstName'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}/>
            </label>
            <label>LastName
                <input type='text'placeholder='lastname'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}/>
            </label>
            <label>Email
                <input type='text'placeholder='lastname'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}/>
            </label>
            <label>Address
                <textarea placeholder='lastname'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}></textarea>
            </label>
            <label>Gender
                <input type='radio' name='gender' value="Male"/>Male
            </label>
            <br/>
            <label>
                <input type='radio' name='gender' value="FeMale"/>FeMale
            </label><br/>
            <label for="dropdown">Age:</label>
  <select id="dropdown" name="dropdown">
    <option value="option1">1-10</option>
    <option value="option2">11-20</option>
    <option value="option3">21-30</option>
  </select>
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
            
        </form>
    </div>
    );
}
export default Murali_form;
