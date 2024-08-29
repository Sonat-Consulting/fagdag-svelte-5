<script>
	let count = $state(0);
	let double = $derived(count * 2);
	$effect(() => {
		if (count > 10) {
			count = 0;
		}
	});

	function increment() {
		count += 1;
	}

	let todos = $state([
		{
			text: 'Kjøpe druer',
			isDone: false
		},
		{
			text: 'Mate katten',
			isDone: false
		}
	]);

	let numDone = $derived(todos.filter((t) => t.isDone).length);

</script>

{#if count < 4}
	<p>count er <em>mindre</em> enn 4</p>
{:else}
	<p>count er mindre enn 4 eller mer</p>
{/if}

<input onkeydown={(e) => {
	if(e.key ==="Enter") {
		todos.push({
			text: e.currentTarget.value,
			isDone: false
			});
		e.currentTarget.value = '';
	}
}}>

{#each todos as todo}
	<div>
		<input bind:value={todo.text} />
		<input type="checkbox" checked={todo.isDone} onclick={(e) => todo.isDone = e.currentTarget.checked} />
		<input type="checkbox" bind:checked={todo.isDone} />
	</div>
{/each}

<p>{numDone} oppgaver er ferdige</p>


<h1>Todo</h1>
<div>
	<button onclick={increment}>
		clicks: {count}
	</button>
	<span>{double}</span>
</div>
