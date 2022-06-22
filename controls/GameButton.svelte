<script>
	import Button from "./Button.svelte";
	import { round, points, givenAnswers } from "../stores.js";

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

<Button on:click={handleClick}>
  {answer}
</Button>