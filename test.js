"use strict";
// return true for string if every number pair within string adds up to 15 and is separated by exactly 3 !
// behavior is not specified, but number pairs must be consecutive
//   this has to be or everything would be false given more than one pair
// behavior is not specified, but there must be at least one pair
// behavior is not specified, but numbers cannot be negative, decimal, fractions, etc

const _assert = require("assert");

const addsUpBang = require("./index.js");

_assert.strictEqual(addsUpBang("14!!!1"), true);
_assert.strictEqual(addsUpBang("14!asd!!1"), true);
_assert.strictEqual(addsUpBang("14!asd!!1!!_Aaf!14"), true);
_assert.strictEqual(addsUpBang("a  !14!asd!!1!!_Aaf!14"), true);
_assert.strictEqual(addsUpBang("14!!!14!!1"), false);
_assert.strictEqual(addsUpBang("-5!!!20"), false);
_assert.strictEqual(addsUpBang("14!!1"), false);
_assert.strictEqual(addsUpBang("13!!!1"), false);
_assert.strictEqual(addsUpBang("13!!as!1"), false);
_assert.strictEqual(addsUpBang(null), false);
_assert.strictEqual(addsUpBang(""), false);

console.log("*** All tests pass ***");
