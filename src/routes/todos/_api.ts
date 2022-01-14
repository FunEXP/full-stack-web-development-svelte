import type { Request } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

// Use data of type Record so we can pass in any kind of data, rather than the whole Todo
//unknown because the type of the key could be boolean etc according to the Todo definition
export const api = (request: Request, data?: Record<string, unknown>) => {
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(data as Todo);
            body = data;
            status = 201;
            break;
        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid);
            status = 200;
            break;
        case "PATCH":
            todos = todos.map(todo => {
                if (todo.uid === request.params.uid){
                    if (data.text) todo.text = data.text as string;
                    else todo.done = data.done as boolean;
                }
                return todo;
            });
            status = 200;
            body = todos.find(todo => todo.uid === request.params.uid); //Returns the updated todo object
            break;
        default:
            break;
    }

    // Only when JS is disabled
    if (request.method.toUpperCase() !== "GET" && 
        request.headers.accept != "application/json"){
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
