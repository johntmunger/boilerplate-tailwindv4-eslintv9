# Boilerplate Vuejs 3 with Tailwind v4 and Eslint v9 with Prettier Formatting

There are some dramatic changes when using Tailwind CSS Version 4 along with large updates when migrating or installing Eslint v9 and newer. Scaffold a new project with vue `npm create vue@latest my-vue-app` and take on each of these challenges separately.

# Install Tailwind CSS v4

Once your root package is installed. Install Tailwind CSS v4
`npm install tailwindcss @tailwindcss/vite`

## Configure Vite to Use Tailwind CSS

Edit your vite.config.js or vite.config.ts file to include the Tailwind CSS Vite plugin.

```
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'; // Import the Tailwind CSS Vite plugin

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // Add tailwindcss to the plugins array
  ],
});
```

## Import Tailwind CSS in your main CSS file

Open your main CSS file (e.g., src/style.css or src/assets/main.css) and add the following line at the very top
`@import "tailwindcss";`

## Ensure your main CSS file is imported in main.ts or main.js

```
import { createApp } from 'vue';
import App from './App.vue';
import './style.css'; // Ensure your main CSS file is imported

createApp(App).mount('#app');
```

## Start the development server

`npm run dev`

Add to App.vue or similar component for testing

```
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click Me
  </button>
```

# How to get ESLint 9.11.1 to run in Vue 3

Recommended Node.js v21 and higher

`.eslintrc.js` is no longer used and a Flat File Configuration is now needed.

- Run `ncu-u` to update the dependencies and `npm i` again
- Open your code editor and delete the `.eslintrc.cjs` file
- Run the following command `npm init @eslint/config@latest` and answer the common questions
- Modify the lint script command in `pacakge.json` to look like `"lint": "eslint . --fix"`

## Update the Flat File Configuration

In `eslint.config.js` file add the following configuration code

```
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
```

From here you can run npm run lint with confidence, without getting a bunch of warnings and errors in the console.

# Code Formatting with Prettier

```bash
npm install --save-dev prettier
# or
yarn add --dev prettier
```

Use [Prettier](https://prettier.io/) to enforce a consistent code style throughout the project. It ensures that all code is formatted automatically, preventing style arguments and saving time. To ensure the exact same version of Prettier, install it as a local development dependency: Integrate with your IDE: Configure your editor (e.g., VS Code) to use Prettier as the default formatter and to run ESLint on save. By following this approach, Prettier handles all code formatting, while ESLint focuses on identifying and fixing code quality and potential bug-related issues, creating a harmonious and efficient development workflow.

- Install the Prettier Extension
  - Open VS Code.
  - Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
  - Search for "Prettier - Code formatter" and install it.

- Open VS Code Settings
  - Press Ctrl+, (or Cmd+, on macOS) to open the Settings tab.

- Set Prettier as the Default Formatter
  - In the search bar within the Settings tab, type "default formatter"
  - Under "Editor: Default Formatter", select "Prettier - Code formatter" from the dropdown menu

- Enable Format On Save
  - In the search bar within the Settings tab, type "format on save"
  - Check the box next to "Editor: Format On Save

- If not Enabled Format On Save
  - If chosen not to use Prettier with Format On Save, then run `npm run format` to manually force correct formatting within the codebase as below:

```sh
npm run format
```

- Configure Prettier Settings
  - Customize Prettier's behavior by creating a .prettierrc file in the root of your project. This file allows you to define rules such as tabWidth, semi, singleQuote, etc.
  - Prettier also integrates with .editorconfig files if present in your project for example below:

```
[*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue,css,scss,sass,less,styl}]
charset = utf-8
indent_size = 2
semi = true
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
end_of_line = lf
max_line_length = 100
```
