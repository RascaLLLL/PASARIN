const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
for (const suite of ["tests/functional-qa.cjs", "tests/ui-motion.cjs"]) {
  const result = spawnSync(process.execPath, [path.join(root, suite)], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });
  if (result.error) console.error(result.error.message);
  if (result.status !== 0) process.exit(result.status || 1);
}
