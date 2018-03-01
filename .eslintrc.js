module.exports = {
  "extends": "airbnb",
  "rules": {
    "no-cond-assign": [
      "error",
      "always"
    ],
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off"
  },
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "globals": {
    "ReactDOM": true,
  },
};