<script context="module" lang="ts">
// Only run once for all instances
// Where we want to fetch data from the backend API
    import type {Load} from "@sveltejs/kit";
    import { enhance } from "$lib/actions/form";


    export const load = async ({ fetch }) => {
        const res = await fetch("/todos.json");
        if (res.ok){
            const todos = await res.json();
            return{
                props: { todos }
            }
        }

        const { message } = await res.json();
        return{
            error: new Error(message)
            // automatically render error page
        }
    };
</script>


<script lang="ts">
    import TodoItem from "$lib/todo-item.svelte";

    export let todos: Todo[];

    const title="Todo";

    const processNewTodoResult = async (res: Response, form: HTMLFormElement) => {
        const newTodo = await res.json();
        todos = [...todos, newTodo] //Not sure why todos.push(newTodo) doesn't seem to work with svelte
        form.reset();
    };

    const processUpdatedTodoResult = async (res: Response) => {
        const updatedTodo = await res.json();
        todos = todos.map(t => {
            if(t.uid === updatedTodo.uid) return updatedTodo;
            return t;
        })
    }
    
</script>

<!-- To target css styles on this component specifically -->
<style>
    .todos {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }

    .new{
        margin: 0 0 0.5rem 0;
    }

    .new input {
        font-size: 28px;
        width: 100%;
        padding: 0.5em 1em 0.3em 1em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        text-align: center;
    }

    /* Target the todo class and all the children input if available */
    .todos :global(input){
        border: 1px solid transparent;
    }

    /* When u click on one of the inputs scenario styling */
    .todos :global(input:focus-visible){
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00 !important;
        outline: none;
    }


</style>

<!-- App Name that changes base on the page-->
<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>

    <form action="/todos.json" method="post" class="new" use:enhance={{
        result: processNewTodoResult}}>     <!-- Calls the post api --> 
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ tap to add a todo">
    </form>


    <!-- For loop -->
    {#each todos as todo}
        <!-- Only {todo} because todo={todo} is the same -->
        <TodoItem 
            {todo} 
            processDeletedTodoResult={() => {
                todos = todos.filter(t => t.uid !== todo.uid);
            }}
            {processUpdatedTodoResult}
        />
    {/each}
</div>