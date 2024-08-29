import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import defaultLang from '$lib/i18n'

const { defaultLocale } = defaultLang

export const load: PageServerLoad = async ({ parent }) => {
	const layoutData = await parent()
	console.log('2: src/+page.server.ts hvis redirect', 'layoutData:', layoutData)
	redirect(307, `/${defaultLocale}`)
}
