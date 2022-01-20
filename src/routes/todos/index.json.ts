// Create an endpoint that responds to requests
import type { RequestHandler } from "@sveltejs/kit"; //Returns request information
import {api} from "./_api";

// @Path("todos.json")
export const get: RequestHandler = (request) => {

    // Always have this else will have 404
    // return {
    //     status: 200,
    //     body: todos
    // }

    //After refactor
    return api(request);
}

export const post:RequestHandler<{}, FormData> = (request) => {  
    
    return api(request, {
        // uid: `${Date.now()}`, //TODO: Replace with the UID from the database
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });

    // Refactored

    //Check mdn FormData
    //text is the name of the form input.
    // Use object as we want to save many properties about todo
    // todos.push({
    //     created_at: new Date(),
    //     text: request.body.get("text"),
    //     done: false
    // });

    // return {
    //     status: 303, //to redirect back to the same page
    //     headers: {
    //         location: "/",
    //     }
    // }
}