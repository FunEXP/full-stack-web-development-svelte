/// <reference types="@sveltejs/kit" />

// This file declares global types

type Todo = {
    created_at: Date;
    text: string;
    done: boolean;
}
