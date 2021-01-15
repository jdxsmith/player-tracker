import './App.css'
import NavBar from '../NavBar/NavBar'
import { Component } from 'react'
// import { Switch, Route, Link, Router } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className='app'>
        <NavBar />
      </section>
    )
  }
}

export default App