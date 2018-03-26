This is a boilerplate repo to help get started writing a Chrome extension using Node/webpack/jQuery.  It has:

* Bundling via webpack with sample config, including CSS, images
* Webpack jquery support (using the webpack-jquery-ui package)
* Lint checking via git pre-commit with eslint
* Sample manifest file
* Other misc: .gitignore, etc.

To use:

* Clone the repo

Then,

`$ npm install`

`$ npx webpack --mode development`

[Use the instructions to load an unpacked extension (it probably won't work out of the box, it's meant to be replaced with an actual working extension)](https://guides.github.com/features/mastering-markdown/)

It is cobbled together from many helpful resources on the web:

* Using jQuery with webpack: https://www.npmjs.com/package/webpack-jquery-ui
* Webpack Loaders, CSS and Style Loaders: https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a
* How to run ESLint using pre-commit hook: https://medium.com/@shettyrahul8june/how-to-run-eslint-using-pre-commit-hook-25984fbce17e
* And others I've probably forgotten.  I am sure there's some Stackoverflow copy & pasting in here somewhere.

Full disclaimer: It may not represent the latest & greatest in
JS/webdevelopment best practices, but hopefully can help get over the
curve if you're building a Chrome extension and want to have some
automation, bundling, and modular separation of your code.
