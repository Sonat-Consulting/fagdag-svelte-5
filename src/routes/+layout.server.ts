import type { LayoutServerLoad } from './$types'

export type LayoutServerData = {
	layoutServerData: string
}

export const load: LayoutServerLoad = async (): Promise<LayoutServerData> => {
	console.log('1: src/+layout.server.ts')
	return {
		layoutServerData: 'Data fra layout.server.ts',
	}
}
