const { src, docs,
  esdoc: {
    title, description, repository, site, twitter, image, interfaces
  },
} = require('./globals');

module.exports = JSON.parse(JSON.stringify({
  "source": src,
  "destination": docs,
  "includes": ["\\.js$"],
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