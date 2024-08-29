<script lang="ts">
	import { _ } from 'svelte-i18n-svelte5'
	import { page } from '$app/stores'

	let { data } = $props()

	$effect(() => {
		console.log('6: src/[lang]/+page.svelte effect running', '$page:', $page)
	})
	console.log('6: src/[lang]/+page.svelte', 'data:', data)
</script>

<h1>{$_('general.title')}</h1>
