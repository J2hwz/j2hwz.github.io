// Helper functions for constructing jsPsych trial blocks.
// Depends on: stimuli.js (for note/template variables)

function buildGroupSizeBlock(templates, percentages) {
  percentages = jsPsych.randomization.shuffle(percentages);
  return jsPsych.randomization.shuffle(templates).map((qFn, i) => {
    let invalid = false;
    return {
      timeline: [{
        type: jsPsychSurveyText,
        questions: () => [{
          prompt: (invalid
            ? `<p style="color: red; margin-bottom: 8px;">Please enter a whole number.</p>`
            : '') + qFn(percentages[i]),
          placeholder: 'Enter a number',
          required: true,
        }]
      }],
      loop_function: (data) => {
        const val = Object.values(data.values()[0].response)[0].trim();
        invalid = !/^\d+$/.test(val);
        return invalid;
      }
    };
  });
}

// stimulusFn(n, k) => HTML string
function buildProbabilityBlock(stimulusFn, ns) {
  const ks = jsPsych.randomization.shuffle([2, 3, 4]);
  const questions = ns.map((n, i) => ({
    type: jsPsychHtmlSliderResponse,
    stimulus: stimulusFn(n, ks[i]),
    min: 0,
    max: 1,
    step: 0.01,
    slider_start: 0.5,
    labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    require_movement: true,
  }));
  return jsPsych.randomization.shuffle(questions);
}

function buildSectionIntro(description, note) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="max-width: 600px; margin: auto; text-align: left;">
        <p>The following questions will be about your intuitions regarding the occurrence of ${description} in a group of people.</p>
        <p>${note.replace('<br>', '')}</p>
        <br>
        <p style="text-align: center;"><b>Press any key to continue.</b></p>
      </div>
    `
  };
}

function buildCategorySection(description, note, groupTemplates, percentages, probabilityFn, ns) {
  const [first, second] = jsPsych.randomization.shuffle([
    buildGroupSizeBlock(groupTemplates, percentages),
    buildProbabilityBlock(probabilityFn, ns),
  ]);
  return [buildSectionIntro(description, note), ...first, ...second];
}
