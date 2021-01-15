import './App.css'
import { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import TeamStats from '../TeamStats/TeamStats'
import PlayersList from '../PlayersList/PlayersList'
// import { Switch, Route, Link, Router } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className='app'>
        <NavBar />
        <TeamStats />
        <PlayersList />
      </section>
    )
  }
}

export default App