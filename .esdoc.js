const src = './src/';
const destination = './docs/';
const title = 'bartrr';
const description = '';
const repository = '';
const site = '';
const twitter = '';
const image = '';
const interfaces = ["describe", "it", "context", "suite", "test"];

module.exports = JSON.parse(JSON.stringify({
  "source": src,
  "destination": destination,
  "includes": ["\\src\\.js$"],
  "plugins": [
    {
      "name": "esdoc-standard-plugin",
      "option": {
        "lint": { "enable": true },
        "coverage": { "enable": true },
        "accessor": { "access": ["public", "protected", "private"], "autoPrivate": true },
        "undocumentIdentifier": { "enable": true },
        "unexportedIdentifier": { "enable": false },
        "typeInference": { "enable": true },
        "brand": {
          "title": title,
          "description": description,
          "repository": repository,
          "site": site,
          "author": twitter,
          "image": image
        },
        "test": {
          "source": src,
          "interfaces": interfaces,
          "includes": ["(spec|Spec|test|Test)\\.js$"],
          "excludes": ["\\.config\\.js$"]
        }
      }
    }]
}));