export const normaliseScenarios = [
  {
    desc: 'should sort character alphabetically',
    value: 'javascript',
    result: 'aacijprstv'
  },
  {
    desc: 'should normalise upper and lowercase',
    value: 'javaScript',
    result: 'aacijprstv'
  },
  {
    desc: 'should remove white spaces',
    value: 'java Script',
    result: 'aacijprstv'
  }
];

export const isAnagramScenarios = [
  {
    desc: 'should return true',
    value1: 'tHe eyEs',
    value2: 'TheY SeE',
    result: true
  },
  {
    desc: 'should return false',
    value1: 'javaScript',
    value2: 'web development',
    result: false
  }
];
