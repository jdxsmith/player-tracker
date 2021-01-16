import './PlayersList.css'
import { Component } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard'

class PlayersList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className='players-list'>
        {this.props.players.map(player => {
          return <PlayerCard id={player.id} key={player.id}/>
        })}
      </section>
    )
  }
}

export default PlayersList