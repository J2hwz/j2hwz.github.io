// Helper functions for constructing jsPsych trial blocks.
// Depends on: stimuli.js, individual_differences_stimuli.js

// Builds shuffled group-size text-input trials for one category
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

// Builds shuffled slider-response trials for one category; stimulusFn(n, k) => HTML string
function buildProbabilityBlock(stimulusFn, ns, note) {
  const ks = jsPsych.randomization.shuffle([2, 3, 4]);
  const noteText = note.replace('<br>', '').trim();
  const questions = ns.map((n, i) => ({
    type: jsPsychHtmlSliderResponse,
    stimulus: stimulusFn(n, ks[i]),
    min: 0,
    max: 1,
    step: 0.01,
    slider_start: 0.5,
    labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    require_movement: true,
    on_load: function() {
      // Inject hide-thumb style once, using jsPsych's own .jspsych-slider class
      // https://github.com/jspsych/jsPsych/discussions/1660
      if (!document.getElementById('slider-thumb-style')) {
        const style = document.createElement('style');
        style.id = 'slider-thumb-style';
        style.textContent = `
          .jspsych-slider.hide-thumb::-webkit-slider-thumb { visibility: hidden; }
          .jspsych-slider.hide-thumb::-moz-range-thumb     { visibility: hidden; }
          .jspsych-slider.hide-thumb::-ms-thumb            { visibility: hidden; }
        `;
        document.head.appendChild(style);
      }

      const container = document.querySelector('.jspsych-html-slider-response-container');

      // "Click anywhere" hint above the slider
      container.insertAdjacentHTML('beforebegin',
        `<p style="color: #828282; font-size: 16px; margin-bottom: 6px;">Click anywhere on the slider to respond.</p>`
      );

      // Note below the slider
      container.insertAdjacentHTML('afterend',
        `<p class="stimulus-note" style="margin-top: 12px;">${noteText}</p>`
      );

      const slider = document.querySelector('.jspsych-slider');
      slider.classList.add('hide-thumb');

      slider.addEventListener('click', function() {
        slider.classList.remove('hide-thumb');
      }, { once: true });
    }
  }));
  return jsPsych.randomization.shuffle(questions);
}

// Builds the keyboard-response intro screen for a category section
function buildSectionIntro(description, note) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="text-align: left;">
        <p>The following questions will be about your intuitions regarding the occurrence of ${description} in a group of people.</p>
        <p class="section-intro-note">${note.replace('<br>', '')}</p>
        <br>
        <p style="text-align: center;"><b>Press any key to continue.</b></p>
      </div>
    `
  };
}

// Builds a numeric attention-check trial; loops until the participant types the correct number
function buildAttentionCheck(target) {
  let invalid = false;
  return {
    timeline: [{
      type: jsPsychSurveyText,
      data: { attention_check: true },
      questions: () => [{
        prompt: (invalid
          ? `<p style="color: red; margin-bottom: 8px;">Incorrect. Please read the question carefully and try again.</p>`
          : '') +
          `How many people would you need in a room to have a <strong>50%</strong> chance that no people share the <i>same</i> characteristic?` +
          `<br><span class="stimulus-note">To make sure you are reading carefully, please type the number <strong>${target}</strong> in the box below instead of answering the question above.</span>`,
        placeholder: 'Enter a number',
        required: true,
      }]
    }],
    loop_function: (data) => {
      const val = Object.values(data.values()[0].response)[0].trim();
      invalid = val !== String(target);
      return invalid;
    }
  };
}

// Assembles a full category section: intro + shuffled group-size and probability blocks + attention check
function buildCategorySection(description, note, groupTemplates, percentages, probabilityFn, ns, attentionCheckTarget) {
  const [first, second] = jsPsych.randomization.shuffle([
    buildGroupSizeBlock(groupTemplates, percentages),
    buildProbabilityBlock(probabilityFn, ns, note),
  ]);
  const allTrials = [...first, ...second];
  const insertAt = Math.floor(Math.random() * (allTrials.length + 1));
  allTrials.splice(insertAt, 0, buildAttentionCheck(attentionCheckTarget));
  return [buildSectionIntro(description, note), ...allTrials];
}


// --- Likert scale helpers ---

// 7-point scale label strings
const likertLabels = [
  'Strongly<br>disagree',
  'Disagree',
  'Somewhat<br>disagree',
  'Neither agree<br>nor disagree',
  'Somewhat<br>agree',
  'Agree',
  'Strongly<br>agree',
];

// Builds a single Likert radio-button trial; dataTag is stored in jsPsych trial data
function buildLikertItem(statement, dataTag) {
  return {
    type: jsPsychSurveyHtmlForm,
    data: { [dataTag]: true },
    html: `
      <div style="text-align: center;">
        <p style="font-size: 1.1em; margin-bottom: 32px;">${statement}</p>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin: 0 auto; margin-bottom: 32px;">
          ${likertLabels.map((label, i) => `
            <label style="display: flex; flex-direction: column; align-items: center; width: ${100 / 7}%; cursor: pointer; gap: 8px;">
              <input type="radio" name="response" value="${i + 1}" required>
              <span style="font-size: 0.8em; text-align: center; line-height: 1.3;">${label}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `,
    button_label: 'Next',
  };
}

// Builds a horizontal radio-button scale with custom labels and arbitrary number of points
function buildScaleItem(prompt, labels, itemLabel) {
  return {
    type: jsPsychSurveyHtmlForm,
    data: { numeracy: true, item: itemLabel },
    html: `
      <div style="text-align: center;">
        <p style="font-size: 1.1em; margin-bottom: 32px;">${prompt}</p>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin: 0 auto; margin-bottom: 32px;">
          ${labels.map((label, i) => `
            <label style="display: flex; flex-direction: column; align-items: center; width: ${100 / labels.length}%; cursor: pointer; gap: 8px;">
              <input type="radio" name="response" value="${i + 1}" required>
              <span style="font-size: 0.8em; text-align: center; line-height: 1.3;">${label}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `,
    button_label: 'Next',
  };
}

// Builds a numeracy open-ended text-input trial; loops until the answer is digits with an optional trailing %
function buildNumeracyTextItem(prompt, itemLabel) {
  let invalid = false;
  return {
    timeline: [{
      type: jsPsychSurveyText,
      data: { numeracy: true, item: itemLabel },
      questions: () => [{
        prompt: (invalid
          ? `<p style="color: red; margin-bottom: 8px;">Please enter a valid number (an optional decimal point and/or a % sign are okay).</p>`
          : '') + `<div style="margin: 0 auto;">${prompt}</div>`,
        placeholder: 'Your answer',
        required: true,
        columns: 15,
      }]
    }],
    loop_function: (data) => {
      const val = Object.values(data.values()[0].response)[0].trim();
      invalid = !/^\d+(\.\d+)?%?$/.test(val);
      return invalid;
    }
  };
}

// Builds a distribution-quiz trial: shows a 2×2 grid of distribution plots with radio buttons
function buildDistributionQuizTrial(prompt, options, topic) {
  const shuffled = jsPsych.randomization.shuffle(options);
  return {
    type: jsPsychSurveyHtmlForm,
    data: { distribution_quiz: true, topic },
    html: `
      <div style="text-align: center;">
        <p style="font-size: 1.1em; margin-bottom: 24px;">${prompt}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 0 auto;">
          ${shuffled.map(opt => `
            <label style="cursor: pointer; border: 2px solid #ddd; border-radius: 8px; padding: 12px; display: block;">
              <img src="${opt.image}" style="width: 100%; border-radius: 4px;">
              <div style="margin-top: 10px;asda">
                <input type="radio" name="distribution_choice" value="${opt.value}" required>
              </div>
            </label>
          `).join('')}
        </div>
        <br>
      </div>
    `,
    button_label: 'Next',
  };
}

// Builds a Likert attention-check trial; loops until the participant selects the correct option
function buildLikertAttentionCheck(targetValue) {
  const targetLabel = likertLabels[targetValue - 1].replace('<br>', ' ');
  let invalid = false;
  return {
    timeline: [{
      type: jsPsychSurveyHtmlForm,
      data: { attention_check: true },
      html: () => `
        <div style="text-align: center;">
          ${invalid ? `<p style="color: red; margin-bottom: 8px;">Incorrect. Please read the instruction carefully and try again.</p>` : ''}
          <p style="font-size: 1.1em; margin-bottom: 32px;">To make sure you are reading carefully, please select <strong>${targetLabel}</strong> below.</p>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin: 0 auto; margin-bottom: 32px;">
            ${likertLabels.map((label, i) => `
              <label style="display: flex; flex-direction: column; align-items: center; width: ${100 / 7}%; cursor: pointer; gap: 8px;">
                <input type="radio" name="response" value="${i + 1}" required>
                <span style="font-size: 0.8em; text-align: center; line-height: 1.3;">${label}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `,
      button_label: 'Next',
    }],
    loop_function: (data) => {
      const val = Object.values(data.values()[0].response)[0];
      invalid = val !== String(targetValue);
      return invalid;
    }
  };
}
