<script>
  import { fly } from "svelte/transition";
  import BlueContainer from "../controls/BlueContainer.svelte";
  import Button from "../controls/Button.svelte";
  import {
    isGameInInitState,
    round,
    totalRounds,
    points,
    gameType,
    givenAnswers
  } from "../stores.js";
  import { gameTypes } from "../data.js";

  function resetGame() {
    round.set(0);
    points.set(0);
    givenAnswers.set([]);
    isGameInInitState.set(true);
  }
</script>

<style>
  .rightAnswer {
    font-weight: bold;
    color: greenyellow;
  }
  .wrongAnswer {
    text-decoration: line-through;
    color: darkred;
  }
  h1 {
    text-decoration: underline;
  }
</style>

<div in:fly={{x:-100}}>
  <BlueContainer>
    <p>
      In der Kategorie 
      <strong>"{gameTypes.find(type => type.name === $gameType).prettyName}"</strong> 
      hast du
    </p>
    <h1>{$points} Punkt{$points !== 1 ? "e" : ""}</h1>
    <p>(von {$totalRounds} möglichen Punkten) erreicht!</p>
    {#each $givenAnswers as {state, answer, correctAnswer}}
      <p> 
        <strong>{state}:</strong>
        {#if answer === correctAnswer}
          👍 <span class="rightAnswer">{answer}</span>
        {:else}
          👎 <span class="wrongAnswer">{answer}</span> 
          👉 <span class="rightAnswer">{correctAnswer}</span>
        {/if}
      </p>
    {/each}

    <Button on:click={resetGame}>Nochmal!</Button>
  </BlueContainer>
</div>