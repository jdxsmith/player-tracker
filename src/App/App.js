import './App.css'
import { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
// import { Switch, Route, Link, Router } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className='app'>
        <NavBar />
        <SearchBar />
      </section>
    )
  }
}

export default App