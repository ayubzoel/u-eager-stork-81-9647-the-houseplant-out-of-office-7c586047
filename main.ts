// The Houseplant Out-of-Office — make.fun one-liner entry.
// Writes one fresh out-of-office auto-reply, as if a houseplant had
// sent it, to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./entry.txt).
// Deterministic: no dates, no randomness, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Out of office: as a cactus I require nothing, least of all your email. I will reply when it rains. It won't.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
