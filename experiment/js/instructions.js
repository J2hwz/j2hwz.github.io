const instructions = [
  {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="text-align: left;">
        <h2>Instructions</h2>
        <p>You will be asked a number of questions about everyday topics such as ages, names, and cities.</p>

        <p>For questions asking about a <i>group size</i>, enter your best guess as a whole number.</p>

        <p>For questions asking about a <i>probability</i>, provide your best guess between 0-100%.<br>
        A <b>0%</b> chance means the event will <b>never</b> happen.<br>
        A <b>100%</b> chance means the event is <b>certain</b> to happen.<br>
        A <b>50%</b> chance means the event is <b>equally likely</b> to occur or not.</p>
        <p>There are no right or wrong answers — just go with your intuition.</p>
        <p>There will be additional notes provided to aid in your answer.</p>
        <br>
        <p style="text-align:center;"><b>Press any key to begin.</b></p>
      </div>
    `
  }
];
