import React from 'react'
// import shortcutIcon from "../assets/images/images/favicon.png"
// import './homeCss/bootstrap.min.css'
// import './homeCss/font-awesome.min.css'
// import './homeCss/LineIcons.css'
// import './homeCss/animate.css'
// import './homeCss/aos.css'
// import './homeCss/slick.css'
// import './homeCss/default.css'

import './homeCss/style.css'

// import './homeCss/default-min.css'
// import './homeCss/LineIcons copy.css'
import About from "./About";
import Team from "./Team";
import Ceo from "./Ceo";


// import about1 from "../assets/images/images/about/about-1.jpg";
// import about2 from "../assets/images/images/about/about-2.jpg";
// import dots from "../assets/images/images/about/dots.jpg";



function AboutPage() {

   

    
    return (
      <React.Fragment>
     
      <About></About>
      <Team></Team>
      <Ceo></Ceo>


    </React.Fragment>

    )
}

export default AboutPage