import sortByProperties from '../sortByProperties';

test('testing with data from the assignment', () => {
  const importantProps = ['name', 'level'];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [{
    key: 'name',
    value: 'мечник',
  },
  {
    key: 'level',
    value: 2,
  },
  {
    key: 'attack',
    value: 80,
  },
  {
    key: 'defence',
    value: 40,
  },
  {
    key: 'health',
    value: 10,
  },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});


test('testing with all props important', () => {
  const importantProps = ['name', 'level', 'health', 'attack', 'defence'];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [{
    key: 'name',
    value: 'мечник',
  },
  {
    key: 'level',
    value: 2,
  },
  {
    key: 'health',
    value: 10,
  },
  {
    key: 'attack',
    value: 80,
  },
  {
    key: 'defence',
    value: 40,
  },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});

test('testing with all props unimportant, only lexicographic sort', () => {
  const importantProps = ['width', 'height', 'color'];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'name',
      value: 'мечник',
    },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});

test('testing for object with some properties from prototype', () => {

  const importantProps = ['width', 'height', 'color'];

  const protoobj = {
    color: 'red',
  };
  const trueobj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const obj = { ...trueobj };
  Object.setPrototypeOf(obj, protoobj);

  const expected = [
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'name',
      value: 'мечник',
    },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});