// Create an endpoint that responds to requests

import type { RequestHandler } from "@sveltejs/kit"; //Returns request information

// TODO: Persistent in database
let todos=[];

// @Path("todos.json")
export const get: RequestHandler = () => {


    // Always have this else will have 404
    return {
        status: 200,
        body: todos
    }
}

export const post:RequestHandler<{}, FormData> = (request) => {  //Check mdn FormData
    todos.push(request.body.get("text")) //text is the name of the form input

    return {
        status: 303, //to redirect back to the same page
        headers: {
            location: "/",
        }
    }
}