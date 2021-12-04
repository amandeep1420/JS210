function debugIt() {
  const status = 'debugging'; // constant status is declared
  function logger() {
    console.log(status); // status is available here because variables declared in an outer scope
  }                      // are available in any inner/nested scopes

  logger();
}

debugIt();