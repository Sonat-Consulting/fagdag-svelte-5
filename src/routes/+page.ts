import type { PageLoad } from './$types'

type PageData = {
	data: string
}

export const load: PageLoad = async (): Promise<PageData> => {
	console.log('4: src/+page.ts')
	return {
		data: 'Data from +page.ts',
	}
}
