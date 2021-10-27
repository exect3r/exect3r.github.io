const projects = [
  {
    id: 'pac-man',
    name: 'Pac-Man',
    description:
      'A cognitive behaviour study tool built into the famous Pac-Man game used to create, define and observe agents (pacmans and ghosts) while they interact in a randomly generated map.',
    stack: ['Unity', 'C#', 'Irony Framework'],
    types: ['Game Dev'],
  },
  {
    id: 'panzerio',
    name: 'Panzerio',
    description:
      'An io mobile game in which you play as a tank against other players (or bots). Your goal is to earn as many points as possible in a limited time by destroying other players\' tanks. You can also upgrade your tank or choose a different class.',
    stack: ['Unity', 'C#', 'Android'],
    types: ['Game Dev', 'Mobile'],
  },
]

const projectDetails = {
  'pac-man': {
    title: 'Pac-Man',
    sections: [
      {
        type: '2-1',
        entries: [
          {
            type: 'text',
            gridW: 2,
            gridH: 1,
            values: [
              'A cognitive behaviour study tool built into the famous Pac-Man game used to create, define and observe agents (pacmans and ghosts) while they interact in a randomly generated map.',
              'A cognitive behaviour study tool built into the famous Pac-Man game used to create, define and observe agents (pacmans and ghosts) while they interact in a randomly generated map.'
            ],
          },
          {
            type: 'image',
            src: 'pacman/general.gif',
            width: 500
          }]
      },
      {
        type: '2-1',
        entries: [
          {
            type: 'image',
            src: 'pacman/general.gif',
            width: 500
          },
          {
            type: 'text',
            gridW: 2,
            gridH: 1,
            values: ['A cognitive behaviour study tool built into the famous Pac-Man game used to create, define and observe agents (pacmans and ghosts) while they interact in a randomly generated map.'],
          }
        ]
      }
    ]
  }
}

export { projects, projectDetails };