import { mkdirSync, writeFileSync } from "node:fs";

// One-title entry for "Weirdest Job Title".
// One job title, 44 chars, no trailing newline. The brief wants a
// real-sounding job plus one hilariously specific twist, landing on
// first read. "Senior Apologizer" is a corporate title nobody has;
// "Self-Checkout Machines" are universally hated and beep at you —
// a person whose whole job is apologising for them is instantly
// picturable, and the seniority makes it a career.
const TITLE = "Senior Apologizer for Self-Checkout Machines";

function main(): void {
  if (TITLE.length !== 44) {
    throw new Error(`entry must be 44 chars, got ${TITLE.length}`);
  }
  console.log(`entry OK (${TITLE.length} chars)`);
  console.log(TITLE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TITLE, "utf8");
}

main();
