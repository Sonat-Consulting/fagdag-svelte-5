import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes'

type PageServerData = {
	data: string
}

export const load: PageServerLoad = async (): Promise<PageServerData> => {
	console.log('2: src/+page.server.ts')
	return {
		data: 'Data fra +page.server.ts',
	}
}
