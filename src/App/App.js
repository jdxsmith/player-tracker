import './App.css'
import { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import TeamStats from '../TeamStats/TeamStats'
import PlayersList from '../PlayersList/PlayersList'
import PlayerStats from '../PlayerStats/PlayerStats'
import { Switch, Route, Link, Router } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [
        {
          name: 'Tyler Bey',
          id: 3547265
        },
        {
          name: 'Jalen Brunson',
          id: 73
        },
        {
          name: 'Trey Burke',
          id: 76
        },
        {
          name: 'Willie Cauley-Stein',
          id: 91
        },
        {
          name: 'Luka Doncic',
          id: 132
        },
        {
          name: 'Dorian Finney-Smith',
          id: 158
        },
        {
          name: 'Josh Green',
          id: 3547258
        },
        {
          name: 'Tim Hardaway Jr.',
          id: 191
        },
        {
          name: 'Nate Hinton',
          id: 3547281
        },
        {
          name: 'Wes Iwundu',
          id: 230
        },
        {
          name: 'James Johnson',
          id: 242
        },
        {
          name: 'Maxi Kleber',
          id: 257
        },
        {
          name: 'Boban Marjanovic',
          id: 296
        },
        {
          name: 'Kristaps Porzingis',
          id: 378
        },
        {
          name: 'Dwight Powell',
          id: 379
        },
        {
          name: 'Josh Richardson',
          id: 391
        },
        {
          name: 'Tyrell Terry',
          id: 3547255
        }
      ]
    }
  }

  render() {
    return(
      <section className='app'>
        <NavBar />
        <Switch>
          <Route
            exact
            path='/'
            render={ () => {
              return(
                <section>
                  <TeamStats />
                  <PlayersList players={this.state.players}/>
                </section>
              )
            }}
          />
          <Route
            exact
            path='/:id'
            render={ ({match}) => {
              const playerId = parseInt(match.params.id)
              const selectedPlayer = this.state.players.find(player => {
                return player.id === playerId
              })
              return(
                <section>
                  <p>{selectedPlayer.name}</p>
                  <PlayerStats id={ playerId }/>
                </section>
              )
            }}
          />
        </Switch>
      </section>
    )
  }
}

export default App