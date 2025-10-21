# Quick Start Guide

## If you encounter esbuild errors, try these solutions:

### Solution 1: Clean Install
```bash
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules, package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall
npm install

# Run dev server
npm run dev
```

### Solution 2: Use Alternative Package Manager
```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

### Solution 3: Manual Build
```bash
# Build the project
npm run build

# Preview the built version
npm run preview
```

### Solution 4: Check Node Version
This project requires Node.js 16 or higher. Check your version:
```bash
node --version
```

If you're using an older version, update Node.js from https://nodejs.org/

## Expected Result

When the dev server starts successfully, you should see:
```
VITE v5.0.8  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

Then open http://localhost:3000 in your browser to see the application.

## Features You'll See

1. **Hero Section** - Beautiful landing page with animations
2. **Problem Section** - Explanation of siloed vs integrated approaches
3. **Definition Section** - What is integrated mine planning
4. **Key Players** - Interactive cards showing different departments
5. **Principles Section** - The three guiding principles
6. **Benefits Section** - Major advantages of integration
7. **Interactive Simulator** - Run simulations comparing both approaches
8. **Value Chain Calculator** - Adjust parameters to see real-time calculations
9. **Conclusion** - Final thoughts and career perspective

## Troubleshooting

If the application doesn't start:
1. Make sure no other process is using port 3000
2. Try running on a different port: `npm run dev -- --port 3001`
3. Check that all dependencies installed correctly: `npm list`
4. Look for any error messages in the terminal

## Manual Installation of Dependencies

If npm install fails, try installing key packages individually:
```bash
npm install react react-dom
npm install vite @vitejs/plugin-react
npm install tailwindcss postcss autoprefixer
npm install framer-motion lucide-react recharts
```
