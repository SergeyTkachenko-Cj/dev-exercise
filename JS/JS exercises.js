
String.prototype.camelCase = function () {
  const x = this.split(' ');
  const z = x.map((i) => {
    const q = i.split('').map((item, index) => (index ? item : item.toUpperCase()));
    return q.join('');
  });

  return z.join('');
};

console.log('hello case '.camelCase());


// "hello case".camelCase() => HelloCase;
// "camel case word".camelCase() => CamelCaseWord;
