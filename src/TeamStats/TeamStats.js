import './TeamStats.css'
import { Component } from 'react'
import { getTeamStats } from '../apiCalls'

class TeamStats extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      conference: '',
      division: '',
    }
  }

  componentDidMount = async () => {
    await getTeamStats(7)
    .then(data => this.setState({
      fullName: data.full_name, 
      conference: data.conference, 
      division: data.division 
    }))
  }

  render() {
    return(
      <section className='team-stats'>
        <p className='team-name'>{this.state.fullName}</p>
        <p>{this.state.conference}ern Conference</p>
        <p>{this.state.division} Division</p>
      </section>
    )
  }
}

export default TeamStats