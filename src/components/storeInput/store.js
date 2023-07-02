import { writable, derived } from "svelte/store";

export const name = writable('word');

export const greeting = derived(name, ($name) => `Hello ${$name} !`)
