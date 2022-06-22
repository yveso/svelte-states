<script>
  import { fly } from "svelte/transition";
  import GameButton from "../controls/GameButton.svelte";
  import {
    round,
    totalRounds,
    gameType,
    points,
    givenAnswers
  } from "../stores.js";
  import { stateData, gameTypes } from "../data.js";
  import shuffle from "../shuffle.js";

  let states = shuffle(shuffle(stateData));
  let candidateStatesOfThisRound, currentStateInQuestion, currentCorrectAnswer;

  round.subscribe(_ => {
    if ($round === 0) {
      states = shuffle(shuffle(stateData));
    }
    if ($round < $totalRounds) {
      candidateStatesOfThisRound = states.slice($round * 5, $round * 5 + 5);
      currentStateInQuestion = candidateStatesOfThisRound[0]["name"];
      currentCorrectAnswer = candidateStatesOfThisRound[0][$gameType];
      candidateStatesOfThisRound = shuffle(candidateStatesOfThisRound);
    }
  });
</script>

<style>
  span {
    display: inline-block;
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


<div>
  👉 Runde: 
  {#key $round}
    <span in:fly={{ y: -20 }}>
      {$round + 1}
    </span>
  {/key}
  /{$totalRounds} 👈
</div><div>
  👉 Punkte: 
  {#key $points}
    <span in:fly={{ y: -20 }}>
      {$points}
    </span>
  {/key}
  /{$totalRounds} 👈
</div>

<h2>{gameTypes.find(type => type.name === $gameType).question}</h2>

{#key $round}
  <div class="game" in:fly={{x:-100}}>
    <h1>{currentStateInQuestion}?</h1>

    {#each candidateStatesOfThisRound as state}
      <GameButton 
        state={currentStateInQuestion}
        answer={state[$gameType]}
        correctAnswer={currentCorrectAnswer}
      />
    {/each}
  </div>
{/key}