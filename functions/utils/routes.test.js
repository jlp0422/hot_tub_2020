const {
  weeklyGamesRoute,
  seasonalGamesRoute,
  standingsRoute
} = require('./routes')

describe('weeklyGamesRoute', () => {
  test('returns the URL with the params', () => {
    expect(
      weeklyGamesRoute({
        seasonYear: '2019',
        seasonType: 'regular',
        weekNumber: 12
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/week/12/games.json`
    )
    expect(
      weeklyGamesRoute({
        seasonYear: '2020',
        seasonType: 'playoff',
        weekNumber: 18
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2020-playoff/week/18/games.json`
    )
    expect(
      weeklyGamesRoute({
        seasonYear: '2012-2013',
        seasonType: 'regular',
        weekNumber: 3
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2012-2013-regular/week/3/games.json`
    )
  })
})

describe('seasonalGamesRoute', () => {
  test('returns the URL with the params', () => {
    expect(
      seasonalGamesRoute({
        seasonYear: '2019',
        seasonType: 'regular',
        teams: undefined
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/games.json`
    )
    expect(
      seasonalGamesRoute({
        seasonYear: '2012-2013',
        seasonType: 'regular'
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2012-2013-regular/games.json`
    )
  })
  test('works with a string of teams', () => {
    expect(
      seasonalGamesRoute({
        seasonYear: '2019',
        seasonType: 'regular',
        teams: 'MIA'
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/games.json?team=MIA`
    )
    expect(
      seasonalGamesRoute({
        seasonYear: '2012-2013',
        seasonType: 'regular',
        teams: 'MIA,NYJ,GB'
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2012-2013-regular/games.json?team=MIA,NYJ,GB`
    )
    expect(
      seasonalGamesRoute({
        seasonYear: '2012-2013',
        seasonType: 'regular',
        teams: ''
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2012-2013-regular/games.json`
    )
  })
})

describe('standingsRoute', () => {
  test('returns the URL with the params', () => {
    expect(
      standingsRoute({
        seasonYear: '2019',
        seasonType: 'regular'
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/standings.json?stats=wins`
    )
    expect(
      standingsRoute({
        seasonYear: '2020',
        seasonType: 'playoff',
        teams: 'MIA,SEA'
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2020-playoff/standings.json?stats=wins&team=MIA,SEA`
    )
    expect(
      standingsRoute({
        seasonYear: '2012-2013',
        seasonType: 'regular',
        stats: 'wins,losses'
      })
    ).toBe(
      `https://api.mysportsfeeds.com/v2.1/pull/nfl/2012-2013-regular/standings.json?stats=wins,losses`
    )
  })
})
