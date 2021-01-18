import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import NavBar from './NavBar'

describe("NavBar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )
  })

  it('should render a title', () => {
    const title = screen.getByText('MavsTracker')

    expect(title).toBeInTheDocument()
  })

  it('should render a team logo', () => {
    const mavsLogo = screen.getByAltText('throwback mavs logo')

    expect(mavsLogo).toBeInTheDocument()
  })

  it('should render a button that takes the user to the team schedule', () => {
    const scheduleButton = screen.getByText('View Mavericks Full Schedule')

    expect(scheduleButton).toBeInTheDocument()
  })
})