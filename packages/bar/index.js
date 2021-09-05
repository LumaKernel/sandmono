const foo = require("@luma-dev/foo");
const ver = require("./package.json").version;
module.exports = (s = "END") => `bar(${ver}):${foo(s)}`;
