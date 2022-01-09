/// <reference types="@sveltejs/kit" />

// This file declares global types

type Todo = {
    uid: string;
    created_at: Date;
    text: string;
    done: boolean;
}
