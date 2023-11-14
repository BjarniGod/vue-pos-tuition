export const tuitionBlurbs = {
  onCampusText: {
    text: 'Fort Hays State prides itself on quality education at an affordable price. Students on this program can expect to pay approximately ${tuitionRate} (on-campus) per semester.',
    footnote: '*Estimated cost based on ${creditHours} credit hours at the on-campus resident/regional tuition rate (${pricePerCreditHour}/credit hour) for on-campus courses. Actual price may vary depending on course load and location. Tuition and fees are subject to change with annual approval by the Kansas Board of Regents.'
  },
  onlineText: {
    text: 'Fort Hays State prides itself on quality education at an affordable price. Students in this program can expect to pay approximately ${tuitionRate} (online) per semester.',
    footnote: '*Estimated cost based on ${creditHours} credit hours at the online tuition rate (${pricePerCreditHour}/credit hour) for online courses. Actual price may vary depending on course load and location. Tuition and fees are subject to change with annual approval by the Kansas Board of Regents.'
  },
  online: {
    // [price, credit-hours]
    undergrad: [3641.40, 15],
    grad: [2875.05, 9],
    mba: [11863.05, 24],
    mls: [9902.95, 31],
    mps: [9583.50, 30],
    msCounseling: [19800, 60],
  },
  onCampus: {
    undergrad: [2817.00, 15],
    grad: [2875.05, 9],
    mba: [11336.64, 24],
    mls: [8089.76, 31],
    mps: [7828.80, 30],
  }
  };