import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { getTeamStats } from '../apiCalls'
jest.mock('../apiCalls.js')
import '@testing-library/jest-dom'
import TeamStats from './TeamStats'

describe("TeamStats", () => {
  beforeEach(() => {
    getTeamStats.mockResolvedValueOnce({
      "id": 7,
      "abbreviation": "DAL",
      "city": "Dallas",
      "conference": "Weast",
      "division": "Southnorth",
      "full_name": "Test Team",
      "name": "Mavericks"
  })

    render(
      <MemoryRouter>
        <TeamStats />
      </MemoryRouter>
    )
  })

  it('should render a team name', () => {
    const teamName = screen.getByText('Test Team')

    expect(teamName).toBeInTheDocument()
  })

  it('should render a conference', () => {
    const teamConference = screen.getByText('Weastern Conference')

    expect(teamConference).toBeInTheDocument()
  })

  it('should render a division', () => {
    const teamDivision = screen.getByText('Southnorth Division')

    expect(teamDivision).toBeInTheDocument()
  })
})