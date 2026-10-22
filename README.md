# No More Room in Hell 2 Weapon & Perk Browser (GCT-025)

Single static page, `index.html`, no build step, no dependencies, no backend, no account/login.

## What it does

A sortable table of all 15 guns (tier, ammo, capacity, damage), a sortable table of all 19 melee
weapons (tier, role), and a reference table of 44 sourced perks for the "pick 1 of 3 at level-up"
mechanic, with the 4 commonly-recommended early picks (Athlete, Thick Skin, Sturdy Body,
Scavenger) flagged. It is a structured reference, not an advice tool: it never asserts a single
"best" build and no verdict language ("best"/"optimal"/"strongest"/"guaranteed"/"approved"/
"certified"/"compliant"/"safe") appears anywhere in the shipped copy — enforced by a grep
assertion in `test.js` against both the rendered page and the data file, and by
`Tools/slop_lint.py`.

## The core discipline: every number is labeled by how many sources confirm it

- **Gun tiers**: itemlevel.net's tier list is the only source with a full S/A/B/C/D breakdown.
  `nerdschalk.com` was checked directly as the charter's candidate second source — it lists the
  full weapon roster but contains **no tier rankings or numeric stats at all**, so it does not
  corroborate anything. `gamer.org` has an independent ranked list covering only 6 of the 15 guns
  (M7A1, X12 Super, M14, Rochester, M1911, MP5). That list places those 6 guns in **the exact same
  relative order** as itemlevel's tiers (S-tier guns rank 1st-3rd, A-tier 4th-5th, B-tier 6th) —
  this is disclosed on the page as tier-direction corroboration. The other 9 guns have no second
  source for their tier at all.
- **Gun capacity/damage**: only two numbers on the whole page are marked "2-source confirmed" —
  M14's 21-round capacity (itemlevel's "21-round" matches gamer.org's "20+1") and X12 Super's
  6-round capacity (both sources say 6). Every other capacity and every single damage number is
  single-sourced, shown with its source named inline. `gamer.org` gives **no damage numbers for
  any gun**, so no damage figure on this page can ever be more than single-sourced to
  itemlevel.net — including the M1911's "130 damage with Headblown Expert" figure the charter
  specifically flagged as unconfirmed. It ships, labeled SINGLE-SOURCED, UNCONFIRMED.
- **Melee tiers**: single-sourced to allthings.how's post-1.0-combat-rework guide (13 of the 19
  roster weapons are tiered; the other 6 — Crowbar, Rebar, Large Pipe, Large Wrench, Shovel,
  Hockey Stick — are shown as untiered rather than guessed). The Steam Community "Melee weapon
  tier?" thread the charter named is from April 2025, **before** the 1.0 rework, so it is not
  merged into the current tier list as a second source. It's shown separately, specifically for
  the disagreement it documents: the original post rated Claw Hammer and Crowbar in its top tier,
  but replies split — some defended the Claw Hammer as genuinely strong, others called the rating
  into question, and a different poster rated Crowbar a tier lower than the OP did. The
  post-1.0 guide ranks Claw Hammer as C-tier ("early-game filler"). Both the disputed pre-1.0
  thread and the C-tier post-1.0 verdict are shown on the page — neither silently wins.
- **Perks**: primary source is `powerupgaming.co.uk`'s profession guide (44 perks across 29
  professions). Each perk is cross-checked against `allthings.how`'s independent 1.0-patch skills
  guide; `corroborated: true` only where that second source describes the *same effect*, not just
  names the skill. Two real cross-source conflicts surfaced and are disclosed rather than
  resolved: **Steady Shot** (powerupgaming says it *increases* recoil as a tradeoff; allthings.how
  groups it with reduced recoil — opposite directions), and **Teddy Bear**/**Averaging**
  (powerupgaming, dated 2026-08-13, lists both as active; allthings.how's 1.0 "Armageddon" guide
  says both were removed in 1.0 — a possible patch-version mismatch that couldn't be resolved
  without an official patch-note source).

## Naming caveats disclosed on the page

- itemlevel.net's own C-tier gun entry is written as "DB12 / DT11" — no second source names a
  weapon called "DT11," so it's mapped to the roster's "Fierra DB12" with the mismatch disclosed,
  not treated as a separate unverified weapon.
- allthings.how's melee tier list uses "Kitchen Knife" and "Small Wrench" where the current
  weapon roster uses "Small Knife" and "Wrench" (with a separate, untiered "Large Wrench"). Both
  are mapped as the same items, flagged inline.

## Tests

`node test.js` — structural + content tests: 15 guns, 19 melee weapons (13 tiered), 44 perks;
every "confirmed" numeric cell asserted to carry 2+ named sources; known-answer checks for the
M14/X12 Super confirmed capacities, the M1911 unconfirmed-damage flag, the Claw Hammer dispute,
and both perk version conflicts; banned-word grep against the rendered page (scripts stripped)
and against every row's own JSON. All passing.

`python3 Tools/slop_lint.py index.html data.js test.js` — clean, 0 findings.

Rendered via headless Chrome (`--dump-dom`) and the dumped DOM read directly: confirmed correct
tier-badge counts (28 total: 15 gun tiers + 13 melee tiers), confirmed the M1911 row renders its
unconfirmed-damage flag, confirmed the Claw Hammer row renders its dispute flag and the
community-discussion callout renders the actual disagreement text, and confirmed the in-page
self-test reports 5/5.

## Not built (out of scope for this session)

No Stripe/Pro paywall and no registry/deploy actions — reserved for the orchestrator per the
charter's acceptance criteria.
