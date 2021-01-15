import './PlayersList.css'
import { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'

class PlayersList extends Component {
  constructor() {
    super()
    this.state = {
      players: [132, 378]
    }
  }

  render() {
    return(
      <section className='players-list'>
        {this.state.players.map(player => {
          return <PlayerCard id={player} key={player}/>
        })}
      </section>
    )
  }
}

export default PlayersList