import React from 'react'
import SkilsCard from './SkilsCard'
import devImg from '../images/developerdesign.svg'
import responsiveImg from "../images/responsivedesign.svg"
import ideasImg from "../images/innovativesolutions.svg"
import passionImg from "../images/passion.svg"
export default function Skils() {
  return (
    <div class = "summary">
      
			<div class = "container-fluid">
				<div class = "row">
          <SkilsCard 
            name='container'
            imgSrc={devImg}
            imgClass="col-sm-1 col-md-1"
            colClass="col-sm-4 col-md-4"
            header ='Development and Design'
            content = 'I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.'
            />

            <SkilsCard 
              name='responsive'
              imgSrc={responsiveImg}
              imgClass="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2"
              colClass="col-sm-4 col-md-4"
              header ='Responsive Layouts'
              content = "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations."
              />
				</div>

				<div class = "row">
            <SkilsCard 
              name='ideas'
              imgSrc={ideasImg}
              imgClass="col-sm-1 col-md-1"
              colClass="col-sm-4 col-md-4"
              header ="Ideas and Solutions"
              content = "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
              />
            <SkilsCard 
              name='passion'
              imgSrc={passionImg}
              imgClass="col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2"
              colClass="col-sm-4 col-md-4"
              header ="Passion and Dedication"
              content = "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved."
              />
				</div>
			</div>
		</div>
  )
}
