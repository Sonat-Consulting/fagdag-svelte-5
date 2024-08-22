import type { PageServerLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import defaultLang from '$lib/i18n'

const { defaultLocale } = defaultLang

export const load: PageServerLoad = async () => {
	redirect(307, `/${defaultLocale}`)
}
