const condition = {
  pain: 3,
  isBleeding: false,
  isBroken: false,
};

export const body = {
  head: {
    eye: { side: {} },
    nose: {},
    mouth: {},
    ear: { side: {} },
  },
  arm: {
    side: {
      which: {},
      shoulder: {},
      upper: {},
      elbow: {},
      forearm: {},
      wrist: {},
      hand: {
        finger: {
          which: {}, // index|middle|ring|pinky
        },
        thumb: {},
        palm: {},
      },
    },
  },
  torso: {
    chest: {},
    abdomen: {},
  },
  groin: {},
  leg: {
    side: {
      which: {},
      thigh: {},
      knee: {},
      lowerLeg: {},
      ankle: {},
      foot: {
        toe: {
          which: {},
        },
        heel: {},
      },
    },
  },
};
