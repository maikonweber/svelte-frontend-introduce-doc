import { writable } from 'svelte/store';

/**
 * @param {{ done: any; description: any; }[]} initial
 */
export function createTodoStore(initial) {
    let uid = 1;

    const todos = initial.map(({ done, description }) => {
        return {
            id: uid++,
            done,
            description
        };
    });

    const { subscribe, update } = writable(todos);

    return {
        subscribe,
        add: (/** @type {any} */ description) => {
            const todo = {
                id: uid++,
                done: false,
                description
            };

            update($todos => [...$todos, todo])
        },
        remove: (/** @type {{ id: number; done: any; description: any; }} */ todo) => {
            update($todos => $todos.filter((t) => t !== todo));
        },
        mark: (/** @type {{ id: number; done: any; description: any; }} */ todo, /** @type {any} */ done) => {
            update($todos => [
                ...$todos.filter((t) => t !== todo),
                { ...todo, done }
            ]);
        }
    };
}
