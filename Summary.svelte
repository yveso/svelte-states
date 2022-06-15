<script>
  import { round, points, givenAnswers } from "./stores.js";

  function resetGame() {
    round.set(0);
    points.set(0);
    givenAnswers.set([]);
  }
</script>

<style>
  .right {
    font-weight: bold;
    color: green;
  }
  .wrong {
    text-decoration: line-through;
    color: red;
  }
</style>

<h1>Ende</h1>
<h2>{$points} Punkt{$points !== 1 ? "e" : ""}</h2>

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