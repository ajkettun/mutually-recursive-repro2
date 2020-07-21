# MutuallyRecursiveRepro2

Only root node rendered with <b>npm run start-prod</b> when tsconfig.lib.prod.json / "enableIvy": true

Expected:

node root
node-children root
node child1
node-children child1
node child2
node-children child2

Actual:

node root
node-children root
