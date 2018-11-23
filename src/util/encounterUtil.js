const levelToDifficultMap = {
  EASY: [
    25,
    50,
    75,
    125,
    250,
    300,
    350,
    450,
    550,
    600,
    800,
    1000,
    1100,
    1250,
    1400,
    1600,
    2000,
    2100,
    2400,
    2800
  ],
  MEDIUM: [
    50,
    100,
    150,
    250,
    500,
    600,
    750,
    900,
    1100,
    1200,
    1600,
    2000,
    2200,
    2500,
    2800,
    3200,
    3900,
    4200,
    4900,
    5700
  ],
  HARD: [
    150,
    225,
    375,
    750,
    900,
    1100,
    1400,
    1600,
    1900,
    2400,
    3000,
    3400,
    3800,
    4300,
    4800,
    5900,
    6300,
    7300
  ],
  DEADLY: [
    200,
    400,
    500,
    1100,
    1400,
    1700,
    2100,
    2400,
    2800,
    3600,
    4500,
    5100,
    5700,
    6400,
    7200,
    8800,
    9500,
    10900
  ]
}

const getChallengeRatingFromXp = xp => {
  if (xp >= 13000) {
    return 15
  } else if (xp >= 11500) {
    return 14
  } else if (xp >= 10000) {
    return 13
  } else if (xp >= 8400) {
    return 12
  } else if (xp >= 7200) {
    return 11
  } else if (xp >= 5900) {
    return 10
  } else if (xp >= 5000) {
    return 9
  } else if (xp >= 3900) {
    return 8
  } else if (xp >= 2900) {
    return 7
  } else if (xp >= 2300) {
    return 6
  } else if (xp >= 1800) {
    return 5
  } else if (xp >= 1100) {
    return 4
  } else if (xp >= 700) {
    return 3
  } else if (xp >= 450) {
    return 2
  } else if (xp >= 200) {
    return 1
  } else if (xp >= 100) {
    return 0.5
  } else if (xp >= 50) {
    return 0.25
  } else if (xp >= 25) {
    return 0.15
  } else {
    return 0
  }
}

const createRandomEncounterTemplate = () => {
  let templates = [
    [1],
    [1, 2],
    [1, 5],
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 3],
    [2, 2],
    [2, 4],
    [8]
  ]

  let groups = templates[Math.floor(Math.random() * templates.length)]

  let total = groups.reduce((a, b) => a + b)
  return {
    total: total,
    groups: groups
  }
}

const getMultiplier = (playercount, n) => {
  let m = 1
  if (n === 2) {
    m = 1.5
  } else if (n >= 3 && n <= 6) {
    m = 2
  } else if (n >= 7 && n <= 10) {
    m = 2.5
  } else if (n >= 11 && n <= 14) {
    m = 3
  } else if (n >= 15) {
    m = 4
  }

  if (playercount < 3) {
    m++
  } else if (playercount > 5) {
    m--
  }

  return m
}

export {
  levelToDifficultMap,
  getMultiplier,
  createRandomEncounterTemplate,
  getChallengeRatingFromXp
}
