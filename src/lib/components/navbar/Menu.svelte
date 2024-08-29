<script lang="ts">
	const { lang = 'no' }: { lang?: string } = $props()
</script>

<nav class="text-gray-500 uppercase text-bold sm:block">
	<a href={`/${lang}/about`} class="hover:text-gray-700 hover:no-underline">About</a>
	<a href={`/${lang}/contact`} class="hover:text-gray-700 hover:no-underline">Contact</a>
	<a href={`/${lang}`} class="pl-20 hover:text-gray-700 hover:no-underline">Home</a>
</nav>
