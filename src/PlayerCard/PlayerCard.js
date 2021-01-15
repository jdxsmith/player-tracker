import './PlayerCard.css'
import { Component } from 'react'
import { getPlayerStats } from '../apiCalls'

class PlayerCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      position: ''
    }
  }

  componentDidMount = async () => {
    await getPlayerStats(this.props.id)
    .then(data => this.setState({
      firstName: data.first_name, 
      lastName: data.last_name, 
      position: data.position 
    }))
  }

  render() {
    return(
      <article className='player-card'>
        <p>{`${this.state.firstName} ${this.state.lastName}`}</p>
        <p>{this.state.position}</p>
      </article>
    )
  }
}

export default PlayerCard