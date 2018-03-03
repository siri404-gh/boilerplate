import React from 'react';
import App from './src/components/web/app/app';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept(App, () => {
    App();
  });
}
