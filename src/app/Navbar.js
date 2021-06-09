import React from 'react'
import {Link} from "react-router-dom";



export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Social's</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Anasayfa</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
