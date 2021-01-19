import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPlayerStats, getTeamStats, getPlayerAverages } from '../apiCalls'
jest.mock('../apiCalls.js')
import '@testing-library/jest-dom'
import App from '../App/App'

describe("App", () => {
  beforeEach(() => {
    getPlayerStats.mockResolvedValueOnce({
      "id": 73,
      "first_name": "Tyler",
      "height_feet": 6,
      "height_inches": 7,
      "last_name": "Bey",
      "position": "F-G",
      "team": {
          "id": 7,
          "abbreviation": "DAL",
          "city": "Dallas",
          "conference": "West",
          "division": "Southwest",
          "full_name": "Dallas Mavericks",
          "name": "Mavericks"
      },
      "weight_pounds": 218
    })

    getTeamStats.mockResolvedValueOnce({
      "id": 7,
      "abbreviation": "DAL",
      "city": "Dallas",
      "conference": "Weast",
      "division": "Southnorth",
      "full_name": "Test Team",
      "name": "Mavericks"
    })

    getPlayerAverages.mockResolvedValueOnce({
      "data": [
        {
          "games_played":37,
          "player_id":73,
          "season":2020,
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
        <App />
      </MemoryRouter>
    )
  })

  it('should load a player\'s stats when their card is clicked', async () => {
    const playerCard = screen.getByText('Tyler Bey')
    fireEvent.click(playerCard)
    const ppg = screen.getByText('PPG: 0')

    expect(ppg).toBeInTheDocument()
  })
})