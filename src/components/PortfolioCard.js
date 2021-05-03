import React from 'react'

export default function PortfolioCard(props) {
  const {header,description,className} = props

  return (
    <div class = "col-sm-4 col-md-4 text-center">
      <div class = {className}>
      <h3>{header}</h3>
        <p>{description} </p>
        <div class = "row">
          <div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
            <div class = "project-more-info">
              <a class = "btn btn-default btn-border" href = "#">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
