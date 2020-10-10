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
    team: {
      abbreviation: 'MIA',
      officialLogoImageSrc: 'path/to/logo',
      teamColoursHex: ['abc'],
      city: 'Miami',
      name: 'Dolphins'
    },
    stats: { standings: { wins: 5 } },
    divisionRank: { rank: 2 }
  }
  it('adds a key/value of team abbrev and total wins', () => {
    expect(reduceTeamsToWins({}, team)).toEqual({
      MIA: {
        wins: 5,
        logo: 'path/to/logo.svg',
        colors: ['abc'],
        divisionRank: 2,
        fullName: 'Miami Dolphins'
      }
    })
    expect(
      reduceTeamsToWins(
        {
          KC: {
            wins: 12,
            logo: 'path/to/logo.svg',
            colors: ['abc'],
            divisionRank: 1,
            fullName: 'Kansas City Chiefs'
          }
        },
        team
      )
    ).toEqual({
      MIA: {
        wins: 5,
        logo: 'path/to/logo.svg',
        colors: ['abc'],
        divisionRank: 2,
        fullName: 'Miami Dolphins'
      },
      KC: {
        wins: 12,
        logo: 'path/to/logo.svg',
        colors: ['abc'],
        divisionRank: 1,
        fullName: 'Kansas City Chiefs'
      }
    })
  })
})

describe('reduceSelectionsToTotalWins', () => {
  const winsByTeam = { MIA: { wins: 5 }, KC: { wins: 12 }, SEA: { wins: 9 } }
  it('takes a winsByTeam map and sums the wins', () => {
    const getWins = reduceSelectionsToTotalWins(winsByTeam)
    expect(getWins(0, 'MIA')).toBe(5)
    expect(getWins(4, 'KC')).toBe(16)
    expect(getWins(11, 'SEA')).toBe(20)
  })
})
