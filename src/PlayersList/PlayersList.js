import './PlayersList.css'
import { Component } from 'react'

class PlayersList extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  render() {
    return(
      <section className='players-list'>
        <p>All Mavs players go here</p>
        {/* <PlayerCard /> */}
      </section>
    )
  }
}

export default PlayersList