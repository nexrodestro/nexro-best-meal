// The Best Meal You Ever Had — entry program.
// Writes one sentence about the best meal to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At my grandmother’s kitchen table, the rendang had simmered six hours, the rice was still steaming, and nobody spoke until every plate was clean.";

// The gate allows 1 to 200 characters; fail loudly instead of shipping a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
