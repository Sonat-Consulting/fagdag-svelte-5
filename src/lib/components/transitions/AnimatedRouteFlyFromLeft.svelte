<script lang="ts">
	import { fly } from 'svelte/transition'
	import { navigating } from '$app/stores'
</script>

{#key $navigating}
	<div in:fly={{ x: '-100%', duration: 300 }}>
		<slot />
	</div>
{/key}
