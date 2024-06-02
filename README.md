# Personal Website

Interactive terminal-like website as my personal web. Heavily inspired by [Aurora](https://github.com/flick0/dotfiles) by [flick0](https://github.com/flick0).
This website is built on top of React and TailwindCSS. Terminal using Xterm.js and run as client only without a backend.
Commands can be found at `/src/commands` directory.

Tech:
- Bun
- Vite
- React
- Xterm.js
- Typescript
- TailwindCSS


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
