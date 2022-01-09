# HTML
- forms because of actions that needs to be submitted to the backend
- ctrl-d to select all occurences and replace respectively
- `$` to point to current directory (svelte specific)
- forms only support GET and POST
    - so for the DELETE endpoint, method as post but modify the url
    - create a `hooks.ts` file to intersect the request before reading the api

# CSS
- `__layout.svelte` contains code that applies to all the files and diretories in the current directory
    - the content of the page also needs to be dynamically changed with `slot`

# File
Any files in the `routes` folder becomes the endpoint if it ends in `.ts` or `.js`
Or a page if it ends in `.svelte`

For helper class,
If however the file starts with `_` the routes directory ignores it and does not create a route for it.