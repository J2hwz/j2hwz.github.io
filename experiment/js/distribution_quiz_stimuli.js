// Stimuli for the distribution quiz section.
// Each item has a topic, a prompt, and 4 image options.
// The image value attribute stores the distribution identifier for data analysis.

const distributionQuizItems = [
  {
    topic: 'birthday',
    prompt: 'Which of the following best describes how birthdays are distributed across the days of the year?',
    options: [
      { image: '../stimuli/figures/birthday/birthday_uniform.png',    value: 'uniform'    },
      { image: '../stimuli/figures/birthday/birthday_normal.png',     value: 'normal'     },
      { image: '../stimuli/figures/birthday/birthday_power.png',      value: 'power'      },
      { image: '../stimuli/figures/birthday/birthday_noisy.png', value: 'noisy_uniform' },
    ],
  },
  {
    topic: 'age',
    prompt: 'Which of the following best describes how ages (0–84) are distributed in the general population?',
    options: [
      { image: '../stimuli/figures/age/age_uniform.png',     value: 'uniform'     },
      { image: '../stimuli/figures/age/age_power.png',       value: 'power'       },
      { image: '../stimuli/figures/age/age_linear_right.png',  value: 'linear_right'  },
      { image: '../stimuli/figures/age/age_linear_left.png', value: 'linear_left' },
    ],
  },
  {
    topic: 'names',
    prompt: 'Which of the following best describes how frequently first names appear in the population?',
    options: [
      { image: '../stimuli/figures/names/names_power.png',        value: 'power'        },
      { image: '../stimuli/figures/names/names_uniform.png',      value: 'uniform'      },
      { image: '../stimuli/figures/names/names_linear_right.png', value: 'linear_right' },
      { image: '../stimuli/figures/names/names_right.png',        value: 'beta_right'        },
    ],
  },
  {
    topic: 'cities',
    prompt: 'Which of the following best describes how city of origin is distributed across UK cities?',
    options: [
      { image: '../stimuli/figures/cities/cities_power.png',        value: 'power'        },
      { image: '../stimuli/figures/cities/cities_uniform.png',      value: 'uniform'      },
      { image: '../stimuli/figures/cities/cities_linear_right.png', value: 'linear_right' },
      { image: '../stimuli/figures/cities/cities_beta_right.png',   value: 'beta_right'   },
    ],
  },
  {
    topic: 'siblings',
    prompt: 'Which of the following best describes how the number of siblings is distributed in the population?',
    options: [
      { image: '../stimuli/figures/siblings/siblings_power.png',             value: 'power'             },
      { image: '../stimuli/figures/siblings/siblings_noisy_uniform.png',     value: 'noisy_uniform'     },
      { image: '../stimuli/figures/siblings/siblings_normal.png',            value: 'normal'            },
      { image: '../stimuli/figures/siblings/siblings_actual.png', value: 'actual' },
    ],
  },
];
