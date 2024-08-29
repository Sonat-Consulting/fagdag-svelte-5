<script lang="ts">
	import { page } from '$app/stores';

	$inspect('page', $page);
	console.log('katt?', $page.url.searchParams.get('katt')?.toString());
</script>
{#if $page.error}
	<h1 class="text-red-600">{$page.status}: {$page.error.message}</h1>
{/if}
