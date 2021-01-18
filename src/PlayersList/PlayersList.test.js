import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getPlayerStats } from '../apiCalls'
jest.mock('../apiCalls.js')
import '@testing-library/jest-dom'
import App from '../App/App'

describe.only("PlayersList", () => {
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

    getPlayerStats.mockResolvedValueOnce({
      "id": 378,
      "first_name": "Kristaps",
      "height_feet": 7,
      "height_inches": 3,
      "last_name": "Porzingis",
      "position": "F-C",
      "team": {
          "id": 7,
          "abbreviation": "DAL",
          "city": "Dallas",
          "conference": "West",
          "division": "Southwest",
          "full_name": "Dallas Mavericks",
          "name": "Mavericks"
      },
      "weight_pounds": 240
    })

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('should render multiple player cards', () => {
    const playerOneName = screen.getByText('Luka Doncic')
    const playerTwoName = screen.getByText('Kristaps Porzingis')

    expect(playerOneName).toBeInTheDocument()
    expect(playerTwoName).toBeInTheDocument()
  })
})