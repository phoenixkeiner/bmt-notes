// Maps strike names to left/right side per stance, used by ComboDisplay for color coding
type Side = 'left' | 'right';
type StrikeMap = Record<string, Side>;

export const orthodoxMap: StrikeMap = {
  'Jab': 'left',
  'Cross': 'right',
  'Lead Hook': 'left',
  'Rear Hook': 'right',
  'Lead Elbow': 'left',
  'Rear Elbow': 'right',
  'Lead Low Kick': 'left',
  'Lead Body Kick': 'left',
  'Lead High Kick': 'left',
  'Rear Low Kick': 'right',
  'Rear Body Kick': 'right',
  'Rear High Kick': 'right',
  'Switch Body Kick': 'left',
  'Switch Head Kick': 'left',
  'Check': 'left',
  'Teep': 'left',
  'Lead Knee': 'left',
  'Rear Knee': 'right',
};

export const southpawMap: StrikeMap = {
  'Jab': 'right',
  'Cross': 'left',
  'Lead Hook': 'right',
  'Rear Hook': 'left',
  'Lead Elbow': 'right',
  'Rear Elbow': 'left',
  'Lead Low Kick': 'right',
  'Lead Body Kick': 'right',
  'Lead High Kick': 'right',
  'Rear Low Kick': 'left',
  'Rear Body Kick': 'left',
  'Rear High Kick': 'left',
  'Switch Body Kick': 'right',
  'Switch Head Kick': 'right',
  'Check': 'right',
  'Teep': 'right',
  'Lead Knee': 'right',
  'Rear Knee': 'left',
};
