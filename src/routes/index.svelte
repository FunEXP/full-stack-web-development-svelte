<script>
    import TodoItem from "$lib/todo-item.svelte";

    const title="Todo";
</script>

<!-- To target css styles on this component specifically -->
<style>
    .todos {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }

    .new{

    }
</style>

<!-- App Name that changes base on the page-->
<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>

    <form action="" method="">
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ tap to add a todo">
    </form>

    <TodoItem/>
</div>