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
  Object.assign({}, memo, {
    [team.abbreviation]: {
      wins: stats.standings.wins,
      logo: `${team.officialLogoImageSrc}.svg`
    }
  })

export const reduceSelectionsToTotalWins = winsByTeam => (
  totalWins,
  teamAbbrev
) => (totalWins += winsByTeam[teamAbbrev].wins)

export const getDidTeamPlayInGame = teamAbbrev => game =>
  game.schedule.awayTeam.abbreviation === teamAbbrev ||
  game.schedule.homeTeam.abbreviation === teamAbbrev

export const getWinnerScheduleForTeam = teamAbbrev => (
  memo,
  { schedule, score }
) => {
  const isHomeTeam = schedule.homeTeam.abbreviation === teamAbbrev
  const isWinner = isHomeTeam
    ? score.homeScoreTotal > score.awayScoreTotal
    : score.homeScoreTotal < score.awayScoreTotal
  return Object.assign({}, memo, { [schedule.week]: isWinner })
}
