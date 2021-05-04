import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/logo.svg"

let calc=false

export default function Nav() {
	const [height,setHeight] = useState(0)
	const [marginTop,setMarginTop]= useState(0)
	
	const logoEl = useRef(null)
	const liEl = useRef(null)
	
	const resize = () => {
		
		console.log('hello ')
		setHeight(logoEl.current.clientHeight)
		setMarginTop(`${(logoEl.current.clientHeight - liEl.current.clientHeight)/2}px`)
	}
	useEffect(() => {
		setHeight(logoEl.current.clientHeight)
		setMarginTop(`${(logoEl.current.clientHeight - liEl.current.clientHeight)/2}px`)
		var clear
		window.addEventListener('resize',()=> {
			clearInterval(clear)
			 clear  = setTimeout(resize,500)
		})
		return () => {
			window.removeEventListener('resize',resize)
		}
	}, [])
  return (
    <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div ref= {logoEl} className = "logo">
							<a href = "index.html"> <img src ={logo}/> </a>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div style={{height:`${height}`}} className = "primary-nav">
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
