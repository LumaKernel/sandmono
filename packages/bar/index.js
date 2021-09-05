const foo = require("@sand/foo");
const ver = require("./package.json").version;
module.exports = (s = "END") => `bar(${ver}):${foo(s)}`;
