import React from 'react'
import './styleHeader.scss'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <div className='named'>
          <h1>International news</h1>
      </div>
      <div className='links'>
        <ul>
          <NavLink to="/">
            <li>add post</li>
          </NavLink>
          <NavLink to="/read_post">
            <li>read post</li>
          </NavLink>
          <NavLink to="/download_posts">
             <li>download posts</li>
          </NavLink>
        </ul>
      </div>
    </header>
  )
}
