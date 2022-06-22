import { writable } from "svelte/store";

export const isGameInInitState = writable(true);
export const round = writable(0);
export const totalRounds = writable(5);
export const gameType = writable("capitol");
export const points = writable(0);
export const givenAnswers = writable([]);
