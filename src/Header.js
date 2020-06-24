import React from "react"
import {Link} from "react-router-dom"

function Header() {

    return(
        <>
            <header>
                <h1>ScrewFix</h1>
                <div className="search-box-and-icon">
                    <input type="text" placeholder="What are you looking for...?" ></input>
                    <i className="ri-search-line ri-2x"></i>
                </div>
            </header>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                    <li><Link to="/nails-and-fixings">Screws and Nails</Link></li>
                    <li><Link to="/sealants-and-adhesives">Sealants and adhesives</Link></li>
                </ul>
            </nav>
        </>

        )

}


export default Header