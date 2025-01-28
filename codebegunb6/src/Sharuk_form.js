import React from 'react';

function Sharuk_form() {
  return (
    <div style={{padding:"20px",margin:"auto",maxWidth:"400px",backgroundColor:"pink"}}>
      <h1 style={{textAlign:"center"}}>Fill Your Form</h1>
      <form>
        <label>First-Name</label>
        <input type='text'placeholder='First Name' style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}} />
        <label>Last-Name</label>
        <input type='text'placeholder='Last-Name'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}/>
        <label>E-mail</label>
        <input type='text'placeholder='E-mail'style={{padding:"8px",margin:"10px 0", display:"block",width:"100%"}}/>
        <label>PhoneNumber</label>
        <input type='text'placeholder='Phone-Number'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}/>
        <label>Address</label>
        <textarea placeholder='Address'style={{padding:"8px",margin:"10px 0",display:"block",width:"100%"}}></textarea>
        <br/>
        <label>
        <input type='radio' name='Gender' value="male"/> male
        </label>
        <br/>
        <label>
        <input type='radio' name='Gender' value="Female"/> Female
        </label>
        <br/>
        <label>
        <input type='radio' name='Gender' value="others"/> others
        </label>
        <br/>
        <label>
        <input type='checkbox' name='sports' value="Cricket"/> Cricket
        </label>
        <label>
          <input type='checkbox'name='sports' value="Kabadi"/> Kabadi
        </label>
        <label>
          <input type='checkbox' name='sports' value="volleyball"/>volleyball
        </label>
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
  )
}
export default Sharuk_form
