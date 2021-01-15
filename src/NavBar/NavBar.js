import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <img className='mavs-logo' src='https://cdn.vox-cdn.com/thumbor/y0qu7f6FI0J4oct_Xuz8U8K93qc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13769196/dallas_mavericks_1994_2001.png' alt='basketball logo'/>
      <h1>MavsTracker</h1>
      <a target="_blank" rel="noopener noreferrer" href='https://www.mavs.com/schedule/full-schedule/'>
        <button class='mavs-schedule-btn'>View Mavericks Full Schedule</button>
      </a>
    </nav>
  )
}

export default NavBar