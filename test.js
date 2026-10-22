// Headless known-answer / structural tests. Run: node test.js
var data = require("./data.js");
var fs = require("fs");

var failures = 0;

function assert(cond, label) {
  if (!cond) {
    failures++;
    console.log("FAIL " + label);
  } else {
    console.log("PASS " + label);
  }
}

// ───────────────────────────────── guns

assert(data.GUNS.length === 15, "15 guns present (full roster)");

data.GUNS.forEach(function (g) {
  assert(typeof g.name === "string" && g.name.length > 0, g.name + " has a non-empty name");
  assert(typeof g.ammo === "string" && g.ammo.length > 0, g.name + " has a non-empty ammo type");
  assert(["S", "A", "B", "C", "D"].indexOf(g.tier) !== -1, g.name + " has a valid tier letter");
  assert(typeof g.tierSource === "string" && g.tierSource.length > 0, g.name + " cites a tier source");

  // The 2-source-corroborated claims this charter cares about most: every numeric cell must
  // either be null (not stated) or carry at least one named source, and "confirmed: true" must
  // never appear with fewer than 2 named sources.
  ["capacity", "damage"].forEach(function (field) {
    var cell = g[field];
    assert(cell.value === null || cell.sources.length >= 1, g.name + "/" + field + " has a value only when at least one source is named");
    if (cell.confirmed) {
      assert(cell.sources.length >= 2, g.name + "/" + field + " is only marked confirmed with 2+ named sources");
    }
  });
});

// Known-answer: the two specific values the charter and research established as genuinely
// 2-source corroborated, and the one the charter explicitly flagged as single-sourced.
(function knownAnswers() {
  var m14 = data.GUNS.filter(function (g) { return g.name === "M14 Battle Rifle"; })[0];
  assert(m14 && m14.capacity.confirmed === true, "M14 capacity is confirmed (itemlevel 21-round + gamer.org 20+1 agree)");

  var x12 = data.GUNS.filter(function (g) { return g.name === "X12 Super"; })[0];
  assert(x12 && x12.capacity.confirmed === true, "X12 Super capacity is confirmed (both sources say 6)");

  var m1911 = data.GUNS.filter(function (g) { return g.name === "M1911"; })[0];
  assert(m1911 && m1911.damage.confirmed === false, "M1911's 130-damage-with-perk figure ships as unconfirmed, per charter");
  assert(m1911 && /SINGLE-SOURCED/.test(m1911.note), "M1911 carries an explicit single-sourced flag in its note");

  // No damage number anywhere is marked confirmed — gamer.org gives no damage figures at all,
  // so every damage figure on this page can only ever be single-sourced to itemlevel.net.
  assert(data.GUNS.every(function (g) { return g.damage.confirmed === false; }), "no gun's damage figure is marked confirmed (gamer.org gives no damage numbers)");
})();

// ───────────────────────────────── melee

assert(data.MELEE.length === 19, "19 melee weapons present (full roster)");

var tieredCount = data.MELEE.filter(function (w) { return w.tier !== null; }).length;
assert(tieredCount === 13, "exactly 13 of 19 melee weapons are tiered by the source found");

data.MELEE.forEach(function (w) {
  if (w.tier !== null) {
    assert(["S", "A", "B", "C"].indexOf(w.tier) !== -1, w.name + " has a valid melee tier letter");
    assert(typeof w.tierSource === "string" && w.tierSource.length > 0, w.name + " cites a tier source");
  } else {
    assert(w.tierSource === null, w.name + " has no tier source when untiered (no invented source)");
  }
});

(function clawHammerDisagreement() {
  var claw = data.MELEE.filter(function (w) { return w.name === "Claw Hammer"; })[0];
  assert(claw && claw.tier === "C", "Claw Hammer's published post-1.0 tier is C");
  assert(claw && /DISPUTED/.test(claw.note), "Claw Hammer's row flags the dispute visibly");
  assert(/disagree/i.test(data.MELEE_COMMUNITY_NOTE.text), "the community note text documents actual disagreement, not a one-sided claim");
  assert(/Claw Hammer/.test(data.MELEE_COMMUNITY_NOTE.text), "the community note names the Claw Hammer specifically");
})();

// ───────────────────────────────── perks

assert(data.PERKS.length === 44, "44 perks present");
assert(data.SAFE_EARLY_PICKS.length === 4, "4 commonly-recommended early picks");

var EXPECTED_SAFE_PICKS = ["Athlete", "Thick Skin", "Sturdy Body", "Scavenger"];
assert(EXPECTED_SAFE_PICKS.every(function (n) { return data.SAFE_EARLY_PICKS.indexOf(n) !== -1; }), "all 4 charter-named early picks are present");

data.PERKS.forEach(function (p) {
  assert(typeof p.profession === "string" && p.profession.length > 0, p.name + " has a non-empty profession (no blank cell)");
  assert(typeof p.name === "string" && p.name.length > 0, "perk has a non-empty name");
  assert(typeof p.effect === "string" && p.effect.length > 0, p.name + " has a non-empty effect string (no blank cell)");
  assert(typeof p.corroborated === "boolean", p.name + " has a boolean corroborated flag");
});

EXPECTED_SAFE_PICKS.forEach(function (name) {
  var perk = data.PERKS.filter(function (p) { return p.name === name; })[0];
  assert(perk !== undefined, name + " exists in the perk table");
});

(function versionConflicts() {
  var teddy = data.PERKS.filter(function (p) { return p.name === "Teddy Bear"; })[0];
  assert(teddy && /removed in 1.0/.test(teddy.conflict), "Teddy Bear's removed-in-1.0 version conflict is disclosed");
  var averaging = data.PERKS.filter(function (p) { return p.name === "Averaging"; })[0];
  assert(averaging && /removed in 1.0/.test(averaging.conflict), "Averaging's removed-in-1.0 version conflict is disclosed");
  var steady = data.PERKS.filter(function (p) { return p.name === "Steady Shot"; })[0];
  assert(steady && /DISAGREE/.test(steady.conflict), "Steady Shot's cross-source recoil-direction disagreement is disclosed");
})();

// ───────────────────────────────── copy discipline

// T0/T1 liability tier: these words must never appear in the product's own rendered copy.
var BANNED_WORDS = ["best", "optimal", "strongest", "guaranteed", "approved", "certified", "compliant", "safe"];

function stripToVisibleText(html) {
  var visible = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  visible = visible.replace(/<[^>]+>/g, " ");
  return visible;
}

(function checkIndexHtmlVisibleCopy() {
  var raw = fs.readFileSync(__dirname + "/index.html", "utf8");
  var visible = stripToVisibleText(raw).toLowerCase();
  BANNED_WORDS.forEach(function (w) {
    var re = new RegExp("\\b" + w + "\\b");
    assert(!re.test(visible), "index.html rendered copy (tags+scripts stripped) does not contain banned word '" + w + "'");
  });
})();

[data.GUNS, data.MELEE, data.PERKS].forEach(function (list, idx) {
  var label = ["GUNS", "MELEE", "PERKS"][idx];
  list.forEach(function (row) {
    var text = JSON.stringify(row).toLowerCase();
    BANNED_WORDS.forEach(function (w) {
      var re = new RegExp("\\b" + w + "\\b");
      assert(!re.test(text), label + "/" + row.name + " data does not contain banned word '" + w + "'");
    });
  });
});

if (failures > 0) {
  console.log(failures + " test(s) failed.");
  process.exit(1);
} else {
  console.log("All tests passed.");
}
