<script>
  import { round, points, givenAnswers } from "./stores.js";

  function resetGame() {
    round.set(0);
    points.set(0);
    givenAnswers.set([]);
  }
</script>

<style>
  .screen {
    background: darkblue;
    border: 2px whitesmoke solid;
    color: whitesmoke;
    padding: 2rem;
    margin: 1.5rem;
    border-radius: 10px;
  }
  .right {
    font-weight: bold;
    color: greenyellow;
  }
  .wrong {
    text-decoration: line-through;
    color: darkred;
  }
  button {
    margin: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    background: darkblue;
    border: 2px whitesmoke solid;
    color: whitesmoke;
  }
  h1 {
    text-decoration: underline;
  }
</style>

<div class="screen">
  <h1>{$points} Punkt{$points !== 1 ? "e" : ""}</h1>

  {#each $givenAnswers as {state, answer, correctAnswer}}
    <p> 
      <strong>{state}:</strong>
      {#if answer === correctAnswer}
        👍 <span class="right">{answer}</span> 
      {:else}
        👎 <span class="wrong">{answer}</span> 👉 <span class="right">{correctAnswer}</span>
      {/if}
    </p>
  {/each}

  <button on:click={resetGame}>Nochmal!</button>
</div>