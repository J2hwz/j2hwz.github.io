// Distribution quiz section: participants select the plot that best describes each topic's real-world distribution.
// Depends on: distribution_quiz_stimuli.js, helpers.js

const distributionQuizSectionIntro = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="text-align: left;">
      <h2>Reading graphs</h2>
      <p>In this next part of the study, you will be asked some questions about how common different things are among people.</p>
      <p>Before the questions begin, we will walk you through a short tutorial to help you read and understand the types of graphs you will be seeing.</p>
      <br>
      <p style="text-align: center;"><b>Press any key to begin the tutorial.</b></p>
    </div>
  `
};

const quizInstructionScreen1 = buildDelayedInstructionScreen(`
  <div style="text-align: left;">
    <h2 style="text-align: center;">How to read the graphs</h2>
    <p>Each graph shows a <b>distribution</b>: patterns of how common each value is in a population.
       The <strong>height of each bar</strong> tells you how common that value is —
       a taller bar means that value occurs more often.</p>
    <img src="${DISTRIBUTION_FIGURES_PATH}/tutorial/tutorial_uniform.png"
         style="display: block; width: 80%; margin: 16px auto; border-radius: 4px;">
    <p>For example, this graph shows which day of the week people were born on.
       Because each day is equally likely, all the bars are roughly the same height.
       This is called a <strong>uniform</strong> distribution.</p>
    <br>
    <p style="text-align: center;"><b>Press any key to continue.</b></p>
  </div>
`);

const bellShapedInstructionScreen = buildDelayedInstructionScreen(`
  <div style="text-align: left;">
    <h2 style="text-align: center;">Distributions can have different shapes</h2>
    <p>Not all distributions look the same. This one is <b>bell-shaped</b>:</p>
    <img src="${DISTRIBUTION_FIGURES_PATH}/tutorial/tutorial_normal.png"
         style="display: block; width: 80%; margin: 16px auto; border-radius: 4px;">
    <p>Most values cluster around the middle, with fewer at the extremes.</p>
    <br>
    <p style="text-align: center;"><b>Press any key to continue.</b></p>
  </div>
`);

// Three worked examples each of right- and left-skewed distributions, built from different underlying
// mechanisms (linear, power, beta) to show that the same skew pattern can look visually different.
const SKEW_MECHANISMS = ['linear', 'power', 'beta'];

const SKEW_DIRECTIONS = [
  { key: 'right', label: 'Right-skewed', description: 'most values are low, but a small number of values are high' },
  { key: 'left', label: 'Left-skewed', description: 'most values are high, but a small number of values are low' },
];

const skewExampleInstructionScreens = SKEW_DIRECTIONS.flatMap(({ key, label, description }) =>
  SKEW_MECHANISMS.map((mechanism, i) => buildDelayedInstructionScreen(`
    <div style="text-align: left;">
      <h2 style="text-align: center;">${label} distributions (example ${i + 1} of ${SKEW_MECHANISMS.length})</h2>
      <p>Skewed distributions can be built in different ways, but the same pattern holds:
         <b>${description}</b>.</p>
      <img src="${DISTRIBUTION_FIGURES_PATH}/tutorial/tutorial_${key}_skewed_${mechanism}.png"
           style="display: block; width: 80%; margin: 16px auto; border-radius: 4px;">
      <br>
      <p style="text-align: center;"><b>Press any key to continue.</b></p>
    </div>
  `))
);

const distributionQuizIntro = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="text-align: left;">
      <p>You will now see five questions. For each one, select the plot that you think best
         describes how that characteristic is distributed in the real world.</p>
      <br>
      <p style="text-align: center;"><b>Press any key to begin.</b></p>
    </div>
  `
};

const distributionQuiz = [
  distributionQuizSectionIntro,
  quizInstructionScreen1,
  bellShapedInstructionScreen,
  ...skewExampleInstructionScreens,
  distributionQuizIntro,
  ...jsPsych.randomization.shuffle(
    distributionQuizItems.map(item =>
      buildDistributionQuizTrial(item.prompt, item.options, item.topic)
    )
  ),
];
