// Birthday block stimuli
const birthdayNote = `<br><em>Note: you can assume that there are 365 possible birthdays in a year.</em>`;

const birthdayPercentages = [25, 25, 50, 50, 75, 75];

const birthdayGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people share the same birthday?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people share the same birthday?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people share the same birthday?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have birthdays within the same week?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have birthdays within the same week?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have birthdays within the same week?${birthdayNote}`,
];

const birthdayNs = [10, 20, 40];

const birthdayProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people share the same birthday?${birthdayNote}`;


// Age block stimuli
const ageNote = `<br><em>Note: you can assume that you only encounter people ages 0-84 in this room.</em>`;

const agePercentages = [25, 25, 50, 50, 75, 75];

const ageGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people are the same age?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people are the same age?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people are the same age?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have ages within 5 years of each other?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have ages within 5 years of each other?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have ages within 5 years of each other?${ageNote}`,
  // p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 of them have ages within 10 years of each other?${ageNote}`,
  // p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 of them have ages within 10 years of each other?${ageNote}`,
  // p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 of them have ages within 10 years of each other?${ageNote}`,
];

const ageNs = [10, 20, 40];

const ageProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people share the same age?${ageNote}`;


// First names block stimuli
const nameNote = `<br><em>Note: you can assume that there are around 4400 first names.</em>`;

const namePercentages = [25, 25, 50, 50, 75, 75];

const nameGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the same first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the same first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the same first name?${nameNote}`,
  // Might need additional note to ground what it means to have a "similar" name
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have a similar first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have a similar first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have a similar first name?${nameNote}`,
];

const nameNs = [100, 200, 400]; // Group sizes for first names probability block

const nameProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people share the same first name?${nameNote}`;


// City of origin block stimuli
const cityNote = `<br><em>Note: you can assume that there are around 200 cities, and 4 constituent countries (England, Scotland, Wales, & Northern Ireland) in in the United Kingdom.</em>`;

const cityPercentages = [25, 25, 50, 50, 75, 75];

const cityGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the same city of origin in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the same city of origin in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the same city of origin in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the same country of origin in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the same country of origin in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the same country of origin in the UK?${cityNote}`,
];

const cityNs = [5, 10, 20]; // Group sizes for city of origin probability block

const cityProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people have the same city of origin in the UK?${cityNote}`;


// Siblings block
const siblingNote = `<br><em>Note: you can assume that there are around 4400 first names.</em>`;

const siblingPercentages = [25, 50, 75];

const siblingGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the same number of siblings?${siblingNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the same number of siblings?${siblingNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the same number of siblings?${siblingNote}`,
];

const siblingNs = [2,4,8]; // Group sizes for siblings probability block

const siblingProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people have the same number of siblings?${siblingNote}`;
