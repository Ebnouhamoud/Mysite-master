import React from 'react'

export default function SkilsCard(props) {
  const {name, imgSrc, colClass, header, content, imgClass} = props
  return (
    <div class = {`${name}-summary`}>
      <div class = {imgClass}>
        <div class = {`${name}-img`}>
          <img class = "img-responsive" src = {imgSrc}/>
        </div>
      </div>

      <div class = {colClass}>
        <div class = {`${name}-description`}>
          <h3>{header}</h3>
          <p>{content}</p>
        </div>
      </div>
		</div>
  )
}
