import React from "react";
import "./homeCss/style.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

// import './homeCss/style.css.map'
// import "./homeCss/LineIcons.css";
// import "./homeCss/default.css";
// import "./homeCss/default-min.css";
// import "./homeCss/bootstrap.min.css";
// import "./homeCss/animate.css";
// import "./homeCss/aos.css";
// import "./homeCss/slick.css";
// import "./homeCss/LineIcons copy.css";
// import "./homeCss/font-awesome.min.css";

import negm from "../assets/images/images/testimonial/negm.png";

function Ceo() {
  return (
    <section id="testimonial" className="testimonial-area pt-130 pb-130">
      {/* <div className="shape shape-one">
      <img src="../assets/images/testimonial/shape.png" alt="testimonial" />
    </div>
    <div className="shape shape-tow">
      <img src="../assets/images/testimonial/shape.png" alt="testimonial" />
    </div>
    <div className="shape shape-three">
      <img src="../assets/images/testimonial/shape.png" alt="testimonial" />
    </div> */}
      <div className="container">
        <div className="testimonial-bg bg_cover  pt-80 pb-80">
          <div className="row">
            <div className="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
              <div className="testimonial-active">
                <div className="single-testimonial text-center">
                  <div className="testimonial-image">
                    <img src={negm} alt="Testimonial" />
                    {/* <div className="quota">
                     
                        <FontAwesomeIcon icon={faHippo} /> 
                        <FontAwesomeIcon icon={faQuoteLeft} />{" "}
    
                    </div> */}
                  </div>
                  <div className="testimonial-content mt-20">
                    <p>
                      Lorem ipsum dolor sit amet, ectetur adipiscing elit.
                      Phasellus vel erat ces, commodo lectus eu, finibus diam. m
                      ipsum dolor sit amet, ectetur.
                    </p>
                    {/* <div className="team-content">
            <h4 className="team-name"><a href="#">Eman AbdElbaset</a></h4>
            <span className="sub-title">Team Member</span>
            <ul className="social mt-25">
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-square-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
            </ul>
          </div> */}
                    <h5 className="testimonial-name mt-15">Negm</h5>
                    <span className="sub-title">Supervisor</span>
                    <div class="negmSocialC ">
                    <ul className="negmsocial social mt-25">
            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* single-testimonial */}
              </div>{" "}
              {/*  testimonial active */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* testimonial bg */}
      </div>{" "}
      {/* container */}
    </section>
  );
}

export default Ceo;
