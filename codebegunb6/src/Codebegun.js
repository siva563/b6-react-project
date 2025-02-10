import React from "react";
import './Codebegun.css';
function Codebegun(){
return(
    <div>
        <header className="Mainline" id="Nav">
            <img src="Codebegunlogo.png" alt="Logo" className="Logo"></img>
            <nav className="Navlinks">
            <h5>courses</h5>
            <h5>internships</h5>
            <h5>jobs</h5>
            <h5>project</h5>
            <h5>events</h5>
            </nav>
            <button className="Button">login</button>
        </header>
        <div className="box-container">
        <div className="big-box-container">
          <div className="small-box">
            <img src="Students.png" alt="Box 8.1" className="box-image" />
          </div>
          <div className="small-box">
            <img src="Placement.png" alt="Box 8.2" className="box-image" />
          </div>
          <div className="small-box">
            <img src="Package.png" alt="Box 8.2" className="box-image" />
          </div>
        </div>
        {/* Box 7 with an image */}
        <div className="big-box">
          <img src="BIG6.png" alt="Box 7" className="box-image" />
        </div>

        {/* Box 8 is now divided into two equal parts */}
      </div>
      <div>
        <h3>Recognizations & Memberships</h3>
        <div className="image-container">
        <img src="Certified1.png"/>
        <img src="Certified2.png"/>
        <img src="Certified3.png"/>
        <img src="Certifed4.png"/>
        <img src="Certifed5.png"/>
        <img src="Certified6.png"/>
        </div>
      </div>
      <div className="choose-section">
      <h4 className="choose-heading">Why Choose CodeBegun?</h4>
  <div class="card-group">
  <div class="card1">
    <img src="Skilled.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Skilled Direction</h5>
      <p class="card-text">At CodeBegun, we connect you with industry experts who bring invaluable real-world insights directly to your learning. Our instructors are not just teachers—they’re seasoned professionals dedicated to mentoring you every step of the way</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card1">
    <img src="Workexperinace.png" class="card-img-top" alt="experience"/>
    <div class="card-body">
      <h5 class="card-title">Practical Experience</h5>
      <p class="card-text">At CodeBegun, you learn by doing. Each lesson is packed with real projects and coding exercises so you can build skills that truly stick. With hands-on practice, you’ll be ready to tackle real-world tech challenges with confidence.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card1">
    <img src="Jobreadycirculum.png" class="card-img-top" alt="Job"/>
    <div class="card-body">
      <h5 class="card-title">Job Readdy Circulam</h5>
      <p class="card-text">Our curriculum is designed to get you hired. We focus on the skills and tools top companies need, so you’re prepared from day one. With CodeBegun, you’ll build a portfolio that shows employers you’re ready to make an impact.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
</div>
</div>
<div>
  <div class="card-group">
  <div class="card1">
    <img src="Mentor.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">One-on-One Mentorship</h5>
      <p class="card-text">At CodeBegun, you get one-on-one support tailored to your goals. Our mentors guide you through challenges, answer your questions, and keep you on track. With their help, you’ll grow faster and stay confident in your learning journey.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card1">
    <img src="Company.png" class="card-img-top" alt="experience"/>
    <div class="card-body">
      <h5 class="card-title">Industry Connections</h5>
      <p class="card-text">CodeBegun connects you with top tech companies and industry leaders. Through our network, you’ll find opportunities for internships, projects, and jobs. We open doors so you can start your career with strong connections and real-world experience.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
  <div class="card1">
    <img src="Realprojects.png" class="card-img-top" alt="Job"/>
    <div class="card-body">
      <h5 class="card-title">Real-World Projects</h5>
      <p class="card-text">At CodeBegun, you learn by building projects that mirror real industry challenges. Each project helps you apply what you’ve learned. With hands-on experience, you’ll be ready to solve real problems in the tech world.</p>
      <p class="card-text"><small class="text-body-secondary"></small></p>
    </div>
  </div>
</div>
</div>



        <div className="card-wrapper1">
      <div className="card-container1">
    
        {[ 
          { name: "Java FullStack", img: "Card1.png",title:" Java FullStack",text:"Java | HTML | CSS | JavaScript | React "},
          { name: "MERN Stack", img: "Card2.png",title:"MERN Stack",text:"React | Express | Node | MangoDB "},
          { name: "Python FullStack", img: "Card3.png",title:"Python FullStack",text:"Python | HTML | CSS | Ract | JavaScript"},
          { name: "Cloud Computing", img: "Card4.png",title:"Cloud computing",text:"AWS | Azure | Google Cloud"}
        ].map((person, index) => (
          <div key={index} className="card">
          
            <img src={person.img} alt={person.name} className="card-image1" />

            <div className="card-body1">
              <h5 className="card-title">{person.title}</h5>
              <p className="card-text">{person.text}</p>
              <p className="rating">★★★★★</p>
              <div className="button-group">
                <button className="btn btn-primary">Explore Now</button>
                <button className="btn btn-success">Get started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="card-wrapper1">
      <div className="card-container1">
        {[ 
          { name: "Java FullStack", img: "Card5.png",title:".Net FullStack",text:"HTML | CSS | C# | SQL Server | LINQ"},
          { name: "Angular Developer", img: "Card6.png",title:"Angular Developer",text:"HTML | CSS | JavaScript |Angular"},
          { name: "DS", img: "Card7.png",title:"Data Science",text:"Statistics | Visualization | EWDA | BI"},
          { name: "Mean stack", img: "Card8.png",title:"Mean Stack",text:"MangoDB | Express | Angular | Node"}
        ].map((person, index) => (
          <div key={index} className="card">
          
            <img src={person.img} alt={person.name} className="card-image1" />

            <div className="card-body1">
              <h5 className="card-title">{person.title}</h5>
              <p className="card-text">{person.text}</p>
              <p className="rating">★★★★★</p>
              <div className="button-group">
                <button className="btn btn-primary">Explore Now</button>
                <button className="btn btn-success">Get started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
    <div className="card-wrapper1">
      <div className="card-container1">
        {[ 
          { name: "Gen", img: "Card9.png",title:"GEN AI",text:"Ststistics | Visualization | EDA |BA"},
          { name: "AI&MI", img: "Card10.png",title:"AI&MI",text:"Python | AI | Dta Science"},
          { name: "DATA Analytics", img: "Card11.png",title:"DATA Analytics",text:"Statistics | Visualization | EDA | BA"},
          { name: "React Js Dvelopment", img: "Card12.png",title:"React Js Development",text:"HTML | CSS | JavaScript | React"}
        ].map((person, index) => (
          <div key={index} className="card">
          
            <img src={person.img} alt={person.name} className="card-image1" />

            <div className="card-body1">
              <h5 className="card-title">{person.title}</h5>
              <p className="card-text">{person.text}</p>
              <p className="rating">★★★★★</p>
              <div className="button-group">
                <button className="btn btn-primary">Explore Now</button>
                <button className="btn btn-success">Get started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Alumni">
        <p className="Alumni-content">Our Alumni Work with Top Firms</p>
      </div>
    </div>
        <div className="Companies">
        <img src="Comp1.png"/>
        <img src="Comp2.png"/>
        <img src="Comp3.png"/>
        <img src="comp4.png"/>
        <img src="Comp5.png"/>
        <img src="Comp6.png"/>
        </div>
        <div className="Companies">
        <img src="Comp7.png"/>
        <img src="Comp8.png"/>
        <img src="Comp9.png"/>
        <img src="comp10.png"/>
        <img src="Comp11.png"/>
        <img src="Comp12.png"/>
        </div>
        <div className="Companies">
        <img src="Comp13.png"/>
        <img src="Comp14.png"/>
        <img src="Comp15.png"/>
        <img src="comp16.png"/>
        <img src="Comp17.png"/>
        <img src="Comp18.png"/>
        </div>
        <div className="Trusted">
        <h4 className="Trusted">Trusted and loved by students worldwide.</h4>
        </div>
        <div class="d-flex justify-content-between flex-wrap mt-4">
  <div class="card" style={{width: "18rem"}}>
    <img src="Student1.png" class="card-img-top" alt="Student 1"/>
    <div class="card-body">
      <h5 class="card-title">Raghu</h5>
      <p class="card-text">"Python FullSatck curriculum is very comprehensive, and the trainers are helpful. I got placed in a good company after completing the course."</p>
    </div>
  </div>
  <div class="card" style={{width: "18rem"}}>
    <img src="Student2.png" class="card-img-top" alt="Student 2"/>
    <div class="card-body">
      <h5 class="card-title">Abdul Azeez</h5>
      <p class="card-text">"Great institute to learn Java Full Stack. The curriculum is well-designed."</p>
    </div>
  </div>
  <div class="card" style={{width: "18rem"}}>
    <img src="Student3.png" class="card-img-top" alt="Student 3"/>
    <div class="card-body">
      <h5 class="card-title">Vamsi</h5>
      <p class="card-text">"Thanks to the Java Full Stack training, I gained the skills and confidence to land my dream job!. Thank you!"</p>
    </div>
  </div>
  <div class="card" style={{width: "18rem"}}>
    <img src="Student4.png" class="card-img-top" alt="Student 4"/>
    <div class="card-body">
      <h5 class="card-title">Sharath</h5>
      <p class="card-text">"One of the best institutes in Hyderabad. The Java Full Satck course was excellent."</p>
    </div>
  </div>
</div>
    </div>
    
)
}
export default Codebegun;