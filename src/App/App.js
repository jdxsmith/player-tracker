import './App.css'
import { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import TeamStats from '../TeamStats/TeamStats'
import PlayersList from '../PlayersList/PlayersList'
import PlayerStats from '../PlayerStats/PlayerStats'
import FavoritePlayers from '../FavoritePlayers/FavoritePlayers'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: [
        {
          name: 'Tyler Bey',
          id: 3547265,
          number: 2
        },
        {
          name: 'Jalen Brunson',
          id: 73,
          number: 13
        },
        {
          name: 'Trey Burke',
          id: 76,
          number: 3
        },
        {
          name: 'Willie Cauley-Stein',
          id: 91,
          number: 33
        },
        {
          name: 'Luka Doncic',
          id: 132,
          number: 77
        },
        {
          name: 'Dorian Finney-Smith',
          id: 158,
          number: 10
        },
        {
          name: 'Josh Green',
          id: 3547258,
          number: 8
        },
        {
          name: 'Tim Hardaway Jr.',
          id: 191,
          number: 11
        },
        {
          name: 'Nate Hinton',
          id: 3547281,
          number: 14
        },
        {
          name: 'Wes Iwundu',
          id: 230,
          number: 25
        },
        {
          name: 'James Johnson',
          id: 242,
          number: 16
        },
        {
          name: 'Maxi Kleber',
          id: 257,
          number: 42
        },
        {
          name: 'Boban Marjanovic',
          id: 296,
          number: 51
        },
        {
          name: 'Kristaps Porzingis',
          id: 378,
          number: 6
        },
        {
          name: 'Dwight Powell',
          id: 379,
          number: 7
        },
        {
          name: 'Josh Richardson',
          id: 391,
          number: 0
        },
        {
          name: 'Tyrell Terry',
          id: 3547255,
          number: 1
        }
      ]
    }
  }

  render() {
    return(
      <section className='app'>
        <NavBar />
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
            path='/players/favorites'
            render={ () => {
              return(
                <FavoritePlayers />
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
                <section className='player-stats-page'>
                  <p className='player-page-name'>{selectedPlayer.name}</p>
                  <PlayerStats player={selectedPlayer} id={ playerId }/>
                </section>
              )
            }}
          />
      </section>
    )
  }
}

export default App