import React from 'react'
import "../css/style.css"
const Rewards = () => {
  return (
    <div className="body">
    <header>
      <h1 className="h11">
        <center>DASHBOARD</center>
      </h1>
    </header>
    <main className='main0'>
      <section id="user-info">
        <img src="/images/user_logo.jpg" alt="User Logo" id="user-logo" />
        <h2>
          Your Points: <span id="user-points">0</span>
        </h2>
        <h4>
          Streak: <span id="streak">0</span>
        </h4>
      </section>
      <section id="badges">
        <h2>
          <center>Your Badges</center>
        </h2>
        <iframe
          src="/images/giphy.gif"
          width={480}
          height={480}
          frameBorder={0}
          className="giphy-embed"
          allowFullScreen=""
        />
      </section>
    </main>
    <section id="more-badges">
      <h2 className="other-badges"> All Badges</h2>
      <div className="card-container">
        <div className="card">
          <img src="/images/badge1.jpg" />
          <div className="card-content">
            <h3>Bronze Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge2.jpg" />
          <div className="card-content">
            <h3>Silver Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge3.jpg" />
          <div className="card-content">
            <h3>Gold Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge4.jpg" />
          <div className="card-content">
            <h3>Ultra Silver Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge5.jpg" />
          <div className="card-content">
            <h3>Ultra Gold Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge6.jpg" />
          <div className="card-content">
            <h3>Unicorn Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge7.jpg" />
          <div className="card-content">
            <h3>Contributor Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
        <div className="card">
          <img src="/images/badge8.jpg" />
          <div className="card-content">
            <h3>Master Badge</h3>
            <a href="#" className="main-btn">
              Claim
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Rewards