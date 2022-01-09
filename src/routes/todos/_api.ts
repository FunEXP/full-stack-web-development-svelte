import type { Request } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

export const api = (request: Request, todo?: Todo) => {
    console.log("Entered the api function?");
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(todo);
            body = todo;
            status = 201;
            break;
        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid);
            status=200;
            break;
        default:
            break;
    }

    console.log("The method:"+request.method.toUpperCase());

    if (request.method.toUpperCase() !== "GET"){
        return {
            status: 303, //to redirect back to the same page
            headers: {
                location: "/",
            }
        }
    }

    return {
        status, body
    }
}
