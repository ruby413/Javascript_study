function solution (s) {
  return s.split(' ').map((a) => {
    return a.split('').map((b, i) => {
      return (i % 2 === 0) ? b.toUpperCase() : b.toLowerCase();
    }).join('');
  }).join(' ');
}
