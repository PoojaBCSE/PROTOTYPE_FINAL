import React from 'react'

const Events = () => {
  return (
    <div> <div className="container-fluid" style={{ marginTop: 75 }}>
    <div className="container-fluid">
      <h4 style={{ color: "#fff" ,textAlign:"left" ,margin:"20px"}}>
        Sort by:
        <button className="btn-md btn-info" style={{ marginRight: 5 }}>
          Recent
        </button>
        <button className="btn-md btn-primary" style={{ marginRight: 5 }}>
          Old
        </button>
      </h4>
    </div>
    <div className="grid">
      <div className="thumbnail ethum">
        <img src="img/w1.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Drug abuse and mental health</p>
          <p>
            <img src="img/p1.jpg" /> Dr. Lydia
          </p>
          <p className="hashtag">Description : Webinar</p>
          <p className="date">Sunday, December 2nd, 2023</p>
          <p>
            <button className="btn-warning" style={{ marginRight: 5 }}>
              Like <i className="fa fa-thumbs-up" />
            </button>
            <button className="btn-success" style={{ marginRight: 5 }}>
              Subscribe
              <i className="fa fa-heart" />
            </button>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Report
              <i className="fa fa-flag" />
            </button>
            <button className="btn-info" style={{ marginRight: 5 }}>
              Share
              <i className="fa fa-share" />
            </button>
          </p>
        </div>
      </div>
      <div className="thumbnail ethum">
        <img src="img/w3.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Break the cycle of addiction</p>
          <p>
            <img src="img/p2.jpg" /> Ryan Freggie
          </p>
          <p className="hashtag">Description : Just Talks</p>
          <p className="date">Friday, October 24th, 2023</p>
          <p>
            <button className="btn-warning" style={{ marginRight: 5 }}>
              Like <i className="fa fa-thumbs-up" />
            </button>
            <button className="btn-success" style={{ marginRight: 5 }}>
              Subscribe
              <i className="fa fa-heart" />
            </button>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Report
              <i className="fa fa-flag" />
            </button>
            <button className="btn-info" style={{ marginRight: 5 }}>
              Share
              <i className="fa fa-share" />
            </button>
          </p>
        </div>
      </div>
      <div className="thumbnail ethum">
        <img src="img/w5.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Daily activities to overcome addiction</p>
          <p>
            <img src="img/p6.png" /> Dr. Prachi
          </p>
          <p className="hashtag">Description : Counselling Session</p>
          <p className="date">Wednesday, September 24th, 2023</p>
          <p>
            <button className="btn-warning" style={{ marginRight: 5 }}>
              Like <i className="fa fa-thumbs-up" />
            </button>
            <button className="btn-success" style={{ marginRight: 5 }}>
              Subscribe
              <i className="fa fa-heart" />
            </button>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Report
              <i className="fa fa-flag" />
            </button>
            <button className="btn-info" style={{ marginRight: 5 }}>
              Share
              <i className="fa fa-share" />
            </button>
          </p>
        </div>
      </div>
      <div className="thumbnail ethum">
        <img src="img/w4.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">My journey of addiction and recovery</p>
          <p>
            <img src="img/a1.jpg" /> Anonymous Cat
          </p>
          <p className="hashtag">Description : Just Talks</p>
          <p className="date">Wednesday, September 7th, 2023</p>
          <p>
            <button className="btn-warning" style={{ marginRight: 5 }}>
              Like <i className="fa fa-thumbs-up" />
            </button>
            <button className="btn-success" style={{ marginRight: 5 }}>
              Subscribe
              <i className="fa fa-heart" />
            </button>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Report
              <i className="fa fa-flag" />
            </button>
            <button className="btn-info" style={{ marginRight: 5 }}>
              Share
              <i className="fa fa-share" />
            </button>
          </p>
        </div>
      </div>
      <div className="thumbnail ethum">
        <img src="img/d1.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Webinar Series : Create a drug free society</p>
          <p>
            <img src="img/p3.jpg" /> Millie Issac
          </p>
          <p className="hashtag">Description : Webinar</p>
          <p className="date">Friday, August 19th, 2023</p>
          <p>
            <button className="btn-warning" style={{ marginRight: 5 }}>
              Like <i className="fa fa-thumbs-up" />
            </button>
            <button className="btn-success" style={{ marginRight: 5 }}>
              Subscribe
              <i className="fa fa-heart" />
            </button>
            <button className="btn-danger" style={{ marginRight: 5 }}>
              Report
              <i className="fa fa-flag" />
            </button>
            <button className="btn-info" style={{ marginRight: 5 }}>
              Share
              <i className="fa fa-share" />
            </button>
          </p>
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
  </div></div>
  )
}

export default Events