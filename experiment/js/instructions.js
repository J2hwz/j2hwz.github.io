const instructions = [
  {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="max-width: 600px; margin: auto; text-align: left;">
        <h2>Instructions</h2>
        <p>You will be asked a number of questions about everyday topics such as ages, names, and cities.</p>
        <p>For questions asking about a group size, enter your best guess as a whole number.</p>
        <p>For questions asking about a probability, enter your best guess between 0-100%.
        A 0% chance means an outcome will never happen. 
        A 100% chance means it is certain to happen.
        A 50% chance means it is equally likely to happen or not.</p>
        <p>There are no right or wrong answers — just go with your intuition.</p>
        <p>There will be additional notes provided to aid in your answer.</p>
        <br>
        <p style="text-align:center;"><b>Press any key to begin.</b></p>
      </div>
    `
  }
];
