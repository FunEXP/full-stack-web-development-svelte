// This file is for endpoint with dynamic uids 

import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

// @Path("/todos/[uid].json")
export const del: RequestHandler = (request) => {
    console.log("The delete request");
    return api(request);
}