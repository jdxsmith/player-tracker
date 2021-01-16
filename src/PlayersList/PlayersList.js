import './PlayersList.css'
import PlayerCard from '../PlayerCard/PlayerCard'

const PlayersList = (props) => {
  return(
    <section className='players-list'>
      {props.players.map(player => {
        return <PlayerCard id={player.id} key={player.id}/>
      })}
    </section>
  )
}

export default PlayersList