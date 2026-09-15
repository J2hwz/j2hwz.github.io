// Birthday block stimuli
const birthdayAttentionTarget = 77;

const birthdayNote = `<br><span class="stimulus-note">Note: you can assume that there are 365 possible birthdays in a year.</span>`;

const birthdayPercentages = [25, 25, 50, 50, 75, 75];

const birthdayGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people share the <i>same</i> birthday?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people share the <i>same</i> birthday?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people share the <i>same</i> birthday?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have birthdays within the <i>same week</i>?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have birthdays within the <i>same week</i>?${birthdayNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have birthdays within the <i>same week</i>?${birthdayNote}`,
];

const birthdayNs = [10, 20, 40];

const birthdayProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people share the <i>same</i> birthday?`;


// Age block stimuli
const ageAttentionTarget = 42;

const ageNote = `<br><span class="stimulus-note">Note: you can assume that you only encounter people ages 0-84 in this room.</span>`;

const agePercentages = [25, 25, 50, 50, 75, 75];

const ageGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people are the <i>same</i> age?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people are the <i>same</i> age?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people are the <i>same</i> age?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have ages <i>within 5 years</i> of each other?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have ages <i>within 5 years</i> of each other?${ageNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have ages <i>within 5 years</i> of each other?${ageNote}`,
  // p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 of them have ages within 10 years of each other?${ageNote}`,
  // p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 of them have ages within 10 years of each other?${ageNote}`,
  // p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 of them have ages within 10 years of each other?${ageNote}`,
];

const ageNs = [10, 20, 40];

const ageProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people share the <i>same</i> age?`;


// First names block stimuli
const nameAttentionTarget = 13;

const nameNote = `<br><span class="stimulus-note">Note: you can assume that there are around 4400 first names.</span>`;

const namePercentages = [25, 25, 50, 50, 75, 75];

const nameGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the <i>same</i> first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the <i>same</i> first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the <i>same</i> first name?${nameNote}`,
  // Might need additional note to ground what it means to have a "similar" name
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have a <i>similar</i> first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have a <i>similar</i> first name?${nameNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have a <i>similar</i> first name?${nameNote}`,
];

const nameNs = [100, 200, 400]; // Group sizes for first names probability block

const nameProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people share the <i>same</i> first name?`;


// City of origin block stimuli
const cityAttentionTarget = 55;

const cityNote = `<br><span class="stimulus-note">Note: you can assume that there are around 200 cities, and 4 constituent countries (England, Scotland, Wales, & Northern Ireland) in the United Kingdom.</span>`;

const cityPercentages = [25, 25, 50, 50, 75, 75];

const cityGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the <i>same city of origin</i> in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the <i>same city of origin</i> in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the <i>same city of origin</i> in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the <i>same country of origin</i> in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the <i>same country of origin</i> in the UK?${cityNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the <i>same country of origin</i> in the UK?${cityNote}`,
];

const cityNs = [5, 10, 20]; // Group sizes for city of origin probability block

const cityProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people have the <i>same city of origin</i> in the UK?`;


// Siblings block
const siblingAttentionTarget = 29;

const siblingNote = `<br><span class="stimulus-note">Note: you can assume that people have anywhere between 0 to 5 siblings.</span>`;

const siblingPercentages = [25, 50, 75];

const siblingGroups = [
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 2 people have the <i>same</i> number of siblings?${siblingNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 3 people have the <i>same</i> number of siblings?${siblingNote}`,
  p => `How many people would you need in a room to have a <strong>${p}%</strong> chance that 4 people have the <i>same</i> number of siblings?${siblingNote}`,
];

const siblingNs = [2, 4, 8]; // Group sizes for siblings probability block

const siblingProbabilities = (n, k) =>
  `Given <strong>${n}</strong> people in a room, what do you think is the probability that <strong>${k}</strong> people have the same number of siblings?`;
