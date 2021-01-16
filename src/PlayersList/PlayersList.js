import './PlayersList.css'
import { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'

class PlayersList extends Component {
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
      <section className='players-list'>
        {this.state.players.map(player => {
          return <PlayerCard id={player.id} key={player.id}/>
        })}
      </section>
    )
  }
}

export default PlayersList