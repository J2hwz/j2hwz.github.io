const demographics = [
  {
    type: jsPsychSurveyHtmlForm,
    preamble: '<h2>Demographics</h2>',
    html: `
      <style>
        .demo-section { margin-bottom: 48px; }
        .demo-section p { font-weight: bold; margin-bottom: 8px; }
        .demo-section label { display: block; margin-bottom: 4px; }
        .required { color: red; }
        textarea { width: 100%; box-sizing: border-box; }
      </style>

      <div style="text-align: left;">

        <div class="demo-section">
          <p>Age <span class="required">*</span></p>
          <input name="age" type="number" min="18" max="100" required />
        </div>

        <div class="demo-section">
          <p>Gender <span class="required">*</span></p>
          <label><input name="gender" type="radio" value="Male" required /> Male</label>
          <label><input name="gender" type="radio" value="Female" /> Female</label>
          <label><input name="gender" type="radio" value="Non-binary / other" /> Non-binary / other</label>
        </div>

        <div class="demo-section">
          <p>How easy did you find it to answer the questions in this study? <span class="required">*</span></p>
          <div style="display: flex; justify-content: space-between; align-items: center; width: 80%;">
            <span style="font-size: 0.85em;">Very difficult</span>
            ${[1,2,3,4,5,6,7].map(n => `
              <label style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <input name="ease" type="radio" value="${n}" required /> ${n}
              </label>`).join('')}
            <span style="font-size: 0.85em;">Very easy</span>
          </div>
        </div>

        <div class="demo-section">
          <p>What strategy or reasoning did you use when answering the questions? Please describe in as much detail as you can. <span class="required">*</span></p>
          <textarea name="strategy" rows="4" placeholder="I thought about..." required></textarea>
        </div>

        <div class="demo-section">
          <p>Finally, please be honest when answering the following question. Your answer will <b>NOT</b> affect your payment or eligibility for future studies.<br><br>
          <b>Do you feel that you paid attention, avoided distractions, and took this experiment seriously?</b> <span class="required">*</span></p>
          <label><input name="concentration" type="radio" value="No, I was distracted" required /> No, I was distracted</label>
          <label><input name="concentration" type="radio" value="No, I had trouble paying attention" /> No, I had trouble paying attention</label>
          <label><input name="concentration" type="radio" value="No, I did not take this research study seriously" /> No, I did not take this research study seriously</label>
          <label><input name="concentration" type="radio" value="No, something else affected my participation negatively" /> No, something else affected my participation negatively</label>
          <label><input name="concentration" type="radio" value="Yes" /> Yes</label>
        </div>

      </div>
    `,
    button_label: 'Finish',
    on_finish: function(data) {
      data.response.age = parseInt(data.response.age);
    }
  }
];
