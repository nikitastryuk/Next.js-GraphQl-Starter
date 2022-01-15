# Repo Setup Steps 

# CNA
- npx create-next-app@latest --typescript
- Small cleanup

# EsLint + Prettier
- npm install --save-dev --save-exact prettier
Prettier

- npm install --save-dev eslint-config-prettier 
Turns off all ESLint rules that have the potential to interfere with Prettier rules.

- npm install --save-dev eslint-plugin-prettier
Turns Prettier rules into ESLint rules.

- npm install --save-dev eslint-plugin-simple-import-sort
Autofixable import sorting.

# Lint staged + pre-commit hook
- npm install --save-dev simple-git-hooks
- npm install --save-dev lint-staged