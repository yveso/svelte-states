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
	  background: #29262b;
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 2px;
	  display: block;
	  margin: 10px;
	}
</style>

<button on:click={handleClick}>
  {answer}
</button>