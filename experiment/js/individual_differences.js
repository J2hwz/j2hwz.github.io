// Assembles individual differences trial arrays from stimuli and helpers.
// Depends on: helpers.js, individual_differences_stimuli.js

const nfcTrials = jsPsych.randomization.shuffle(nfcItems).map(item => buildLikertItem(item, 'nfc'));
const nfcCheckAt = Math.floor(Math.random() * (nfcTrials.length + 1));
nfcTrials.splice(nfcCheckAt, 0, buildLikertAttentionCheck(nfcAttentionTarget));

const scTrials = jsPsych.randomization.shuffle(scItems).map(item => buildLikertItem(item, 'social_confidence'));
const scCheckAt = Math.floor(Math.random() * (scTrials.length + 1));
scTrials.splice(scCheckAt, 0, buildLikertAttentionCheck(scAttentionTarget));

const granTrials = jsPsych.randomization.shuffle(granItems).map(item => buildLikertItem(item, 'grandiosity'));
const granCheckAt = Math.floor(Math.random() * (granTrials.length + 1));
granTrials.splice(granCheckAt, 0, buildLikertAttentionCheck(granAttentionTarget));

const idInstructions = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 600px; margin: auto; text-align: left;">
      <p>You will now be shown a series of questions.</p>
      <p>Some are statements about yourself to rate on a scale; others are numerical questions where you give your best answer. Please read each question carefully.</p>
      <br>
      <p style="text-align: center;"><b>Press any key to begin.</b></p>
    </div>
  `
};

const [id1, id2, id3] = jsPsych.randomization.shuffle([nfcTrials, scTrials, granTrials]);
const idTrials = [idInstructions, ...id1, ...id2, ...id3];
