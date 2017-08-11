import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = ({routes, location}) => (
  <div className="tabs is-centered">
    <ul>
    {routes.map(route => (
      <li key={route.path} className={location.pathname.split("/")[1] == route.path.substr(1) ? "is-active" : ""}>
        <Link to={route.path}>
          <span className="icon is-small"><i className={`fa fa-${route.icon}`}/></span>
          <span>{route.name}</span>
        </Link>
      </li>
    ))}
    </ul>
  </div>
)

export default Tabs