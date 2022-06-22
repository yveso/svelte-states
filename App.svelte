<script>
  import Init from "./screens/Init.svelte";
  import Game from "./screens/Game.svelte";
  import Summary from "./screens/Summary.svelte";

  import { isGameInInitState, round, totalRounds } from "./stores.js";
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
</style>

<main>
  {#if $isGameInInitState}
    <Init />
  {:else if $round < $totalRounds}
    <Game />
	{:else}
    <Summary/>
  {/if}
</main>