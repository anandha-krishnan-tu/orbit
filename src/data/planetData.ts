export const planetData = {
  mercury: {
    id: "mercury",
    name: "Mercury",
    texture: "/mercury.jpg",

    orbitRadius: 4,
    orbitSpeed: 0.6,

    size: 0.114,

    rotationSpeed: 0.015,

    description:
      "The smallest planet in our solar system and the closest to the Sun.",

    facts: [
      "Closest planet to the Sun",
      "Smallest planet in the Solar System",
      "A year lasts only 88 Earth days",
    ],

    glowColor: "#bdbdbd",
  },

  venus: {
    id: "venus",
    name: "Venus",
    texture: "/venus.jpg",

    orbitRadius: 5,
    orbitSpeed: 0.4,

    size: 0.25,

    rotationSpeed: 0.008,

    description:
      "The hottest planet in the Solar System due to its thick atmosphere.",

    facts: [
      "Hottest planet",
      "Similar size to Earth",
      "Rotates very slowly",
    ],

    glowColor: "#f5c16c",
  },

  earth: {
    id: "earth",
    name: "Earth",
    texture: "/earth.jpg",

    orbitRadius: 6.5,
    orbitSpeed: 0.2,

    size: 0.3,

    rotationSpeed: 0.04,

    moon: {
      texture: "/moon.jpg",
      size: 0.1,
      orbitRadius: 0.5,
      orbitSpeedMultiplier: 13.37,
      rotationSpeed: 0.01,
    },

    description:
      "Our home planet and the only known world that supports life.",

    facts: [
      "71% covered by water",
      "Only known planet with life",
      "Has one natural satellite",
    ],

    glowColor: "#4ea8ff",
  },

  mars: {
    id: "mars",
    name: "Mars",
    texture: "/mars.jpg",

    orbitRadius: 8,
    orbitSpeed: 0.15,

    size: 0.159,

    rotationSpeed: 0.035,

    description:
      "Known as the Red Planet and one of humanity's future exploration targets.",

    facts: [
      "Called the Red Planet",
      "Home to Olympus Mons",
      "Target for future human missions",
    ],

    glowColor: "#ff5a36",
  },

  jupiter: {
    id: "jupiter",
    name: "Jupiter",
    texture: "/jupiter.jpg",

    orbitRadius: 12,
    orbitSpeed: 0.08,

    size: 1.5,

    rotationSpeed: 0.08,

    description:
      "The largest planet in the Solar System, famous for the Great Red Spot.",

    facts: [
      "Largest planet",
      "Great Red Spot storm",
      "Has dozens of moons",
    ],

    glowColor: "#d6a06a",
  },

  saturn: {
    id: "saturn",
    name: "Saturn",
    texture: "/saturn.jpg",

    orbitRadius: 18,
    orbitSpeed: 0.05,

    size: 1.3,

    rotationSpeed: 0.07,

    description:
      "Known for its spectacular ring system visible from great distances.",

    facts: [
      "Most famous ring system",
      "Gas giant",
      "Less dense than water",
    ],

    glowColor: "#f2d58a",
  },

  uranus: {
    id: "uranus",
    name: "Uranus",
    texture: "/uranus.jpg",

    orbitRadius: 22,
    orbitSpeed: 0.03,

    size: 0.6,

    rotationSpeed: 0.05,

    description:
      "An ice giant that rotates on its side compared to other planets.",

    facts: [
      "Rotates sideways",
      "Ice giant",
      "Blue-green appearance",
    ],

    glowColor: "#79e2ff",
  },

  neptune: {
    id: "neptune",
    name: "Neptune",
    texture: "/neptune.jpg",

    orbitRadius: 24,
    orbitSpeed: 0.02,

    size: 0.6,

    rotationSpeed: 0.05,

    description:
      "The outermost major planet, famous for powerful winds and storms.",

    facts: [
      "Farthest major planet",
      "Fastest winds in the Solar System",
      "Deep blue appearance",
    ],

    glowColor: "#3d7eff",
  },
} as const;