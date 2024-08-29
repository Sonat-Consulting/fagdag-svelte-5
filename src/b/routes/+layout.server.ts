import '$lib/i18n' // Import to initialize. Important :)
import type { LayoutServerLoad } from '../../../.svelte-kit/types/src/routes'

type LayoutServerData = {
	data: string
}
export const load: LayoutServerLoad = async (): Promise<LayoutServerData> => {
	console.log('1: src/+layout.server.ts')
	return {
		data: 'Data fra +layout.server.ts',
	}
}
