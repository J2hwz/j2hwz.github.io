const demographics = [
  {
    type: jsPsychSurvey,
    survey_json: {
      showQuestionNumbers: false,
      elements: [
        {
          type: "text",
          name: "participantAge",
          title: "How old are you?",
          // placeholder: "e.g. 24",
          inputType: "number",
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "participantGender",
          title: "What is your gender?",
          choices: ["Male", "Female", "Non-binary / third gender"],
          isRequired: true,
        },
        {
          type: "rating",
          name: "questionEase",
          title: "How easy did you find it to answer the questions in this study?",
          minRateDescription: "Very difficult",
          maxRateDescription: "Very easy",
          rateValues: [1, 2, 3, 4, 5, 6, 7],
          isRequired: true,
        },
        {
          type: "comment",
          name: "participantStrategy",
          title: "What strategy or reasoning did you use when answering the questions? Please describe in as much detail as you can.",
          placeholder: "I thought about...",
          isRequired: true,
          rows: 4,
        },
        {
          type: "radiogroup",
          name: "participantConcentration",
          title: 
          `Finally, please be honest when answering the following question. 
          Your answer will <b>NOT</b> affect your payment or eligibility for future studies. 
          <b>Do you feel that you paid attention, avoided distractions, and took this experiment seriously?</b> `,
          choices: [
            "No, I was distracted",
            "No, I had trouble paying attention",
            "No, I did not take this research study seriously",
            "No, something else affected my participation negatively",
            "Yes",
          ],
          isRequired: true,
        },
      ],
    },
  }
];
