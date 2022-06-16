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
  :global(body) {
    background-color: darkred;
    background-image: url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9dbda' fill-opacity='0.09' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
    height: 100%;
    margin: 0;
  }
  main {
    font-family: sans-serif;
    font-size: 1.2rem;
    text-align: center;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin: 0 0 0.5em 0;
    font-size: 3rem;
  }
  h2 {
    margin: 1em 0 0.6em 0;
    font-size: 1.2rem;
  }
  .game {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>

<main>
  {#if currentRoundNumber < totalRounds}
    <div>
      👉 Runde: 
      {#key currentRoundNumber}
        <span style="display: inline-block" in:fly={{ y: -20 }}>
          {currentRoundNumber + 1}
        </span>
      {/key}
      /{totalRounds} 👈
    </div><div>
      👉 Punkte: 
      {#key $points}
        <span style="display: inline-block" in:fly={{ y: -20 }}>
          {$points}
        </span>
      {/key}
      /{totalRounds} 👈
    </div>
    
    <h2>Was ist die Hauptstadt von</h2>

    {#key currentRoundNumber}
    <!---->
      <div class="game" in:fly={{x:-100}}>
        <h1>{currentStateInQuestion}?</h1>

        {#each candidateStatesOfThisRound as {capitol}}
          <GameButton 
            state={currentStateInQuestion}
            answer={capitol}
            correctAnswer={currentCorrectAnswer}
          />
        {/each}
      </div>
    {/key}
	{:else}
    {#key currentRoundNumber}
      <div in:fly={{x:-100}}>
        <Summary/>
      </div>
    {/key}
  {/if}
</main>