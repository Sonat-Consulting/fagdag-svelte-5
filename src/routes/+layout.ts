import '$lib/i18n' // Import to initialize. Important :)
import { waitLocale } from 'svelte-i18n-svelte5'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
	await waitLocale()
}
