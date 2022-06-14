<script>
  import Button from "./Button.svelte";
  import data from "./stateData.js";
  import shuffle from "./shuffle.js";
  import { round, points, givenAnswers } from "./stores.js";

  let states = shuffle(data);
  let currentRound, possibleStates, currentState, currentAnswer;
  let scoredPoints;
  let totalRounds = 10;

  round.subscribe(value => {
    currentRound = value;
    if (currentRound < totalRounds) {
      possibleStates = states.slice(currentRound * 5, currentRound * 5 + 5);

      currentAnswer = possibleStates[0]["capitol"];
      currentState = possibleStates[0]["name"];
      possibleStates = shuffle(possibleStates);
    }
  });
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  {#if currentRound < totalRounds}
	
  <div>
    Runde: {currentRound+1}/{totalRounds}<br/>
    Punkte: {$points}/{totalRounds}
  </div>

	<h1>{currentState}</h1>
  {#each possibleStates as {capitol}}
    <Button state={currentState} answer={capitol} isCorrect={capitol===currentAnswer} />
  {/each}
	{:else}
    <h1>Ende</h1>
    <h2>{$points} Punkte</h2>
    {#each $givenAnswers as {state, answer, isCorrect}}
      <p>{isCorrect ? "👍" : "👎"} {state}: {answer} {isCorrect ? "👍" : "👎"}</p>
    {/each}
  {/if}
</main>