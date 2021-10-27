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
            values: [
              "This is an educational tool made in collaboration with Dr. Bruce Maxim from the University of Michigan.",
              "It's a twist on the popular Pac-Man game, used to create multiple agents(Pac-Man or ghost), write behavioural scripts in our new language PacLang and then observe and study the interactions of the agents with each other and the environment.",
              "Here's an example of a Pac-Man and a ghost with very basic scripts."
            ],
          },
          {
            type: 'image',
            src: 'pacman/general.webp',
            alt: 'Two agents: Pac-Man vs Ghost',
            width: 450
          }]
      },
      {
        type: '1-1',
        entries: [
          {
            type: 'text',
            values: [
              "The rules are a bit different than the original game, since there can be multiple Pac-Man agents and we also care about the performance of the ghost agents. " +
              "That's why, we decided on the following rules:",
              "<ul><li>Pac-Man agents get 10 points for each normal point.</li>" +
              "<li>Pac-Man agents get 50 points for each powerup. </li>" +
              "<li>Pac-Man agents get <i>half</i> the points of an edible ghost agent once they consume them.</li>" +
              "<li>Ghost agents get <i>half</i> the points of a consumed Pac-Man agent.</li>" +
              "<li>Agents can respawn infinitely, but they lose all their points everytime.</li>"+
              "<li>The game never ends. It's up to the user to decide when to stop.</li></ul>",
            ],
          }
        ]
      },
      {
        type: '2-1',
        entries: [
          {
            type: 'image',
            src: 'pacman/many_pacman.webp',
            alt: '10 agents competing in the same environment',
            width: 520
          },
          {
            type: 'image',
            src: 'pacman/scripting.webp',
            alt: 'Editing a script in PacLang',
            width: 520
          }
        ]
      }
    ]
  },
  'panzerio': {
    title: 'PanzerIO',
    sections: [
      {
        type: '2-1',
        entries: [
          {
            type: 'text',
            values: [
              "This project is a mobile IO game that I made during my internship in AMILCARTEK.",
              "I started from scratch and I didn't get to finish it due to the short internship period.",
              "(Portfolio Page still WIP)"
            ],
          },
          {
            type: 'image',
            src: 'panzerio/demo.webp',
            alt: 'Dev Testing Build: Infinite Health',
            width: 450
          }
        ]
      }
    ]
  }
}

export { projects, projectDetails };