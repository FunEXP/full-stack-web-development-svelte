import type { Request } from "@sveltejs/kit";
import PrismaClient from "$lib/prisma";

// // TODO: Persist in database
// let todos: Todo[] = [];

const prisma = new PrismaClient();

// Use data of type Record so we can pass in any kind of data, rather than the whole Todo
//unknown because the type of the key could be boolean etc according to the Todo definition
export const api = async (request: Request, data?: Record<string, unknown>) => {
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
        case "GET":
            body = await prisma.todo.findMany();
            status = 200;
            break;
        case "POST":
            // todos.push(data as Todo);
            body = await prisma.todo.create({
                data: {
                    created_at: data.created_at as Date,
                    done: data.done as boolean,
                    text: data.text as string
                }
            })
            // body = data; //Prisma's create function return the id of the created item
            status = 201;
            break;
        case "DELETE":
            // todos = todos.filter(todo => todo.uid !== request.params.uid);
            await prisma.todo.delete({
                where: {
                    uid: request.params.uid
                }
            })
            status = 200;
            break;
        case "PATCH":
            // todos = todos.map(todo => {
            //     if (todo.uid === request.params.uid){
            //         if (data.text) todo.text = data.text as string;
            //         else todo.done = data.done as boolean;
            //     }
            //     return todo;
            // });
            // body = todos.find(todo => todo.uid === request.params.uid); //Returns the updated todo object
            body = await prisma.todo.update({
                where: {
                    uid: request.params.uid
                },
                data: {
                    done: data.done, 
                    text: data.text
                }
            })
            status = 200;
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
