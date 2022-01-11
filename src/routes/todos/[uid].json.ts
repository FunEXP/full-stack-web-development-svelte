// This file is for endpoint with dynamic uids 

import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

// @Path("/todos/[uid].json")
export const del: RequestHandler = (request) => {
    console.log("The delete request");
    return api(request);
}

export const patch: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        text: request.body.get("text")  //Remember that the input field needs to have the same name "text"
    });
}