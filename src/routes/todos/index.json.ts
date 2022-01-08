// Create an endpoint that responds to requests

import type { RequestHandler } from "@sveltejs/kit"; //Returns request information

// TODO: Persistent in database
let todos: Todo[] = [];

// @Path("todos.json")
export const get: RequestHandler = () => {


    // Always have this else will have 404
    return {
        status: 200,
        body: todos
    }
}

export const post:RequestHandler<{}, FormData> = (request) => {  //Check mdn FormData
    //text is the name of the form input.
    // Use object as we want to save many properties about todo
    todos.push({
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });

    return {
        status: 303, //to redirect back to the same page
        headers: {
            location: "/",
        }
    }
}