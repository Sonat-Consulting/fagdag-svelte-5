<script lang="ts">
	import { fly } from 'svelte/transition'
	import { navigating } from '$app/stores'

	let { children } = $$props
</script>

{#key $navigating}
	<div in:fly={{ x: '-100%', duration: 200 }}>
		{children}
	</div>
{/key}
