module.exports = {
  '*.{js,ts,tsx}': 'npm run lint',
  '*': 'prettier --write --ignore-unknown',
  '*.{ts,tsx}': () => 'npm run typecheck',
};
