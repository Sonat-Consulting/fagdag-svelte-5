<script>
	import '../app.css';

	let { children } = $props();

	console.log('5: src/+layout.svelte');
</script>

<div class="app w-full">
	<div data-theme="dark" class="absolute sticky top-0 p-4 bg-amber-400">
		<h2 class="text-blue-900">Dette er headeren</h2>
	</div>
	<!--	<main data-theme="light" class="prose lg:prose-xl">-->
	<main data-theme="light" class="prose lg:prose-xl">
		<div class="h-[calc(100vh)]">
			{@render children()}
		</div>
	</main>
	<div class="absolute sticky bottom-0 p-4 bg-green-600 w-full">
		<h2 class="text-red-900">Dette er footer</h2>
	</div>
</div>
