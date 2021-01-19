import './PlayerCard.css'
import { Component } from 'react'
import { getPlayerStats } from '../apiCalls'
import { Link } from 'react-router-dom'

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
      <Link to={`/${this.props.id}`} style={{ textDecoration: 'none' }}>
        <article className='player-card'>
          <div>
            <p>{`${this.state.firstName} ${this.state.lastName}`}</p>
            <p>{this.state.position}</p>
          </div>
          <div className='player-card-number'>
            <p>{`#${this.props.number}`}</p>
          </div>
        </article>
      </Link>
    )
  }
}

export default PlayerCard