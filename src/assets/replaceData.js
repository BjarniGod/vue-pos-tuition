// on campus:
// *Estimated cost based on 30 credit hours required to complete the program at the graduate resident/regional tuition rate ($260.96/credit hour) for on-campus courses. Actual price may vary. Tuition and Fees are subject to change with annual approval by the Kansas Board of Regents.

// online:
// *Estimated cost based on 30 credit hours required to complete the program at the FHSU Online graduate tuition rate ($319.45/credit hour) for online courses. Actual price may vary. Tuition and Fees are subject to change with annual approval by the Kansas Board of Regents.


export const tuitionInfo = {
  programs: {
    undergrad: {
      title: 'Undergrad',
      availability: ['online', 'onCampus'],
      tuition: {
        online: [3641.40, 15],
        onCampus: [2817.00, 15]
      }
    },
    grad: {
      title: 'Graduate',
      availability: ['online', 'onCampus'],
      tuition: {
        online: [2875.05, 9],
        onCampus: [2875.05, 9]
      }
    },
    mba: {
      title: 'MBA',
      availability: ['online', 'onCampus'],
      tuition: {
        online: [11863.05, 24],
        onCampus: [11336.64, 24]
      }
    },
    mls: {
      title: 'MLS',
      availability: ['online', 'onCampus'],
      tuition: {
        online: [9902.95, 31],
        onCampus: [8089.76, 31]
      }
    },
    mps: {
      title: 'MPS',
      availability: ['online', 'onCampus'],
      tuition: {
        online: [9583.50, 30],
        onCampus: [7828.80, 30]
      }
    },
    msCounseling: {
      title: 'MS Counseling',
      availability: ['online'],
      tuition: {
        online: [19800, 60]
      }
    },
    RNtoDNP: {
      title: 'RN to DNP',
      availability: ['hybrid'],
      tuition: {
        hybrid: [30000, 75]
      }
    },
    MSNtoDNP: {
      title: 'MSN to DNP',
      availability: ['hybrid'],
      tuition: {
        hybrid: [13200, 33]
      }
    }
  }
};



// export const tuitionBlurbs = {
//     online: {
//       // [title, price, credit-hours]
//       undergrad: ['Undergrad', 3641.40, 15],
//       grad: ['Graduate', 2875.05, 9],
//       mba: ['MBA', 11863.05, 24],
//       mls: ['MLS', 9902.95, 31],
//       mps: ['MPS', 9583.50, 30],
//       msCounseling: ['MS Counseling', 19800, 60],
//     },
//     onCampus: {
//       undergrad: ['Undergrad', 2817.00, 15],
//       grad: ['Graduate', 2875.05, 9],
//       mba: ['MBA', 11336.64, 24],
//       mls: ['MLS', 8089.76, 31],
//       mps: ['MPS', 7828.80, 30],
//     },
//     hybrid: {
//       RNtoDNP: ['RN to DNP', 30000, 75],
//       MSNtoDNP: ['MSN to DNP', 13200, 33],
//     }
// }