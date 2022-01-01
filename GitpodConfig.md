1. Create a new file called `.gitpod.yml`

Whenever we run a new workspace, we have to run the commands. Hence:
`tasks`
- `init`: Runs everytime someone pushes code to the main branch. In this case, we want the command `npm install` to run when code is pushed
   `command`: the command executes when someone starts a workspaces

`ports`
- onOpen: to automatically open as browser

Reference: https://www.gitpod.io/docs/references/gitpod-yml

2. To test, create a draft PR and run the gitpod button. This work environment would have the changes and you will see it automatically runs the application on `localhost:3000`