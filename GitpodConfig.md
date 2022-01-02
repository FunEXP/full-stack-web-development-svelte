# Starting
1. Create a new file called `.gitpod.yml`

### Automation of building the workspace
Whenever we run a new workspace, we have to run the commands. Hence:
`tasks`
- `init`: Runs everytime someone pushes code to the main branch. In this case, we want the command `npm install` to run when code is pushed
   `command`: the command executes when someone starts a workspaces

`ports`
- onOpen: to automatically open as browser
In order to the browser to automatically pop up, you need to configrue settings: https://www.gitpod.io/docs/configure/browser-settings#pop-ups-2

### Fixing the hot reloading, vite
On inspection of the opened browser, `vite` has issues connecting. SvelteKit uses `vite` to do hot reloading however by default `vite` runs on `localhost:3000` but the opened browser url is https and no specified port. 

Hence we need to modify the `svelte.config.js`. Note that the url is changing per workspace, and we have the command `gp url` to get the current url. The workspace url has `3000-` hence the command is `gp url 3000`. The command is provided by GitPod.
The given url is then required as host and port as `443`. However, note again this is for gitpod. Thus we also need to modify `.gitpod.yml` to specify the environment variable `HMR_HOST`.

In `svelte.config.js`, we can then check if the host is GITPOD, and if it is not use localhost. One last thing is the `host` doesn't want `https://` and so forth. Thus we need to substitute the string.

### Extensions
From Marketplace, Svelte for VS Code (settings to add to `.gitpod.yml`)
`vscode`: the enxtension is automatically added for us.

# Testing
To test, create a draft PR and run the gitpod button. This work environment would have the changes and you will see it automatically runs the application on `localhost:3000`

Reference: https://www.gitpod.io/docs/references/gitpod-yml
