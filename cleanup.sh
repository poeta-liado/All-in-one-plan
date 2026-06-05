#!/bin/bash

# Remove node_modules from git tracking
echo "Removing node_modules from git history..."
git rm -r --cached node_modules/

# Commit the cleanup
echo "Committing changes..."
git commit -m "Remove node_modules from version control

- Exclude node_modules directory via .gitignore
- Reduce repository size significantly
- Dependencies should be installed locally via npm install"

echo "Cleanup complete! Ready to push."
echo "Run: git push origin main"
