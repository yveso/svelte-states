<script>
  import BlueContainer from "../controls/BlueContainer.svelte";
  import Button from "../controls/Button.svelte";
  import { isGameInInitState, totalRounds, gameType } from "../stores.js";
  import { gameTypes } from "../data.js";

  function startGame() {
    isGameInInitState.set(false);
  }
</script>

<style>
  label {
    display: block;
    font-size: 1.2em;
    padding: 0.4em;
  }
  h1,
  h2 {
    text-decoration: underline;
  }
  input[type="range"] {
    margin: 2em;
    width: 100%;
  }
</style>

<BlueContainer>
  <h1>Hello, how are you?</h1>
  <p>Herzlich willkommen beim super-duper US Bundesstaaten Quiz!</p>
  <h2>Wie viele Runden möchtest du spielen?</h2>
  <label>    
    <input type=range bind:value={$totalRounds} min=5 max=10>
    {$totalRounds} Runden
  </label>
  <h2>Was soll abgefragt werden?</h2>
  {#each gameTypes as type}
    <label>
	    <input type=radio bind:group={$gameType} name="gameType" value={type.name}>
      {type.prettyName}
    </label>
  {/each}
  <Button on:click={startGame}>Los geht's!</Button>
</BlueContainer>