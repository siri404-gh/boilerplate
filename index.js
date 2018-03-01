import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/web/app/app';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept(() => {
//     const nextRootReducer = require('./src/reducers/reducer');
//     store.replaceReducer(nextRootReducer);
//   });
// }

if (module.hot) {
  module.hot.accept(App, function () {
    console.log('Accepting the updated App!');
    App();
  });
}
