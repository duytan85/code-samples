export default [
  {
    desc: 'should filter all duplicate numbers',
    value1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    value2: [2, 4, 6, 8, 10],
    result: [1, 3, 5, 7, 9]
  },
  {
    desc: 'should filter all duplicate characters',
    value1: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    value2: ['f', 'q', 'c', 'g', 't', 'f', 'g'],
    result: ['a', 'b', 'd', 'e']
  }
];
