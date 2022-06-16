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
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
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
    border-radius: 10px;
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