import React from "react"
import {Link} from "react-router-dom"

function Header() {

    return(
        <header>
            <h1>ScrewFix</h1>
            <input placeholder="What are you looking for...?" ></input>
           
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                    <li><Link to="/nails-and-fixings">Screws and Nails</Link></li>
                    <li><Link to="/sealants-and-adhesives">Sealants and adhesives</Link></li>
                </ul>
            </nav>

        </header>
        )

}


export default Header