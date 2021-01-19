import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPlayerAverages } from '../apiCalls'
jest.mock('../apiCalls.js')
import '@testing-library/jest-dom'
import PlayerStats from './PlayerStats'

describe("PlayerStats", () => {
  beforeEach(() => {
    getPlayerAverages.mockResolvedValueOnce({
      "data": [
        {
          "games_played":37,
          "player_id":237,
          "season":2018,
          "min":"34:46",
          "fgm":9.92,
          "fga":19.22,
          "fg3m":2.05,
          "fg3a":5.73,
          "ftm":5.08,
          "fta":7.54,
          "oreb":0.95,
          "dreb":7.59,
          "reb":8.54,
          "ast":7.38,
          "stl":1.32,
          "blk":0.65,
          "turnover":3.49,
          "pf":1.59,
          "pts":26.97,
          "fg_pct":0.516,
          "fg3_pct":0.358,
          "ft_pct":0.674
        }
      ]
    })

    render(
      <MemoryRouter>
        <PlayerStats />
      </MemoryRouter>
    )
  })

  it('should render a player\'s stats', () => {
    const ppg = screen.getByText('PPG: 26.97')
    const rpg = screen.getByText('RPG: 8.54')
    const apg = screen.getByText('APG: 7.38')

    expect(ppg).toBeInTheDocument()
    expect(rpg).toBeInTheDocument()
    expect(apg).toBeInTheDocument()
  })
})