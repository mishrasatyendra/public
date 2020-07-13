const concat = require('concat');

(async function build() {  
  const files =  [
    './dist/angularhelloworld/runtime.js',
    './dist/angularhelloworld/polyfills.js',
    './dist/angularhelloworld/scripts.js',
    './dist/angularhelloworld/main.js'
  ];
  

  await concat(files, './dist/angularhelloworld/bundle.js');
})();
