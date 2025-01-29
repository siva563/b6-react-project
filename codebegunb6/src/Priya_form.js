import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Priya_form(){
    return(
      <div className="container mt-5">
      <h1>Create Student</h1>

      <div className="border p-3" style={{ height: "500px" }}>

          
          <div className="row align-items-end">

  <div class="col-md-5">
    <label for="input" class="form-label" style={{ float: "left" }}>Name</label>
    <input type="text" class="form-control" id="name" placeholder="Yourname" />
  </div>
  <div class="col-md-5">
    <label for="inputPassword4" class="form-label" style={{ float: "left" }}>email</label>
    <input type="email" class="form-control" id="email" placeholder="your mail"/>
  </div>
  <div className="col-md-12 ">
                        <label className="form-label" style={{ float: "left" }}>Biographical Statement</label>
                        <input type="text" className="form-control " placeholder="A bit about you" style={{ height: "80px", width: "100%" }} />
                    </div>

       <br/>
<div class="col-md-4">
    <label for="inputState" class="form-label" style={{ float: "left" }}>Level</label>
    <select id="inputState" class="form-select">
      <option selected>Level</option>
      <option>Fresher</option>
      <option>Experience </option>
    </select>
  </div>
  <div class="col-md-4">
    <label style={{ float :"left"}}>CGPA</label>
    <input type="text" class="form-control" id="inputEmail4" />
  </div>

  <div className="col-md-4">
                        <label className="form-label" style={{ float: "left" }}>Date Erolled</label>
                        <input type="date" className="form-control " />
                    </div>


<div>
<label style={{ float :"left"}}>Hobbies</label><br/>
<div className ="col-md-1" style={{float:"left"}}>
  <input type="checkbox"  id="surfing" name="hobbies" value="surfing"/>
  <label htmlFor="surfing" style={{marginLeft: "5px"}}>Surfing</label>
</div>


<div className ="col-md-1" style={{float:"left"}}>
  <input type="checkbox"  id="surfing" name="hobbies" value="surfing"/>
  <label htmlFor="surfing" style={{marginLeft: "5px"}}>Running</label>
</div>

<div className ="col-md-1" style={{float:"left"}}>
  <input type="checkbox"  id="surfing" name="hobbies" value="surfing"/>
  <label htmlFor="surfing" style={{marginLeft: "5px"}}>Biking</label>
</div>

<div className ="col-md-1" style={{float:"left"}}>
  <input type="checkbox"  id="surfing" name="hobbies" value="surfing"/>
  <label htmlFor="surfing" style={{marginLeft: "5px"}}>Paddling</label>
</div>
<div className="col-md-1" style={{ float: "left" }}>
                            <p style={{ color: "red" }}> (optional)</p>
                        </div>
</div>



<div>
                        <label style={{ float: "left" }}>Major</label><br />
                        <div className="col-md-1" style={{ float: "left" }}>
                            <input type="radio" id="Physics" name="Major" value="Physics" />
                            <label htmlFor="Physics" style={{ marginLeft: "5px" }}>Physics</label>
                        </div>
                        <div className="col-md-1" style={{ float: "left" }}>
                            <input type="radio" id="Math" name="Major" value="Math" />
                            <label htmlFor="Math" style={{ marginLeft: "5px" }}>Math</label>
                        </div>
                        <div className="col-md-1" style={{ float: "left" }}>
                            <input type="radio" id="Chemistry" name="Major" value="Chemistry" />
                            <label htmlFor="Chemistry" style={{ marginLeft: "5px" }}>Chemistry</label>
                        </div>
                        <div className="col-md-1" style={{ float: "left" }}>
                            <input type="radio" id="Computer" name="Major" value="Computer" />
                            <label htmlFor="Computer" style={{ marginLeft: "4px" }}>Computer</label>
                        </div>
                        <div className="col-md-1" style={{ float: "left" }}>
                            <p style={{ color: "red" }}> (required)</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
  
       
 



          
        </div>
      </div>  
     </div>  
    )
}
export default Priya_form;