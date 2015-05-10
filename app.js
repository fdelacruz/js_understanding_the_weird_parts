// gets a new object (the architecture allows us to not have to use the 'new'
// keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();
