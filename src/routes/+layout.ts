import '$lib/i18n' // Import to initialize. Important :)
import { waitLocale } from 'svelte-i18n-svelte5'
import type { LayoutLoad, LayoutLoadEvent } from './$types'

export type LayoutData = {
	layoutData: string
}

export const load: LayoutLoad = async ({ data }: LayoutLoadEvent): Promise<LayoutData> => {
	console.log('2: src/+layout.ts - data', data)
	await waitLocale()
	return {
		layoutData: 'Data fra layout.ts',
	}
}
