// Stimuli for the distribution quiz section.
// Each item has a topic, a prompt, and 4 image options.
// The image value attribute stores the distribution identifier for data analysis.

const DISTRIBUTION_FIGURES_PATH = './assets/distribution_figures';

const distributionQuizItems = [
  {
    topic: 'birthday',
    prompt: 'Which of the following best describes how common different birthdays are across the days of the year?',
    options: [
      { image: `${DISTRIBUTION_FIGURES_PATH}/birthday/birthday_uniform.png`,     value: 'uniform'     },
      { image: `${DISTRIBUTION_FIGURES_PATH}/birthday/birthday_normal.png`,      value: 'normal'      },
      { image: `${DISTRIBUTION_FIGURES_PATH}/birthday/birthday_linear_left.png`, value: 'linear_left' },
      { image: `${DISTRIBUTION_FIGURES_PATH}/birthday/birthday_linear_right.png`, value: 'linear_right' },
    ],
  },
  {
    topic: 'age',
    prompt: 'Which of the following best describes how common different ages (0–84) are in the general population?',
    options: [
      { image: `${DISTRIBUTION_FIGURES_PATH}/age/age_uniform.png`,      value: 'uniform'      },
      { image: `${DISTRIBUTION_FIGURES_PATH}/age/age_normal.png`,       value: 'normal'       },
      { image: `${DISTRIBUTION_FIGURES_PATH}/age/age_linear_right.png`, value: 'linear_right' },
      { image: `${DISTRIBUTION_FIGURES_PATH}/age/age_linear_left.png`,  value: 'linear_left'  },
    ],
  },
  {
    topic: 'names',
    prompt: 'Which of the following best describes how common different first names are in the general population?',
    options: [
      { image: `${DISTRIBUTION_FIGURES_PATH}/names/names_power.png`,        value: 'power'        },
      { image: `${DISTRIBUTION_FIGURES_PATH}/names/names_uniform.png`,      value: 'uniform'      },
      { image: `${DISTRIBUTION_FIGURES_PATH}/names/names_linear_right.png`, value: 'linear_right' },
      { image: `${DISTRIBUTION_FIGURES_PATH}/names/names_right.png`,        value: 'beta_right'        },
    ],
  },
  {
    topic: 'cities',
    prompt: 'Which of the following best describes how population is spread across UK cities?',
    options: [
      { image: `${DISTRIBUTION_FIGURES_PATH}/cities/cities_power.png`,        value: 'power'        },
      { image: `${DISTRIBUTION_FIGURES_PATH}/cities/cities_uniform.png`,      value: 'uniform'      },
      { image: `${DISTRIBUTION_FIGURES_PATH}/cities/cities_linear_right.png`, value: 'linear_right' },
      { image: `${DISTRIBUTION_FIGURES_PATH}/cities/cities_beta_right.png`,   value: 'beta_right'   },
    ],
  },
  {
    topic: 'siblings',
    prompt: 'Which of the following best describes how many siblings people have?',
    options: [
      { image: `${DISTRIBUTION_FIGURES_PATH}/siblings/siblings_uniform.png`,         value: 'uniform'      },
      { image: `${DISTRIBUTION_FIGURES_PATH}/siblings/siblings_linear_decrease.png`, value: 'linear_left'  },
      { image: `${DISTRIBUTION_FIGURES_PATH}/siblings/siblings_linear_increase.png`, value: 'linear_right' },
      { image: `${DISTRIBUTION_FIGURES_PATH}/siblings/siblings_actual.png`,          value: 'actual'       },
    ],
  },
];
