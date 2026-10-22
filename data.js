// No More Room in Hell 2 — Weapon & Perk Browser data.
// Every row below carries its own source tag. "confirmed: true" means two
// independent sources agree on that specific value — never inferred from
// one source alone. Fetched and re-read directly 2026-10-22.

(function (root) {
  "use strict";

  var SRC = {
    ITEMLEVEL: "itemlevel.net gun tier list",
    GAMERORG: "gamer.org — ranked gun list",
    ALLTHINGS_MELEE: "allthings.how melee weapons tier list",
    STEAM_MELEE: "Steam Community melee tier discussion (Apr 2025, pre-1.0)",
    POWERUP: "powerupgaming.co.uk professions & skills guide",
    ALLTHINGS_SKILLS: "allthings.how skills tier list (1.0 Armageddon patch)"
  };

  // ───────────────────────────────────────────────────────── guns

  var GUNS = [
    { name: "M7A1", ammo: "6.8x51mm", tier: "S", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: "gamer.org's independently ranked list places it 1st of 6 — same relative order as itemlevel's tiers.",
      capacity: { value: "30+1 (31 total)", confirmed: false, sources: [SRC.GAMERORG] },
      damage: { value: "150", confirmed: false, sources: [SRC.ITEMLEVEL] },
      note: "itemlevel.net also describes it as having excellent penetration (qualitative, single-sourced)." },
    { name: "M14 Battle Rifle", ammo: ".308 WIN", tier: "S", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: "gamer.org ranks it 3rd of 6 — same relative order as itemlevel's tiers.",
      capacity: { value: "21 rounds total", confirmed: true, sources: [SRC.ITEMLEVEL + " (“21-round capacity”)", SRC.GAMERORG + " (“20+1” = 21 rounds loaded+chambered)"] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "Damage not stated by either source." },
    { name: "590A1 (M590)", ammo: "12 gauge", tier: "S", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: "8 shells", confirmed: false, sources: [SRC.ITEMLEVEL] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "gamer.org's ranked list does not mention this gun at all — no second source found for its tier." },
    { name: "X12 Super", ammo: "12 gauge", tier: "S", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: "gamer.org ranks it 2nd of 6 — same relative order as itemlevel's tiers.",
      capacity: { value: "6 rounds", confirmed: true, sources: [SRC.ITEMLEVEL + " (“six-round capacity”)", SRC.GAMERORG + " (“6 shells”)"] },
      damage: { value: null, confirmed: false, sources: [] },
      note: null },
    { name: "M1911", ammo: ".45 ACP", tier: "A", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: "gamer.org ranks it 5th of 6, below the S-tier guns above — same relative order as itemlevel's tiers.",
      capacity: { value: "7+1 (8 total)", confirmed: false, sources: [SRC.GAMERORG] },
      damage: { value: "130 with the “Headblown Expert” perk", confirmed: false, sources: [SRC.ITEMLEVEL] },
      note: "SINGLE-SOURCED, UNCONFIRMED. itemlevel.net is the only source found for this number. No second source corroborates it, and no base (no-perk) damage figure for this gun was found anywhere." },
    { name: "Model 13", ammo: ".357 Magnum", tier: "A", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: "6 rounds", confirmed: false, sources: [SRC.ITEMLEVEL] },
      damage: { value: "100 (base)", confirmed: false, sources: [SRC.ITEMLEVEL] },
      note: "gamer.org's ranked list does not cover this gun — no second source found for its tier or stats." },
    { name: "MC15", ammo: "5.56 NATO", tier: "A", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: "around 30 rounds (source's own wording, not exact)", confirmed: false, sources: [SRC.ITEMLEVEL] },
      damage: { value: "130", confirmed: false, sources: [SRC.ITEMLEVEL] },
      note: "itemlevel.net describes its base penetration as weaker and says the “Mohawk” perk addresses it (qualitative, single-sourced). No second source found for its tier." },
    { name: "Rochester 1873", ammo: ".357 Magnum", tier: "A", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: "gamer.org ranks it 4th of 6 — same relative order as itemlevel's tiers.",
      capacity: { value: "14 rounds", confirmed: false, sources: [SRC.GAMERORG] },
      damage: { value: null, confirmed: false, sources: [] },
      note: null },
    { name: "M9A3", ammo: "9mm", tier: "B", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: null, confirmed: false, sources: [] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "gamer.org's ranked list does not cover this gun — no second source found for its tier." },
    { name: "Hunter 85", ammo: ".308 WIN", tier: "B", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: "6 rounds", confirmed: false, sources: [SRC.ITEMLEVEL] },
      damage: { value: "150", confirmed: false, sources: [SRC.ITEMLEVEL] },
      note: "gamer.org's ranked list does not cover this gun — no second source found for its tier." },
    { name: "MP5A4", ammo: "9mm", tier: "B", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: "gamer.org ranks it 6th of 6, last on its list — same relative order as itemlevel's tiers.",
      capacity: { value: "30+1 (31 total)", confirmed: false, sources: [SRC.GAMERORG] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "gamer.org calls it “a practical backup” that generally can't drop a zombie with one headshot (qualitative, single-sourced)." },
    { name: "Gruber 922", ammo: ".22 LR", tier: "C", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: null, confirmed: false, sources: [] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "gamer.org's ranked list does not cover this gun — no second source found for its tier." },
    { name: "Fierra DB12", ammo: "12 gauge", tier: "C", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: "2 shells before reloading", confirmed: false, sources: [SRC.ITEMLEVEL] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "Naming caveat: itemlevel.net's own article writes this tier-list entry as “DB12 / DT11.” No second source names a weapon called “DT11” — mapped here to the weapon-roster name “Fierra DB12” rather than treated as a separate, unverified weapon." },
    { name: "Gruber MKVII", ammo: ".22 LR", tier: "D", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: null, confirmed: false, sources: [] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "itemlevel.net says it needs three shots for a normal zombie and four for a Prime (qualitative, single-sourced)." },
    { name: "Gruber Ranch Rifle", ammo: ".22 LR", tier: "D", tierSource: SRC.ITEMLEVEL,
      tierDirectionNote: null,
      capacity: { value: null, confirmed: false, sources: [] },
      damage: { value: null, confirmed: false, sources: [] },
      note: "gamer.org's ranked list does not cover this gun — no second source found for its tier." }
  ];

  var GUN_TIER_ORDER = { S: 0, A: 1, B: 2, C: 3, D: 4 };

  // ───────────────────────────────────────────────────────── melee

  // Tiers below are single-sourced to allthings.how's post-1.0-rework tier
  // list. Two names in that list don't match the current weapon roster
  // exactly; both are mapped here with the mismatch disclosed rather than
  // silently merged or dropped.
  var MELEE = [
    { name: "Sledgehammer", role: "Heavy blunt", tier: "S", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Fire Axe", role: "Heavy slashing", tier: "S", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Tree Trimmer", role: "Heavy slashing", tier: "A", tierSource: SRC.ALLTHINGS_MELEE, note: "Source calls it the top pick for reach." },
    { name: "Machete", role: "Light slashing", tier: "A", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Hatchet", role: "Light slashing", tier: "A", tierSource: SRC.ALLTHINGS_MELEE, note: "See the community-discussion note below — a separate, pre-1.0 Steam thread also ranked this weapon highly." },
    { name: "Baseball Bat", role: "Blunt", tier: "B", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Small Knife", role: "Light slashing", tier: "B", tierSource: SRC.ALLTHINGS_MELEE, note: "Naming caveat: the tier-list article calls this weapon “Kitchen Knife”; the current weapon roster calls it “Small Knife.” Mapped here as the same item." },
    { name: "Cleaver", role: "Light slashing", tier: "B", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Claw Hammer", role: "Light blunt", tier: "C", tierSource: SRC.ALLTHINGS_MELEE,
      note: "DISPUTED — see the community-discussion note below. The published post-1.0 guide ranks it as early-game filler (C tier); a separate pre-1.0 Steam thread shows players actively disagreeing about whether it's actually strong." },
    { name: "Mallet", role: "Light blunt", tier: "C", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Small Pipe", role: "Light blunt", tier: "C", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Wrench", role: "Light blunt", tier: "C", tierSource: SRC.ALLTHINGS_MELEE, note: "Naming caveat: the tier-list article calls this weapon “Small Wrench”; the current weapon roster just calls it “Wrench” (with a separate “Large Wrench” also in the roster, untiered). Mapped here as the same item." },
    { name: "Tire Iron", role: "Light blunt", tier: "C", tierSource: SRC.ALLTHINGS_MELEE, note: null },
    { name: "Crowbar", role: "Light blunt", tier: null, tierSource: null, note: "Not tiered by the post-1.0 guide — see the community-discussion note below for a disputed pre-1.0 community ranking." },
    { name: "Rebar", role: "Heavy blunt", tier: null, tierSource: null, note: "Not tiered by any source found." },
    { name: "Large Pipe", role: "Heavy blunt", tier: null, tierSource: null, note: "Not tiered by any source found." },
    { name: "Large Wrench", role: "Heavy blunt", tier: null, tierSource: null, note: "Not tiered by any source found." },
    { name: "Shovel", role: "Heavy melee", tier: null, tierSource: null, note: "Not tiered by any source found." },
    { name: "Hockey Stick", role: "Heavy blunt", tier: null, tierSource: null, note: "Not tiered by any source found." }
  ];

  var MELEE_TIER_ORDER = { S: 0, A: 1, B: 2, C: 3 };

  var MELEE_COMMUNITY_NOTE = {
    thread: "Steam Community — “Melee weapon tier?” (Apr 10, 2025, predates the 1.0 combat rework)",
    text: "A community thread ranked the Hatchet, Crowbar, Machete, and Claw Hammer as its top tier. Replies pushed back specifically on the Claw Hammer: one poster called its placement into question, saying it looked “hardly better” than the Tire Iron or Mallet, and another explicitly disagreed with the S-rating; two other posters defended it as genuinely strong. A separate poster rated the Crowbar one tier below the others in that same thread, rather than at the top. Because this thread predates the 1.0 combat rework, it is shown here only for the Claw Hammer / Crowbar disagreement it documents — not used to confirm or deny the post-1.0 tier list above, since the two sources may describe different patches of the game."
  };

  // ───────────────────────────────────────────────────────── perks

  // Field "corroborated": true only where allthings.how's independent skills
  // guide describes the same effect (not just names the skill). Where
  // allthings.how names the skill with no effect text, or doesn't mention it
  // at all, this ships as single-sourced to powerupgaming.co.uk and says so.
  var PERKS = [
    { profession: "Army Reservist", name: "Hellfire", effect: "Improves hip-fire accuracy with rifles.", corroborated: false },
    { profession: "Army Reservist", name: "Mohawk", effect: "Lets rifles penetrate more targets.", corroborated: true },
    { profession: "Baseball Rookie", name: "Hard Blow", effect: "Increases stagger damage from two-handed melee attacks.", corroborated: true },
    { profession: "Baseball Rookie", name: "Teddy Bear", effect: "Boosts stability damage from blunt weapons but reduces direct damage.", corroborated: false,
      conflict: "VERSION CONFLICT: powerupgaming.co.uk (dated 2026-08-13) lists this as an active skill. allthings.how's own skills guide for the 1.0 “Armageddon” patch states Teddy Bear was removed in 1.0. Shown here with both claims disclosed — neither source's patch currency could be independently confirmed." },
    { profession: "Bear Hunter", name: "Penetrating Shot", effect: "Lets heavy-rifle shots penetrate more targets.", corroborated: true },
    { profession: "Bird Hunter", name: "Icarus", effect: "Increases shotgun range.", corroborated: true },
    { profession: "Coast Guard Veteran", name: "Limbo", effect: "Lets you survive longer when downed.", corroborated: false },
    { profession: "Courier", name: "Caravan", effect: "Increases carry weight but reduces health and stamina.", corroborated: true },
    { profession: "Courier", name: "Mule", effect: "Increases backpack weight capacity.", corroborated: true },
    { profession: "Deer Hunter", name: "Averaging", effect: "Reduces headshot damage but increases body-shot damage.", corroborated: false,
      conflict: "VERSION CONFLICT: powerupgaming.co.uk (dated 2026-08-13) lists this as an active skill. allthings.how's own skills guide for the 1.0 “Armageddon” patch states Averaging was removed in 1.0. Shown here with both claims disclosed — neither source's patch currency could be independently confirmed." },
    { profession: "Deer Hunter", name: "Quiet Steps", effect: "Reduces movement noise.", corroborated: false },
    { profession: "Deputy", name: "Tight Shot", effect: "Reduces shotgun pellet spread.", corroborated: true },
    { profession: "Deputy", name: "Wicked", effect: "Increases handgun limb damage.", corroborated: false },
    { profession: "Designated Marksman", name: "Steel Chamber", effect: "Increases damage from heavy rifles.", corroborated: true },
    { profession: "Detective", name: "Headblown", effect: "Increases handgun headshot damage.", corroborated: true },
    { profession: "Detective", name: "Locked On", effect: "Reduces SMG recoil.", corroborated: false },
    { profession: "Engineer", name: "Longer Battery", effect: "Extends flashlight battery life.", corroborated: false },
    { profession: "Football MVP", name: "Adrenaline Rush", effect: "Reduces stamina use at critical health.", corroborated: false },
    { profession: "Football MVP", name: "Marathon Runner", effect: "Reduces stamina use while running.", corroborated: true },
    { profession: "Hockey Player", name: "Foreman", effect: "Lets kicks damage zombies.", corroborated: false },
    { profession: "Hockey Player", name: "Rush", effect: "Reduces stamina use for two-handed heavy melee attacks.", corroborated: true },
    { profession: "Lumberjack", name: "Resilience", effect: "Greatly reduces environmental damage.", corroborated: false },
    { profession: "Marine Veteran", name: "Steady Shot", effect: "Increases rifle recoil but reduces sway while aiming down sights crouched.", corroborated: false,
      conflict: "SOURCES DISAGREE ON DIRECTION: powerupgaming.co.uk says this skill increases recoil as its tradeoff. allthings.how's skills guide groups “Steady Shot” with “Steady Hand” under reduced recoil and spread — the opposite direction. Shown here as powerupgaming's wording, with the contradiction disclosed rather than silently resolved." },
    { profession: "Marine Veteran", name: "Winged", effect: "Extends SMG range.", corroborated: true },
    { profession: "Martial Arts Master", name: "Heavy Shoves", effect: "Lets shoves deal damage.", corroborated: false },
    { profession: "MMA Fighter", name: "Sturdy Body", effect: "Reduces damage taken from attacks.", corroborated: true },
    { profession: "Nurse", name: "Acquired Immunity", effect: "Makes you less likely to become infected.", corroborated: true },
    { profession: "Nurse", name: "Skilled Medic", effect: "Increases healing from self or ally treatment.", corroborated: false },
    { profession: "Paramedic", name: "Genes", effect: "Lets you heal from pills.", corroborated: false },
    { profession: "Paramedic", name: "Stayin' Alive", effect: "Lets you revive other Responders faster.", corroborated: false },
    { profession: "Police Sniper", name: "Eagle Eye", effect: "Reduces damage falloff for heavy rifles.", corroborated: false },
    { profession: "Prepper", name: "Builder", effect: "Reduces the weight of utility items.", corroborated: false },
    { profession: "Prepper", name: "Scavenger", effect: "Increases ammo gained from pickups.", corroborated: true },
    { profession: "Prop Master", name: "Grenadier", effect: "Reduces the weight of throwables.", corroborated: false },
    { profession: "Quartermaster", name: "Deprived", effect: "Lowers max carry weight but increases health and stamina.", corroborated: false },
    { profession: "Quartermaster", name: "Vulture", effect: "Reduces ammo weight.", corroborated: false },
    { profession: "Rescue Specialist", name: "Healing Item Stack", effect: "Reduces the weight of medical items.", corroborated: true },
    { profession: "Rescue Specialist", name: "Lucky Pathogen", effect: "Reduces damage taken while infected.", corroborated: false },
    { profession: "Sheriff", name: "Overkill", effect: "Lets shotguns fire more pellets.", corroborated: true },
    { profession: "Sous Chef", name: "Butcher", effect: "Makes dismembering zombies much easier.", corroborated: false },
    { profession: "Spinal Surgeon", name: "Hitman", effect: "Increases damage for one-handed melee attacks but also increases their stamina cost.", corroborated: false },
    { profession: "Swim Captain", name: "Thick Skin", effect: "Increases maximum health.", corroborated: true },
    { profession: "Track Star", name: "Athlete", effect: "Increases maximum stamina.", corroborated: true },
    { profession: "Track Star", name: "Doorbreaker", effect: "Increases kick damage against barricades and doors.", corroborated: true }
  ];

  var SAFE_EARLY_PICKS = ["Athlete", "Thick Skin", "Sturdy Body", "Scavenger"];
  var SAFE_EARLY_PICKS_SOURCE = "Commonly recommended by allthings.how's skills guide for the 1.0 “Armageddon” patch, which groups these under survivability/stamina and calls them reasonable grabs on almost any Responder. This is a guide's advice, not a verdict this page makes on its own.";

  var api = {
    SRC: SRC,
    GUNS: GUNS,
    GUN_TIER_ORDER: GUN_TIER_ORDER,
    MELEE: MELEE,
    MELEE_TIER_ORDER: MELEE_TIER_ORDER,
    MELEE_COMMUNITY_NOTE: MELEE_COMMUNITY_NOTE,
    PERKS: PERKS,
    SAFE_EARLY_PICKS: SAFE_EARLY_PICKS,
    SAFE_EARLY_PICKS_SOURCE: SAFE_EARLY_PICKS_SOURCE
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NMRIH2DATA = api;
  }
})(typeof window !== "undefined" ? window : this);
