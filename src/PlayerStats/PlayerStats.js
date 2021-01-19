import './PlayerStats.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'
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
      points: data.data[0].pts,
      rebounds: data.data[0].reb,
      assists: data.data[0].ast,
      fgpct: data.data[0].fg_pct
    }))
  }

  render() {
    return(
      <section className='player-stats-view'>
        <section className='player-averages'>
          <p>PPG: {this.state.points}</p>
          <p>RPG: {this.state.rebounds}</p>
          <p>APG: {this.state.assists}</p>
          <p>FG%: {this.state.fgpct}</p>
        </section>
        <button className='back-to-players-btn'>Add to Favorite Players</button>
        <Link to='/'>
          <button className='back-to-players-btn'>Back To All Players</button>
        </Link>
      </section>
    )
  }
}

export default PlayerStats