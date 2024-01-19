import { writable } from "svelte/store";

export const fridgeTitle = "Fridge Messages Below:";
export const fridgeMessages = writable([fridgeTitle]);