module.exports = {
  "*.{js,ts,tsx}": "npm run lint",
  "*.{js,ts,tsx,css,md}": "prettier --write --ignore-unknown",
  "*.{ts,tsx}": () => "npm run typecheck",
};
