import React from 'react';

import "../css/sober.css"
function About(){
    return (<div>
         
  <div className="container-fluid" style={{ marginTop: 100 }}>
    <div className="grid">
      <div className="grid-item">
        <img
          src="img/e1.jpg"
          height="300px"
          width="300px"
          style={{ borderRadius: 150 }}
        />
      </div>
      <div className="grid-item">
        <h2 style={{ fontFamily: "Arial, Helvetica, sans-serif",color:"white" }}>
          Anonymous Elephant
        </h2>
        <div className="best" style={{ marginBottom: 10}}>
          <h3>
            Badges Earned <i className="fa fa-shield" />
          </h3>
          <div className="caption">
            <h4>
              <i className="fa fa-shield" /> Most viewed video of the week
            </h4>
            <h4>
              <i className="fa fa-trophy" /> Best documentary of the week
            </h4>
          </div>
        </div>
        <div className="edit">
          <button className="editprof"style={{ backgroundColor: "white" }}>
            Edit Profile
            <i class="fa fa-user"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="line">
      <h3 style={{ fontWeight: "bold" ,color:"white"}}>My Videos</h3>
    </div>
    <h4 style={{ textAlign:"left",color:"white",margin:"10px"}}>
       Sort by:
      <button className="btn-md btn-info" style={{ marginRight: 5 }}>
        Recent
      </button>
      <button className="btn-md btn-primary">Old</button>
    </h4>
    <div className="grid">
      <div className="thumbnail">
        <img src="img/d2.jpg" height="150px" width="200px" />
        <div className="caption">
          <p className="title">Documentary of Russell Brand</p>
          <p>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Remove <i className="fa fa-remove" />
            </button>
            <button className="btn-success">View Status</button>
          </p>
        </div>
      </div>
      <div className="thumbnail">
        <img src="img/v1.jpg" height="150px" width="200px" />
        <div className="caption">
          <p className="title">The anonymous people</p>
          <p>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Remove <i className="fa fa-remove" />
            </button>
            <button className="btn-success">View Status</button>
          </p>
        </div>
      </div>
      <div className="thumbnail" style={{ textAlign: "center", padding: 25 }}>
        <i className="fa fa-plus-circle" style={{ fontSize: 100 }} />
        <div className="caption">
          <button className="btn-success">
            Create and Upload your video <i className="fa fa-upload" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="line">
      <h3 style={{ fontWeight: "bold",color:"white" }}>Subscriptions</h3>
    </div>
    <h4 style={{ textAlign:"left",color:"white",margin:"10px"}}>
      Sort by:
      <button className="btn-md btn-info" style={{ marginRight: 5 }}>
        Recent
      </button>
      <button className="btn-md btn-primary">Old</button>
    </h4>
    <div className="grid">
      <div className="thumbnail">
        <img src="img/a1.jpg" height="200px" width="200px" />
        <div className="caption">
          <p>Anonymous Cat</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
      <div className="thumbnail">
        <img src="img/a2.jpg" height="200px" width="200px" />
        <div className="caption">
          <p>Anonymous Penguin</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
      <div className="thumbnail">
        <img src="img/p6.png" height="200px" width="200px" />
        <div className="caption">
          <p>Dr. Prachi</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
      <div className="thumbnail">
        <img src="img/p2.jpg" height="200px" width="200px" />
        <div className="caption">
          <p>Ryan Freggie</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="line">
      <h3 style={{ fontWeight: "bold",color:"white" }}>Liked Videos</h3>
    </div>
    <h4 style={{ textAlign:"left",color:"white",margin:"10px"}}> 
      Sort by 
      <button className="btn-md btn-info" style={{ marginRight: 5 }}>
        Recent
      </button>
      <button className="btn-md btn-primary">Old</button>
    </h4>
    <div className="grid">
      <div className="thumbnail">
        <img src="img/d1.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Webinar Series : Create a drug free society</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
      <div className="thumbnail">
        <img src="img/d3.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">50 things to do instead of taking drugs</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
      <div className="thumbnail">
        <img src="img/w3.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Break the cycle of addiction</p>
          <button className="btn-danger">
            Remove <i className="fa fa-remove" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="chatbot-container">
    <img src="img/r1.jpg" className="chatbot-icon" />
    <div className="chatbot-message">Hi, How can I help you?</div>
    <input
      type="text"
      className="user-message"
      placeholder="Type your message here..."
    />
  </div>
        </div>);
}
export default About;