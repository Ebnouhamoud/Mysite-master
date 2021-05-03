import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/logo.svg"

export default function Nav() {
	const [height,setHeight] = useState(0)
	const [marginTop,setMarginTop]= useState(0)
	const logoEl = useRef(null)
	const liEl = useRef(null)
	const resize = () => {
		setHeight(logoEl.current.clientHeight)
		setMarginTop(`${(logoEl.current.clientHeight - liEl.current.clientHeight)/2}px`)
	}
	useEffect(() => {
		window.addEventListener('resize',resize)
		return () => {
			window.removeEventListener('resize',resize)
		}
	}, [])
	console.log(marginTop)
  return (
    <div class = "navigation">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div ref= {logoEl} class = "logo">
							<a href = "index.html"> <img src ={logo}/> </a>
						</div>
					</div>

					<div class = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div style={{height:`${height}`}} class = "primary-nav">
							<ul>
								<li style={{marginTop}} ref={liEl}><Link to='/'>Home</Link></li>
								<li style={{marginTop}}><Link to='portfolio'>Portfolio</Link></li>
								<li style={{marginTop}}><Link to='contact'>Contact</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}
