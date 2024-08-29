import '$lib/i18n' // Import to initialize. Important :)
import { waitLocale } from 'svelte-i18n-svelte5'
import type { LayoutLoad } from '../../../.svelte-kit/types/src/routes'

type LayoutData = {
	data: string
}

export const load: LayoutLoad = async (): Promise<LayoutData> => {
	console.log('3: src/+layout.ts')
	await waitLocale()
	return {
		data: 'Data from +layout.ts',
	}
}
