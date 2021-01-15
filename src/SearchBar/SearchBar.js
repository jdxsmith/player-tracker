import './SearchBar.css'
import { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <form className='player-search-form'>
        <p>View the latest stats for any of your favorite NBA players!</p>
        <input 
          className='name-search-bar'
          type='text'
          placeholder='Search for a player'
          name='playerName'
        />
        <button className='player-search-btn'>Search</button>
      </form>
    )
  }
}

export default SearchBar