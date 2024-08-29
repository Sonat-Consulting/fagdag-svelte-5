<script lang="ts">
	let {
		lang = 'no',
		open = $bindable(),
	}: {
		lang?: string
		open: boolean
	} = $props()

	function handleKeyup(event: MouseEvent) {
		if (open && event.button === 0) {
			open = false
		}
	}
</script>

<svelte:window onmouseup={handleKeyup} />
<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl h-full flex flex-col items-end">
		<a class="block" href={`/${lang}/about`}>About</a>
		<a class="block" href={`/${lang}/contact`}>contact</a>
		<a class="block" href={`/${lang}`}>Home</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: calc(-100vw + 10rem);
	}
</style>
