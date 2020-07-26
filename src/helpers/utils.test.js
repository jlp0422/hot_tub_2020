import {
  sortByDivisionRank,
  reduceTeamsToDivisions,
  reduceTeamsToWins,
  reduceSelectionsToTotalWins
} from './utils'

describe('sortByDivisionRank', () => {
  const rankTwo = { divisionRank: { rank: 2 } }
  const rankThree = { divisionRank: { rank: 3 } }
  it('returns -1 if teamA rank is < teamB rank', () => {
    expect(sortByDivisionRank(rankTwo, rankThree)).toBe(-1)
  })
  it('returns 1 if teamA rank is > teamB rank', () => {
    expect(sortByDivisionRank(rankThree, rankTwo)).toBe(1)
  })
  it('returns 0 if teamA rank is === teamB rank', () => {
    expect(sortByDivisionRank(rankThree, rankThree)).toBe(0)
  })
})

describe('reduceTeamsToDivisions', () => {
  const team = {
    divisionRank: { divisionName: 'East' },
    stats: { wins: 4 },
    team: { abbreviation: 'MIA' }
  }
  it('returns an object of divisiona and matching teams', () => {
    expect(reduceTeamsToDivisions({}, team)).toEqual({
      East: [team]
    })
    expect(reduceTeamsToDivisions({ East: ['team 1'] }, team)).toEqual({
      East: ['team 1', team]
    })
  })
})

describe('reduceTeamsToWins', () => {
  const team = {
    team: { abbreviation: 'MIA' },
    stats: { standings: { wins: 5 } }
  }
  it('adds a key/value of team abbrev and total wins', () => {
    expect(reduceTeamsToWins({}, team)).toEqual({
      MIA: 5
    })
    expect(reduceTeamsToWins({ KC: 12 }, team)).toEqual({
      MIA: 5,
      KC: 12
    })
  })
})

describe('reduceSelectionsToTotalWins', () => {
  const winsByTeam = { MIA: 5, KC: 12, SEA: 9 }
  it('takes a winsByTeam map and sums the wins', () => {
    const getWins = reduceSelectionsToTotalWins(winsByTeam)
    expect(getWins(0, 'MIA')).toBe(5)
    expect(getWins(4, 'KC')).toBe(16)
    expect(getWins(11, 'SEA')).toBe(20)
  })
})
