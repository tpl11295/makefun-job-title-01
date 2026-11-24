import { mkdirSync, writeFileSync } from "node:fs";

// Weirdest Job Title entry — one job title, 44 chars, no trailing newline.
// Judge brief: real-sounding job + one hilariously specific twist, lands on first read.
// "Senior Apologizer" is a corporate title nobody has; "Self-Checkout Machines"
// are universally hated and beep at you — a person whose whole job is apologising
// for them is instantly picturable.
const TITLE = "Senior Apologizer for Self-Checkout Machines";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
