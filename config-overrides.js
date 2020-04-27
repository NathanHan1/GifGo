/* config-overrides.js */
const path = require('path');
const fs = require('fs');
const { override } = require('customize-cra');

module.exports = function (config) {
  const tsConfigPath = path.resolve(__dirname, './tsconfig.json');
  let tsConfig = fs.readFileSync(tsConfigPath).toString();
  // override CRA's tsconfig
  tsConfig = tsConfig.replace(/("noEmit": )true/, '$1false');
  tsConfig = tsConfig.replace(/("module": )"\w+"/, '$1"commonjs"');
  fs.writeFileSync(tsConfigPath, new Buffer(tsConfig));

  config = override()(config);
  return config;
};
