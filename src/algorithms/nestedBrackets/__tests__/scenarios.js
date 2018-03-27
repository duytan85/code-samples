export default [
  {
    desc: 'should return true',
    value: '{{string}}',
    result: true
  },
  {
    desc: 'should return false',
    value: '{{string}}}',
    result: false
  },
  {
    desc: 'should return true',
    value: '{string{{string}}}',
    result: true
  },
  {
    desc: 'should return false',
    value: '{{string}}{}',
    result: false
  }
];
