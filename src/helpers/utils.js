export const sortByDivisionRank = (teamA, teamB) =>
  teamA.divisionRank.rank < teamB.divisionRank.rank
    ? -1
    : teamA.divisionRank.rank > teamB.divisionRank.rank
    ? 1
    : 0

export const reduceTeamsToDivisions = (memo, { divisionRank, stats, team }) => {
  const { divisionName } = divisionRank
  if (memo[divisionName]) {
    memo[divisionName].push({ divisionRank, stats, team })
  } else {
    memo[divisionName] = [{ divisionRank, stats, team }]
  }
  return memo
}

export const reduceTeamsToWins = (memo, { team, stats }) =>
  Object.assign({}, memo, { [team.abbreviation]: stats.standings.wins })
