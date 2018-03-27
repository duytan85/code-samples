const listDiff = (a, b) =>
  a.filter((item) => {
    if (!b.includes(item)) {
      return item;
    }
    return false;
  });

export default listDiff;
