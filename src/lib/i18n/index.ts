import { getLocaleFromPathname, init, register } from 'svelte-i18n-svelte5'

const defaultLocale = 'no'
const supportedLocales = ['en', 'no']

register('en', () => import('$lib/i18n/locales/en.json'))
register('no', () => import('$lib/i18n/locales/no.json'))

//Extract the first "segment" of a path from a URL or file path,
// where segments are separated by /.
// The non-greedy *? ensures that it captures the smallest segment possible
// before encountering the next / or the end of the string.
// e.g. /en/page1 -> en
const locale = getLocaleFromPathname(/^\/(.*?)(?:\/|$)/)

init({
	fallbackLocale: defaultLocale,
	initialLocale: locale && supportedLocales.includes(locale) ? locale : defaultLocale,
})

const defaultLang = {
	defaultLocale,
	supportedLocales,
}

export default defaultLang
