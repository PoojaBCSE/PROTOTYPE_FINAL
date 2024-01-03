import React from 'react'
import "../css/sober.css"

const Documentaries = () => {
  return (
    <div>
       <div className="container-fluid" style={{ marginTop: 50 }}>
    <h4 style={{ color: "#fff" ,textAlign:"left" ,margin:"20px"}}>
      Sort by:
      <button className="btn-md btn-info" style={{ marginRight: 5 }}>
        Recent
      </button>
      <button className="btn-md btn-primary" style={{ marginRight: 5 }}>
        Old
      </button>
      <button className="btn-md btn-primary">
        Filters
        <span className="glyphicon glyphicon-filter" />
      </button>
    </h4>
  </div>
  <div className="container-fluid" style={{ marginBottom: 100 }}>
    <div className="grid" id="grid1">
      <div className="thumbnail applyshadow">
        <img src="img/d3.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">50 things to do instead of taking drugs</p>
          <p>
            <img src="img/a1.jpg" /> Anonymous cat
          </p>
          <p className="hashtag">#challenge</p>
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
          <form>
            <textarea className="form-control" defaultValue={"Comment..."} />
          </form>
        </div>
      </div>
      <div className="thumbnail applyshadow">
        <img src="img/v1.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">The anonymous people</p>
          <p>
            <img src="img/e1.jpg" /> Anonymous Elephant
          </p>
          <p className="hashtag">#motivation #animation</p>
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
          <form>
            <textarea className="form-control" defaultValue={"Comment..."} />
          </form>
        </div>
      </div>
      <div className="thumbnail applyshadow">
        <img src="img/v2.jpg" height="200px" width="200px" />
        <div className="caption">
          <p className="title">Top 10 documentaries</p>
          <p>
            <img src="img/a2.jpg" />
            Anonymous Penguin
          </p>
          <p className="hashtag">#documentary</p>
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
          <form>
            <textarea className="form-control" defaultValue={"Comment..."} />
          </form>
        </div>
      </div>
      <div className="thumbnail applyshadow">
        <center>
          <iframe
            width={250}
            height={150}
            src="https://www.youtube.com/embed/StM10jzbt1k?si=cbpRoAApEiCFtt_l"
          />
        </center>
        <div className="caption">
          <p className="title">101 exercises to overcome addiction</p>
          <p>
            <img src="img/p2.jpg" /> Ryan Freggie
          </p>
          <p className="hashtag">#challenges #activities</p>
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
          <form>
            <textarea className="form-control" defaultValue={"Comment..."} />
          </form>
        </div>
      </div>
      <div className="thumbnail applyshadow">
        <center>
          <iframe
            width={250}
            height={150}
            src="https://www.youtube.com/embed/I2DnkrFqKo0?si=lA1nbrcaAHXrB63_"
          />
        </center>
        <div className="caption">
          <p className="title">Documentary of Russell Brand</p>
          <p>
            <img src="img/e1.jpg" /> Anonymous Elephant
          </p>
          <p className="hashtag">#motivation #documentary</p>
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
          <form>
            <textarea className="form-control" defaultValue={"Comment..."} />
          </form>
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
  <footer className="fixed-bottom">
    <h3>Want to create and upload your own videos?</h3>
    <h4>
      Create and share your own experiences, documentaries and animations to the
      world!{" "}
      <i
        className="fa fa-plus-circle"
        id="modal2"
        data-target="#modal1"
        data-toggle="modal"
        role="dialog"
        style={{ cursor: "pointer" }}
      />
    </h4>
  </footer>
  <div className="container-fluid">
    <div
      className="modal"
      aria-hidden="true"
      aria-labelledby="modal2"
      id="modal1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" data-dismiss="modal">
              ×
            </button>
            <h4 id="modal2">Upload your video!</h4>
          </div>
          <div className="modal-body">
            <label htmlFor="linkup">
              Upload a video from drive or provide a link:
            </label>
            <br />
            <center>
              <button className="btn-lg btn-success">
                Upload from drive
                <i className="fa fa-upload" />
              </button>
            </center>
            <center>
              <h4>OR</h4>
            </center>
            <textarea
              className="form-control"
              id="linkup"
              rows={2}
              defaultValue={"Provide your link here"}
            />
            <form>
              <label htmlFor="titleup">Title</label>
              <input type="text" id="titleup" className="form-control" />
              <label htmlFor="desc">Description</label>
              <input type="text" id="desc" className="form-control" />
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn-md btn-info" id="up">Upload</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Documentaries