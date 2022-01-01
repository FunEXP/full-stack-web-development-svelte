### package.json
The `devDependencies`.
- Svelte is a compiler that compiles our svelte files to JS files that can be deployed. Hence you will see svelte under this key.

The `scripts`.
- `dev` starts local development server, which also provides hot reloading
- `build` which goes through the application, compiles all the files and such, and is required to run before deploying the application.
- `preview` allows us to start a local server based on the generated output from the build script. Preview of the actual production.
- `check` is similar to ESLint
- `check:watch` is similar to `check`, only difference is that it will catch potential errors while working on the application
- `package` mainly for creating libraries

### svelte.config.js
Config of svelte.
`adapter` to help for deployment. In our case, we will replace it with vercel.
`target` is where to render the svelte app

### src/app.html
The entrypoint for the skeleton html.

### src/routes/index.svelte
This is the svelte code populated to the `app.html`
Create multiple pages under this folder, and we can easily asscess the new pages by adding the name of the file to the end of the url

### tsconfig.json
Svelte automatically created this file as we chose TypeScript