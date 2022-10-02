import React from 'react'
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import PropTypes from 'prop-types'

function Navbar({title,theme}) {
  return (
    <div className="navbar shadow-lg" data-theme={theme}>
      <div className="flex-1 ml-4 mx-auto">
        <a href="https://github.com/" target="blank" className="btn btn-ghost">
          <FaGithub className="text-2xl" />
        </a>

        <Link to="/" className=" btn btn-ghost normal-case text-xl">
          {title}
        </Link>
      </div>
      <div className="flex-none justify-end">
        <ul className="menu menu-horizontal p-0">
          <li className="font-bold ">
            <Link to='/'>home</Link>
          </li>

          <li className="font-bold">
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Navbar.defaultProps={
    title:'Github Finder',
    theme :'cyberpunk'
}

Navbar.propTypes={
    title:PropTypes.string
}
export default Navbar
