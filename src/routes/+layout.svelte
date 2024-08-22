<script>
	import '../app.css'

	$effect(() => {
		console.log('+layout.svelte')
	})
	let { children } = $props()
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>
