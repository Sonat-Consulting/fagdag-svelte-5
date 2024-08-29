<script lang="ts">
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';
</script>

{#key $navigating}
	<div in:fly={{ x: '-100%', duration: 600 }}>
		<div class="px-2 py-4 bg-amber-100">
			<!-- lenke 'Hjem' til '/' -->
			<a href="/static">Hjem</a>
		</div>
	</div>
{/key}
<h1>Hund</h1>



