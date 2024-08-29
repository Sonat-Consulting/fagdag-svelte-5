import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import defaultLang from '$lib/i18n'

const { defaultLocale, supportedLocales } = defaultLang
export type PageServerData = {
	dataFromPageServer: string
}

export const load: PageServerLoad = async ({ params: { lang }, parent }): Promise<PageServerData> => {
	const data = await parent()
	console.log('3: src/[lang]+page.server.ts', lang, 'data fra parent:', data)
	if (lang === undefined || !supportedLocales.includes(lang)) {
		redirect(307, `/${defaultLocale}`)
	}

	return {
		dataFromPageServer: 'Data fra page.server.ts',
	}
}
