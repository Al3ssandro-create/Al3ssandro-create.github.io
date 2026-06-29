// PostToolUse hook: lint the edited .ts/.tsx file for fast feedback.
// Reads the hook JSON payload from stdin, runs the project's local ESLint.
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

const localEslint = process.platform === "win32"
  ? "node_modules/.bin/eslint.cmd"
  : "node_modules/.bin/eslint";

let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  let file = "";
  try {
    const payload = JSON.parse(raw || "{}");
    file =
      payload?.tool_response?.filePath || payload?.tool_input?.file_path || "";
  } catch {
    process.exit(0);
  }
  if (!/\.(ts|tsx)$/.test(file)) process.exit(0);
  // Skip if deps aren't installed — avoids npx fetching a wrong ESLint version.
  if (!existsSync(localEslint)) process.exit(0);
  spawnSync(localEslint, [file], { stdio: "inherit", shell: true });
  // Never block the edit on lint findings — they surface in the transcript.
  process.exit(0);
});
