<script>
  import { fly } from "svelte/transition";
  import GameButton from "./GameButton.svelte";
  import Summary from "./Summary.svelte";
  import data from "./stateData.js";
  import shuffle from "./shuffle.js";
  import { round, points, givenAnswers } from "./stores.js";

  let states = shuffle(data);
  let currentRoundNumber,
    candidateStatesOfThisRound,
    currentStateInQuestion,
    currentCorrectAnswer;

  let totalRounds = 5;

  round.subscribe(value => {
    currentRoundNumber = value;
    if (currentRoundNumber === 0) {
      states = shuffle(data);
    }
    if (currentRoundNumber < totalRounds) {
      candidateStatesOfThisRound = states.slice(
        currentRoundNumber * 5,
        currentRoundNumber * 5 + 5
      );
      currentStateInQuestion = candidateStatesOfThisRound[0]["name"];
      currentCorrectAnswer = candidateStatesOfThisRound[0]["capitol"];
      candidateStatesOfThisRound = shuffle(candidateStatesOfThisRound);
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
  {#if currentRoundNumber < totalRounds}
    <div>
      Runde: {currentRoundNumber + 1}/{totalRounds}<br/>
      Punkte: {$points}/{totalRounds}
    </div>
    
    <h2>Was ist die Hauptstadt von:</h2>
    <h1>{currentStateInQuestion}</h1>

    {#each candidateStatesOfThisRound as {capitol}}
      <GameButton 
        state={currentStateInQuestion}
        answer={capitol}
        correctAnswer={currentCorrectAnswer}
      />
    {/each}
	{:else}
    <Summary />
  {/if}
</main>