import "$css/index.css";

console.log("index.js");

import(/* webpackChunkName: 'a' */"./a.js")
  .then(({add}) => {
    console.log(add(1, 2));
  });
