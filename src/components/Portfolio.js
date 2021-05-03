import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {
  return (
    <div class = "projects" id="projects">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header-quote">
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>
				</div>

				<div class = "row">
          <PortfolioCard
            className='luvtalk-project'
            header='LUV TALK Website'
            description="Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
            />
          <PortfolioCard
            className='personal-website-project'
            header='Personal Website'
            description="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
            />
          <PortfolioCard
            className='strike-zone-project'
            header='Strike Zone Analysis'
            description="Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
            />
				</div>

				<div class = "row">
					<div class = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
						<div class = "see-more-button">
							<a class = "btn btn-default btn-border" href = "#">More Projects</a>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}