import React from 'react'



import './homeCss/style.css'

// import './homeCss/LineIcons.css'
import './homeCss/default.css'
// import './homeCss/default-min.css'
import './homeCss/bootstrap.min.css'
// import './homeCss/animate.css'
// import './homeCss/aos.css'
// import './homeCss/slick.css'
// import './homeCss/LineIcons copy.css'
// import './homeCss/font-awesome.min.css'

 import mahmoud from "../assets/images/images/team/Mahmoud.jpg"
 import masoud from "../assets/images/images/team/Masoud.jpg"
 import aya from "../assets/images/images/team/Aya.jpg"
 import fatma from "../assets/images/images/team/fatma.jpg"
 import eman from "../assets/images/images/team/Eman.jpg"



function Team() {

   

    
    return (
<section id="team" className="team-area pt-125 pb-130 gray-bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="section-title text-center pb-20">
          <h5 className="sub-title mb-15">Meet The Team</h5>
          <h2 className="title">Our Expert Designers</h2>
        </div> {/* section title */}
      </div>
    </div> {/* row */}
    <div className="row g-2">
      <div className="col-lg col-md-6 col-sm-6 ">
        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
          <div className="team-image">
            <img src={mahmoud} alt="mahmoud" />
          </div>
          <div className="team-content">
            <h4 className="team-name"><a href="#">Mahmoud Mohamed</a></h4>
            <span className="sub-title">Team Member </span>
            <ul className="social mt-25">
              <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
          </div>
        </div> {/* single team */}
      </div>
      <div className="col-lg col-md-6 col-sm-6">
        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
          <div className="team-image">
            <img src={masoud} alt="masoud" />
          </div>
          <div className="team-content">
            <h4 className="team-name"><a href="#">Mohamed Mahoud</a></h4>
            <span className="sub-title">Team Member</span>
            <ul className="social mt-25">
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
          </div>
        </div> {/* single team */}
      </div>
      <div className="col-lg col-md-6 col-sm-6">
        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
          <div className="team-image">
            <img src={aya} alt="aya" />
          </div>
          <div className="team-content">
            <h4 className="team-name"><a href="#">Aya Tarek</a></h4>
            <span className="sub-title">Team Member</span>
            <ul className="social mt-25">
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
          </div>
        </div> {/* single team */}
      </div>
      <div className="col-lg col-md-6 col-sm-6">
        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
          <div className="team-image">
            <img src={fatma} alt="fatma" />
          </div>
          <div className="team-content">
            <h4 className="team-name"><a href="#">Fatma Alzahraa</a></h4>
            <span className="sub-title">Team Member</span>
            <ul className="social mt-25">
            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            </ul>
          </div>
        </div> {/* single team */}
      </div>
      <div className="col-lg col-md-6 col-sm-6">
        <div className="single-team text-center mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
          <div className="team-image">
            <img src={eman} alt="eman" />
          </div>
          <div className="team-content">
            <h4 className="team-name"><a href="#">Eman AbdElbaset</a></h4>
            <span className="sub-title">Team Member</span>
            <ul className="social mt-25">
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
          </div>
        </div> {/* single team */}
      </div>
    </div> {/* row */}
  </div> {/* container */}
</section>
       
    )
}

export default Team