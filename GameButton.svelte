<script>
	import { round, points, givenAnswers } from "./stores.js";

	export let answer;
	export let state;
	export let correctAnswer;

	function handleClick() {
	  round.update(r => r + 1);
	  $givenAnswers = [
	    ...$givenAnswers,
	    { state: state, answer: answer, correctAnswer: correctAnswer }
	  ];
	  if (answer === correctAnswer) {
	    points.update(p => p + 1);
	  }
	}
</script>

<style>
	button {
	  background: darkblue;
	  color: whitesmoke;
	  border: 2px whitesmoke solid;
	  padding: 1em 1.6em;
	  border-radius: 6px;
	  display: block;
	  margin: 0.8rem;
	  font-size: 1.6rem;
	}
</style>

<button on:click={handleClick}>
  {answer}
</button>