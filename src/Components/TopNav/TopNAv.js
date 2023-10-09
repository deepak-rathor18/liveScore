import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const TopNAv = () => {
    const [option, setOption] = useState("Live Score")
  
 const [showNavbar, setShowNavbar] = useState(false);

    const handleIconClick = () => {
        setShowNavbar(!showNavbar);
        
      };

      const handleListItemClick = () => {
        setShowNavbar(!showNavbar);
      };
    return (
        <>
            <nav>
                <label className='logo'><h1><span><i class="fa-solid fa-baseball"></i></span>Criclive</h1></label>
                <ul className={showNavbar ? 'show' : ''}>
                <li onClick={() => {
                    handleListItemClick()
                    setOption("Live Score")
                }}> <Link to="/"><span><h5  class={option == "Live Score" ? "active" : " "} >Live Score</h5></span></Link></li>
                    <li onClick={() =>{
                        handleListItemClick() 
                        setOption("Upcoming Matches") }} ><Link to="/UpcomingMatches"> <span><h5 class={option == "Upcoming Matches" ? "active" : " "} >Upcoming Matches</h5></span></Link> </li>

                    <li onClick={() =>{
                        handleListItemClick()
                        setOption("series")
                    }}> <Link to="/UpcomingSeries"> <span><h5  class={option == "series" ? "active" : " "}>Upcoming Series</h5></span></Link></li>
                    <li onClick={() => {
                        handleListItemClick()
                        setOption("list")
                    }}> <Link to="list"> <span><h5  class={option == "list" ? "active" : " "}>List 
                        </h5></span></Link>
                    </li>
                    <li  onClick={()=>{
                        handleListItemClick()
                        setOption("Point Table")
                    }} ><Link to="point"><span><h5 class={option =="Point Table"? "active":" "}  >Point Table</h5></span></Link></li>
                </ul>

                <label id='icon'>
                       <i class="fa-solid fa-bars" onClick={handleIconClick}></i>
                </label>
            </nav>
            <section>
                <Outlet />
            </section>
            <section>
                <Footer />
            </section>
        </ >
    )
}
