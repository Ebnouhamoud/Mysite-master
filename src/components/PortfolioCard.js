import React, { useEffect, useRef, useState } from 'react'

export default function PortfolioCard(props) {
  const {header,description,className} = props
  const [projectClassHieght, setProjectClassHieght] =useState(0)
  const [headerHieght, setHeaderHieght] = useState(0)
  const [rowHieght, setRowHieght] = useState(0)
  const projEl = useRef(null)
  const h3El = useRef(null)
  const row = useRef(null)

  const resize = () => {
    setProjectClassHieght(projEl.current.clientWidth)
    setHeaderHieght(h3El.current.clientHeight)
    setRowHieght(row.current.clientHeight)
  }

  useEffect(() => {
    
		window.addEventListener('resize',() => setTimeout(resize,500))
		return () => {
			window.removeEventListener('resize',resize)
		}
	},[projEl])
  return (
    <div class = "col-sm-4 col-md-4 text-center">
      <div style={{height:projectClassHieght}} ref= {projEl} class = {className}>
      <h3 
      style={{paddingTop:(projectClassHieght-headerHieght-rowHieght)/2}} 
      ref={h3El} >{header}</h3>
        <p>{description} </p>
        <div ref={row} class = "row">
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
