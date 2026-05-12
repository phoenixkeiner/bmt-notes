// Belt definitions and combo data
export type Combo = {
  name: string;
  combo: string;
  seconds: 5 | 10 | 30;
};

export type Belt = {
  name: string;
  colorKey: string;
  combos: Combo[];
};

export const belts: Belt[] = [
  {
    name: 'White',
    colorKey: 'belt-white',
    combos: [
      { name: 'Hands 1', combo: 'Jab, Rear Low Kick', seconds: 5 },
      { name: 'Hands 2', combo: 'Jab, Cross, Switch Body Kick', seconds: 5 },
      { name: 'Dutch 1', combo: 'Lead Hook, Rear Low Kick, Cross, Switch Body Kick, Follow Through, Cross, Lead Hook, Rear Low Kick, Lead Hook, Cross, Switch Head Kick', seconds: 10 },
    ],
  },
  {
    name: 'Yellow',
    colorKey: 'belt-yellow',
    combos: [],
  },
  {
    name: 'Orange',
    colorKey: 'belt-orange',
    combos: [],
  },
  {
    name: 'Blue',
    colorKey: 'belt-blue',
    combos: [],
  },
  {
    name: 'Purple',
    colorKey: 'belt-purple',
    combos: [],
  },
  {
    name: 'Brown',
    colorKey: 'belt-brown',
    combos: [],
  },
  {
    name: 'Black',
    colorKey: 'belt-black',
    combos: [],
  },
];
