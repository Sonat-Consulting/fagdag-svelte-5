import type { PageLoad } from './$types'

export type PageData = {
	pageData: string
}

export const load: PageLoad = async ({ parent }): Promise<PageData> => {
	const data = await parent()
	console.log('4: src/[lang]/+page.ts', 'data fra parent:', data)
	return {
		pageData: 'Data fra page.ts',
	}
}
