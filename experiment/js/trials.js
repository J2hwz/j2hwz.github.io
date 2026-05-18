// Assembles the experiment timeline from category sections defined in stimuli.js.
// Depends on: stimuli.js, trials_helpers.js

// buildCategorySection() randomises the order of the stimuli within the blocks
// It also randomises the order of the blocks within the section
const birthdaySection = buildCategorySection(
  'shared birthdays', birthdayNote, birthdayGroups, birthdayPercentages, birthdayProbabilities, birthdayNs
);

const ageSection = buildCategorySection(
  'shared ages', ageNote, ageGroups, agePercentages, ageProbabilities, ageNs
);

const nameSection = buildCategorySection(
  'shared first names', nameNote, nameGroups, namePercentages, nameProbabilities, nameNs
);

const citySection = buildCategorySection(
  'shared cities and countries of origin', cityNote, cityGroups, cityPercentages, cityProbabilities, cityNs
);

const siblingSection = buildCategorySection(
  'shared numbers of siblings', siblingNote, siblingGroups, siblingPercentages, siblingProbabilities, siblingNs
);

// Randomise order of all five sections
const [s1, s2, s3, s4, s5] = jsPsych.randomization.shuffle([
  birthdaySection, ageSection, nameSection, citySection, siblingSection
]);

// Compile trials timeline and pass to be used in the overall timeline
const trials = [...s1, ...s2, ...s3, ...s4, ...s5];
