import './FavoritePlayers.css'
import { Link } from 'react-router-dom'

const FavoritePlayers = () => {
  const getFavoritePlayers = () => {
    return(JSON.parse(localStorage.getItem('favoritePlayers')))
  }

  const displayPlayers = (players) => {
    return players.map(player => {
      return <p>{`${player.name}`}</p>
    })
  }

  return (
    <section className="favorite-players">
      <h2>Favorite Players</h2>
      <article className="user-favs">
        {getFavoritePlayers() ? displayPlayers(getFavoritePlayers()) : <p>You don't have any favorite players yet!</p>}
      </article>
      <Link to='/'>
        <button className='return-to-home-btn'>Return to All Players</button>
      </Link>
    </section>
  )
}

export default FavoritePlayers