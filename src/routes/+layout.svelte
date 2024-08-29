<script lang="ts">
	import '../app.css'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Navbar from '$lib/components/Navbar.svelte'

	let { children, data } = $props()
	let isSidebarOpen: boolean = $state<boolean>(false)
	console.log('5: src/+layout.svelte', 'data:', data)
	$effect(() => {
		console.log('7: src/+layout.svelte effect running')
	})

	function handleKeyup(event: KeyboardEvent) {
		if (isSidebarOpen && event.key === 'Escape') {
			isSidebarOpen = false
		}
	}
</script>

<svelte:window on:keyup={handleKeyup} />

<div class="app">
	<Sidebar bind:open={isSidebarOpen} />
	<Navbar bind:sidebar={isSidebarOpen} />
	<main>
		{@render children()}
	</main>
</div>
