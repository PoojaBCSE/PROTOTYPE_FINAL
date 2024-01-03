import React from 'react'
import "../css/styles.css"
import { Link } from 'react-router-dom'
const Challenges = () => {
  return (
    <div>
       <section className='thhh1'>
        <header class="sticky">
        <nav>
            <div class="logo"> 
                <img src="c1.gif"/>
            </div>
            <ul>
                
                <li><a href="#">Guides</a></li>
                <li><a href="#">Challenges</a></li>
                <li><Link to="rewards">Rewards</Link></li>
                <li><a href="#">Help</a></li>
            </ul>
        
            <div class="social_icon">
                <i class='bx bx-search'></i>
            </div>
        </nav>
        </header>
        <div class="main">
            <div class="main-tag">
                <h1>WELCOME! <br/><span>CHOOSE YOUR CHALLENGE</span></h1>
                <p>Participants in this challenge commit to embracing a lifestyle free from the harmful effects of drugs, fostering resilience, and supporting one another on this transformative path. Through engaging activities, educational resources, and a supportive community, we aim to break the cycle of addiction and encourage a future where every individual can thrive without the influence of drugs. Join us in this empowering challenge, and let's make a lasting impact together as we promote a life of wellness, resilience, and drug-free choices</p>
                
            </div>
            <div class="main-imgg">
                <img src="c2.jpg"/>
            </div>
        </div>
    </section>
    <div class="services">
        <div class="services-box">
            <div class="services-card">
                <i class='bx bx-timer'></i>
                <h3>Challenge overview</h3> 
                
                <p>
                    Clearly understand the goals of the challenge  

                </p>
            </div>
            <div class="services-card">
                <i class='bx bx-book-content'></i>
                <h3>Rules and Regulations</h3>
                <p>
                    Clearly understand the rules and regulations of the challenge 
                   

                </p>
            </div>
            <div class="services-card">
                <i class='bx bx-face'></i>
                <h3>Transparency</h3>
                <p>
                    Ensure transparency while playing challenges
                   

                </p>
            </div>
            <div class="services-card">
                <i class='bx bxs-badge-check'></i>
                <h3>Rewards</h3>
                <p>
                   Collect your rewards in reward section 
                   

                </p>
            </div>
        </div>
    </div>
    <section class="package" id="package">
        <div class="title">
            <h2>Our Upcoming Challenges</h2>
        </div>

        <div class="package-content">
            <div class="box">
              <div class="thum">
                <img src="money.jpg"/>
                
              </div> 
               <div class="dest-content">
                <div class="location">
                    <h4>Make Money Challenge</h4>
                    <p>Save your money by following daily </p>
                    <p>rules in this challenge</p>
                </div>
                
               </div>
            </div>

            <div class="box">
                <div class="thum">
                  <img src="choice2.jpg"/>
                
                </div> 
                 <div class="dest-content">
                  <div class="location">
                      <h4>Clear Choice Quest</h4>
                      <p>Spin the wheel or use camera filter to</p>
                      <p>choose your choice</p>
                  </div>
                  
                 </div>
              </div>

              <div class="box">
                <div class="thum">
                  <img src="writopia.jpg"/>
                  
                </div> 
                 <div class="dest-content">
                  <div class="location">
                      <h4>Writopia Challenge</h4>
                      <p>Engage yourself with valuable activites</p>
                      <p>& post it to get additional points</p>
                      
                  </div>
                
                 </div>
              </div>

              
            </div>

            <div class="package-content1">
              <div class="box1">
                <div class="thum1">
                  <img src="feel1.jpg"/>
                  
                </div> 
                 <div class="dest-content1">
                  <div class="location1">
                      <h4>Feel the same Challenge</h4>
                      <p>Doing alternative positive things which</p>
                      <p>gives same feel as that of drugs</p>
                  </div>
                  
                 </div>
                </div>


                <div class="box1">
                    <div class="thum1">
                      <img src="fitness.jpg"/>
                      
                    </div> 
                     <div class="dest-content1">
                      <div class="location1">
                          <h4>Fitness Challenge</h4>
                          <p>Follow the rules of the challenge and </p>
                          <p>get fit and happy life</p>
                      </div>
                     
                     </div>
                    </div>

                    

            </div>

    </section>
    <section className='thhh2'>
    <div class="about">
        <div class="about-image">
            <img src="drugs1.jpg"/>
        </div>
        <div class="about-tag">
            <h1>Post Your Views</h1>
            <p>We value your perspective and believe in the power of diverse voices coming together. This platform is a space for open dialogue and shared experiences. We encourage you to post your views, thoughts, and insights here.Let this be a forum where we learn from each other, support one another, and collectively contribute to the mission of creating a healthier, drug-free community. Your views are an essential part of this conversation, and we look forward to hearing from you. Together, let's make a positive impact and inspire change.Let this be a forum where we learn from each other, support one another, and collectively contribute to the mission of creating a healthier, drug-free community. Your views are an essential part of this conversation, and we look forward to hearing from you. Together, let's make a positive impact and inspire change.</p>
            <Link to="/post" class="about-btn">Click To Post</Link>
        </div>
    </div>
   </section>
    </div>
  )
}

export default Challenges