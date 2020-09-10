import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div>
        <p>
          <Link to="/">Ibas Majid</Link>
        </p>
        <p>My name is kiran ojha</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
