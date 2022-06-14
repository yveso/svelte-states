import { writable } from "svelte/store";

export const round = writable(0);
export const points = writable(0);
export const givenAnswers = writable([]);
