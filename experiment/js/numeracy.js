// Numeracy scale (Lipkus et al., 2001)
// Depends on: helpers.js (buildNumeracyTextItem, buildScaleItem)

const numeracyItems = [
  buildNumeracyTextItem(
    `Imagine that we rolled a fair, six-sided die 1,000 times. Out of 1,000 rolls, how many times do you think the die would come up even (2, 4, or 6)?`,
    'gen_1'
  ),
  buildNumeracyTextItem(
    `In the BIG BUCKS LOTTERY, the chances of winning a $10 prize is 1%. What is your best guess about how many people would win a $10 prize if 1,000 people each buy a single ticket to BIG BUCKS?`,
    'gen_2'
  ),
  buildNumeracyTextItem(
    `In the ACME PUBLISHING SWEEPSTAKES, the chance of winning a car is 1 in 1,000. What percent of tickets to ACME PUBLISHING SWEEPSTAKES win a car?`,
    'gen_3'
  ),
  buildScaleItem(
    `How good are you at working with percentages?`,
    ['Not at all<br>good', '2', '3', '4', '5', 'Extremely<br>good'],
    'exp_1'
  ),
  buildScaleItem(
    `How good are you at working with fractions?`,
    ['Not at all<br>good', '2', '3', '4', '5', 'Extremely<br>good'],
    'exp_2'
  ),
  buildScaleItem(
    `How good are you at calculating a 15% tip?`,
    ['Not at all<br>good', '2', '3', '4', '5', 'Extremely<br>good'],
    'exp_3'
  ),
  buildScaleItem(
    `How good are you at figuring out how much a shirt will cost if it is 25% off?`,
    ['Not at all<br>good', '2', '3', '4', '5', 'Extremely<br>good'],
    'exp_4'
  ),
  buildScaleItem(
    `When reading the newspaper, how helpful do you find tables and graphs that are parts of a story?`,
    ['Not at all<br>helpful', '2', '3', '4', '5', 'Extremely<br>helpful'],
    'exp_5'
  ),
  buildScaleItem(
    `When people tell you the chance of something happening, do you prefer that they use words ("it rarely happens") or numbers ("there's a 1% chance")?`,
    ['Always prefer<br>words', '2', '3', '4', '5', 'Always prefer<br>numbers'],
    'exp_6'
  ),
  buildScaleItem(
    `When you hear a weather forecast, do you prefer predictions using percentages (e.g., "there will be a 20% chance of rain today") or predictions using only words (e.g., "there is a small chance of rain today")?`,
    ['Always prefer<br>percentages', '2', '3', '4', '5', 'Always prefer<br>words'],
    'num_use'
  ),
  buildScaleItem(
    `How often do you find numerical information to be useful?`,
    ['Never', '2', '3', '4', '5', 'Very often'],
    'num_useful'
  ),
];

const numeracyInstructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 600px; margin: auto; text-align: left;">
      <p>You will now be asked a series of questions about numbers and probability.</p>
      <p>For questions with a text box, enter your best numerical answer. For questions with a scale, select the option that best reflects your view.</p>
      <p>There are no right or wrong answers — just do your best.</p>
      <br>
      <p style="text-align: center;"><b>Press any key to begin.</b></p>
    </div>
  `
};

const numeracyTrials = [numeracyInstructions, ...jsPsych.randomization.shuffle(numeracyItems)];
