import './PlayerStats.css'
import { Component } from 'react'
import { getPlayerAverages } from '../apiCalls'

class PlayerStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0,
      rebounds: 0,
      assists: 0,
      fgpct: 0
    }
  }

  componentDidMount = async () => {
    await getPlayerAverages(this.props.id)
    .then(data => this.setState({
      points: data.data.pts,
      rebounds: data.data.reb,
      assists: data.data.ast,
      fgpct: data.data.fg_pct
    }))
  }

  render() {
    return(
      <section className='player-averages'>
        <p>PPG: {this.state.points}</p>
        <p>RPG: {this.state.rebounds}</p>
        <p>APG: {this.state.assists}</p>
        <p>FG%: {this.state.fgpct}</p>
      </section>
    )
  }
}

export default PlayerStats