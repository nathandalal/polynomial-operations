import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Add from './components/Add.jsx'
import Subtract from './components/Subtract.jsx'
import Multiply from './components/Multiply.jsx'
import About from './components/About.jsx'

import Tabs from './components/Tabs.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let routes = [
      { path: "/add",         name: "Adding",           icon: "plus",                 component: Add },
      { path: "/subtract",    name: "Subtracting",      icon: "minus",                component: Subtract },
      { path: "/multiply",    name: "Mutiplying",       icon: "times",                component: Multiply },
      { path: "/about",       name: "How It's Made",  icon: "question-circle-o",    component: About }
    ]

    return (
      <Router>
        <div style={{padding: "5%"}}>
          <h1 className="title is-2 has-text-centered">Polynomial Operations</h1>
          <Route component={(props) => <Tabs routes={routes} {...props}/>}/>

          <Switch>
            {routes.map(route => <Route exact path={route.path} component={route.component} key={route.path} />)}
            <Redirect to ="/add"/>
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<Index />, document.getElementById('app'))