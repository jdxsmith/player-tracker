import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPlayerStats } from '../apiCalls'
jest.mock('../apiCalls.js')
import '@testing-library/jest-dom'
import PlayerCard from './PlayerCard'

describe("PlayerCard", () => {
  beforeEach(() => {
    getPlayerStats.mockResolvedValueOnce({
      "id": 132,
      "first_name": "Luka",
      "height_feet": 6,
      "height_inches": 7,
      "last_name": "Doncic",
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

    render(
      <MemoryRouter>
        <PlayerCard />
      </MemoryRouter>
    )
  })

  it('player card should have a name', () => {
    const playerName = screen.getByText('Luka Doncic')

    expect(playerName).toBeInTheDocument()
  })

  it('player card should have a position', () => {
    const playerPosition = screen.getByText('F-G')

    expect(playerPosition).toBeInTheDocument()
  })
})