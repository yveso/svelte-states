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
	  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
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