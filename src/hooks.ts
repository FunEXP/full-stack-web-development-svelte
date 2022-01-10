import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({request, resolve}) => {

    console.log("The params: "+request.url.searchParams.get("_method"));

    if (request.url.searchParams.get("_method")){
        request.method = request.url.searchParams.get("_method").toUpperCase();
    }
    const response = await resolve(request);
    return response;
};