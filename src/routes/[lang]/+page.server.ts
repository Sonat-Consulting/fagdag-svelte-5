import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import defaultLang from '$lib/i18n'

const { defaultLocale, supportedLocales } = defaultLang

export const load: PageServerLoad = async ({ params: { lang } }) => {
	if (lang === undefined || !supportedLocales.includes(lang)) {
		redirect(307, `/${defaultLocale}`)
	}
}
