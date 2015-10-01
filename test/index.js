const testsContext = require.context('../src/', true, /spec\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../src/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
