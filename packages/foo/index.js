const ver = require("./package.json").version;
module.exports = (s = "END") => `foo(${ver}):${s}`;
