import React from 'react'

export default function SkilsCard(props) {
  const {name, imgSrc, colClass, header, content, imgClass} = props
  return (
    <div className = {`${name}-summary`}>
      <div className = {imgClass}>
        <div className = {`${name}-img`}>
          <img className = "img-responsive" src = {imgSrc}/>
        </div>
      </div>

      <div className = {colClass}>
        <div className = {`${name}-description`}>
          <h3>{header}</h3>
          <p>{content}</p>
        </div>
      </div>
		</div>
  )
}
