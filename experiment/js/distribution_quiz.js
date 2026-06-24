// Distribution quiz section: participants select the plot that best describes each topic's real-world distribution.
// Depends on: distribution_quiz_stimuli.js, helpers.js

const distributionQuizSectionIntro = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 600px; margin: auto; text-align: left;">
      <h2>Distribution questions</h2>
      <p>In this next part of the study, you will be asked some questions about how everyday characteristics are distributed in the population.</p>
      <p>Before the questions begin, we will walk you through a short tutorial to help you read and understand the types of graphs you will be seeing.</p>
      <br>
      <p style="text-align: center;"><b>Press any key to begin the tutorial.</b></p>
    </div>
  `
};

const quizInstructionScreen1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 650px; margin: auto; text-align: left;">
      <h2 style="text-align: center;">How to read the graphs</h2>
      <p>Each graph shows how common different values are in a population.
         The <strong>height of each bar</strong> tells you how common that value is —
         a taller bar means that value occurs more often.</p>
      <img src="../stimuli/figures/tutorial/tutorial_uniform.png"
           style="width: 100%; margin: 16px 0; border-radius: 4px;">
      <p>For example, this graph shows which day of the week people were born on.
         Because any day is equally likely, all the bars are roughly the same height.
         This is called a <strong>uniform</strong> distribution.</p>
      <br>
      <p style="text-align: center;"><b>Press any key to continue.</b></p>
    </div>
  `
};

const quizInstructionScreen2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 1000px; margin: auto; text-align: left;">
      <h2 style="text-align: center;">Distributions can have different shapes</h2>
      <p>Not all distributions look the same. Here are three other common shapes:</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 28px; margin: 20px 0;">
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_normal.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Bell-shaped</strong><br>
             <span style="font-size: 0.9em;">Most values cluster around the middle, with fewer at the extremes.</span></p>
        </div>
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_right_skewed.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Right-skewed</strong><br>
             <span style="font-size: 0.9em;">Most values are low, with a long tail stretching to the right.</span></p>
        </div>
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_left_skewed.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Left-skewed</strong><br>
             <span style="font-size: 0.9em;">Most values are high, with a long tail stretching to the left.</span></p>
        </div>
      </div>
      <p style="text-align: center;"><b>Press any key to continue.</b></p>
    </div>
  `
};

const quizInstructionScreen3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 750px; margin: auto; text-align: left;">
      <h2 style="text-align: center;">From bars to curves</h2>
      <p>The graphs in this section look a little different. Instead of separate bars,
         they use <strong>smooth curves</strong>. However, the shapes work <b>exactly the same way</b>:
         the higher the curve, the more common that value.</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 20px 0;">
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_continuous_uniform.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Uniform</strong></p>
        </div>
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_continuous_normal.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Bell-shaped</strong></p>
        </div>
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_continuous_right_skewed.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Right-skewed</strong></p>
        </div>
        <div style="text-align: center;">
          <img src="../stimuli/figures/tutorial/tutorial_continuous_left_skewed.png"
               style="width: 100%; border-radius: 4px;">
          <p style="margin-top: 8px;"><strong>Left-skewed</strong></p>
        </div>
      </div>
      <p style="text-align: center;"><b>Press any key to continue.</b></p>
    </div>
  `
};

const distributionQuizIntro = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width: 600px; margin: auto; text-align: left;">
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
  quizInstructionScreen2,
  quizInstructionScreen3,
  distributionQuizIntro,
  ...jsPsych.randomization.shuffle(
    distributionQuizItems.map(item =>
      buildDistributionQuizTrial(item.prompt, item.options, item.topic)
    )
  ),
];
