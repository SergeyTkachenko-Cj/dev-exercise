
const multiPromises = (() => {
  const states = [
    'new_york',
    'california',
    'ohio',
    'illinois',
  ];

  const concat = [];

  const responses = states.map(
    (item) => fetch(`https://api.openbrewerydb.org/breweries?per_page=1&by_state=${item}`),
  );

  Promise.all(responses)
    .then((resps) => Promise.all(resps.map((item) => item.json())))
    .then((resps) => resps.map((ite) => ite.map(
      (it) => console.log(
        '%c%s%c : %c%s%c (%c%s%c)',
        'color:orange', it.state,
        'background:inherit;', 'color:yellow; font-style: italic;', it.name,
        'background:inherit;', 'color:orange;', it.city,
        'background:inherit;',
      ),
    )));
})();
