import React from "react"
import { Link } from "gatsby"
// import Footer from "./footer"


const Header = () => {
  return (
    <header>
      <div>
        <img
          src="https://i.imgur.com/A1HGuhG.jpg"
          alt="Kiran ojha"
          className="img-thumbnail img-responsive "
        ></img>
      </div>
      <hr />

      <nav>
        <ul className="nav nav-pills flex-column flex-sm-column">
          <li className="flex-sm-fill text-sm-center nav-link ">
            <Link to="/">Home</Link>
          </li>
          <li className="flex-sm-fill text-sm-center nav-link">
            <Link to="/blog/">Blog</Link>
          </li>
          <li className="flex-sm-fill text-sm-center nav-link">
            <Link to="/contact/">Contact</Link>
          </li>
          <li className="flex-sm-fill text-sm-center nav-link">
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
      <Footer />
      </div> */}
    </header>
  )
}

export default Header
