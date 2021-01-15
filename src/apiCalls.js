const getTeamStats = (id) => {
  return fetch(`https://www.balldontlie.io/api/v1/teams/${id}`)
  .then(response => response.json())
}

const getPlayerStats = (id) => {
  return fetch(`https://balldontlie.io/api/v1/players/${id}`)
  .then(response => response.json())
}

export { getTeamStats, getPlayerStats }