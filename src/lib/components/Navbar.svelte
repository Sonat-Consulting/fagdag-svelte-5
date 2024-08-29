<script lang="ts">
	import Hamburger from './navbar/Hamburger.svelte'
	import Logo from './navbar/Logo.svelte'
	import Menu from './navbar/Menu.svelte'

	let {
		sidebar = $bindable(false),
	}: {
		sidebar: boolean
	} = $props()
	// export let sidebar = false;
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar} />
		<Logo />
	</nav>

	<Menu />
</header>
