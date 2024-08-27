# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

---

---

# Nytt prosjekt med Svelte 5

[//]: # '#### *Vite - Typescript - tailwindcss - daisyUI - i18n*'
[//]: # '<span style="color:yellow">Vite: https://vitejs.dev/guide/</span>'
[//]: # '---'

### Innhold

1. [Opprette nytt prosjekt: “fagdag-svelte-5”](#Opprette-nytt-prosjekt-fagdag-svelte-5)
2. [Legg til tailwindcss](#legg-til-tailwindcss)
3. [Legg til i18n](#legg-til-i18n)
    1. [Opprett filer for i18n i `src/lib`](#opprett-filer-for-i18n-i-srclib)
    2. [Initiere i18n i applikasjonen](#initiere-i18n-i-applikasjonen)
4. [Layout (+layout.svelte)](#layout-layoutsvelte)
5. [daisyUI og @tailwindcss/typography](#daisyui-og-tailwindcsstypography)

---

### Ressurser

- Vite: https://vitejs.dev/guide/
- Typescript: https://www.typescriptlang.org/docs/handbook/intro.html
- talwindcss: https://tailwindcss.com/docs/guides/sveltekit
- @tailwindcss/typography: https://www.npmjs.com/package/@tailwindcss/typography
- daisyUI: https://daisyui.com/docs/install/
- theme-change: https://www.npmjs.com/package/theme-change
- svelte-i18n-svelte5: https://www.npmjs.com/package/svelte-i18n-svelte5
- nvm install guide: https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating

---

# <span style="color:yellow">Opprette nytt prosjekt: "fagdag-svelte-5" </span>

Det følgende beskriver i sin helhet hvordan denne malen er opprettet.
Kun versjoner i npm-pakker skal avvike.
Hensikten med prosjektet er å spare tid på å sette opp et nytt prosjekt.

Det er selvsagt flott å opprette et nytt prosjekt med npm create vite@latest,
men siden vi skal lage et Svelte 5 prosjekt er det mer naturlig å kjøre:

```bash
npm create svelte@latest fagdag-svelte-5
```

Etter kjøring og valg gjort i installasjonen, ser det slik ut

```bash
> npm create svelte@latest fagdag-svelte-5
> npx
> create-svelte fagdag-svelte-5

create-svelte version 6.3.8

┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting, Try the Svelte 5 preview (unstable!)
│
└  Your project is ready!

Install more integrations with:
  npx svelte-add

Next steps:
  1: cd fagdag-svelte-5
  2: npm install
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat

- **Purpose**: Introduce the main objectives.
- **Scope**: Define what will be covered.
```

- Gjør “Next steps” 1 og 2 og åpne prosjektet i ønsket editor.
- Oppdater alle pakker
- Endre `.pretier.rc` etter egne preferanser, typisk:

  ```typescript
  {
      "semi": false,
      "trailingComma": "all",
      "singleQuote": true,
      "printWidth": 120,
      "tabWidth": 2,
      "endOfLine": "auto",
      "useTabs": true,
      "plugins": ["prettier-plugin-svelte"],
      "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
  }
  ```

- Legg til extensions i svelte.config.js
  ```javascript
  ...
  extensions: ['.svelte', '.svelte.ts'],
  ...
  ```

## Legg til tailwindcss

- Installer tailwindcss
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  ```
- Legg til tailwind.config.js og postcss.config.js i prosjektet
  ```bash
  npx tailwindcss init -p
  ```
- (Nå kunne man oppdatert `tailwind.config.js`, men det kommer mer senere med eksempelkode)
- Legg til `src/app.css` og legg til tailwindcss i app.css
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## Legg til i18n

_(svelte-i18n-svelte5)_

Pakken `svelte-i18n-svelte5` ser ut til å være en branch av npm i `svelte-i18n`, som ikke støtter svelte 5, men vi installerer den likevel…

```bash
npm i svelte-i18n-svelte5
```

### Opprett filer for i18n i `src/lib`

- `src/lib/i18n/locales/no.json`
  ```json
  {
    "general": {
      "title": "fagdag-svelte-5 (no)",
      "description": "mal?"
    }
  }
  ```
- `src/lib/i18n/locales/en.json`
  ```json
  {
    "general": {
      "title": "fagdag-svelte-5 (en)",
      "description": "template?"
    }
  }
  ```
- `src/lib/i18n/index.ts`
  ```typescript
  import { getLocaleFromPathname, init, register } from 'svelte-i18n-svelte5'

  const defaultLocale = 'no'
  const supportedLocales = ['en', 'no']

  register('en', () => import('$lib/i18n/locales/en.json'))
  register('no', () => import('$lib/i18n/locales/no.json'))
  // Extract the first "segment" of a path from a URL or file path, where segments are separated by /.
  // The non-greedy *? ensures that it captures the smallest segment possible before encountering the next / or the end of the string.
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
  ```

### Initiere i18n i applikasjonen

- Opprett `src/routes/+layout.ts`
  ```typescript
  import '$lib/i18n' // Import to initialize. Important :)
  import { waitLocale } from 'svelte-i18n-svelte5'
  import type { LayoutLoad } from './$types'

  export const load: LayoutLoad = async () => {
    await waitLocale()
  }
  ```

### Opprette en slug for språk og lag en nye førsteside (`src/routes/[lang]+page.svelte`)

I utgangspunktet vil svelte nå rendre http://localhost:5173 innholdet `src/routes/+page.svelte` som først side
fordi den ligger på roten i `src/routes`. Det er koden i `src/app.html` som bestemmer
hvilken side som skal rendres.

Siden vi har språk ønsker vi at appen skal starte i http://localhost:5173/no.

Følgende skal oppfylles:

- http://localhost:5173 skal sende brukeren til http://localhost:5173/no der`no` er default språk.
- http://localhost:5173/`<hva som helst som ikke er i listen over språk>`/ skal sende brukeren til http://localhost:5173/no der`no` er default språk.
- http://localhost:5173/no skal bruke norsk språk.
- http://localhost:5173/en skal bruke engelsk språk.

For å oppnå dette må opprette noen filer

- Slett `src/routes/+page.svelte`
- Opprett mappen `src/routes/[lang]`

    - [] er convensjon for slug. `lang` blir lagt på @page

- Opprett filen `src/routes/[lang]/+page.svelte`
  ```sveltehtml
  <script>
    import { _ } from 'svelte-i18n-svelte5'  
   </script>
   
  <h1>{$_('general.title')}</h1>   
  ```

  > Merk at her importeres `_`(low dash) fra `svelte-i18n-svelte5`. Denne funksjonen er en
  > funksjon i en svelte store. Derfeor benyttes`$_` for å hente ut verdien.

Nå vil http://localhost:5173 gi 404 mens http://localhost:5173/no
viser `fagdag-svelte-5 (no)` og http://localhost:5173/en viser `fagdag-svelte-5 (en)`.
Det er fordi det ikke finnes noen `+page.svelte` i `src/routes`

Altså må vi redirecte http://localhost:5173 til http://localhost:5173/no.

- Opprett filen `src/routes/+page.server.svelte`
  ```typescript
  import type { PageServerLoad } from './$types'
  import { redirect } from '@sveltejs/kit'
  import defaultLang from '$lib/i18n'

  const { defaultLocale } = defaultLang

  export const load: PageServerLoad = async () => {
    redirect(307, `/${defaultLocale}`)
  }
  ```

Nå vil http://localhost:5173 redirecte til http://localhost:5173/no, men vi kan
fremdeles skrive hva vi vil i slugen. Derfor må vi gjøre en
tilsvarende sjekk i `src/routes/[lang]/`

- Opprett filen `src/routes/[lang]/+page.server.svelte`
  ```typescript
  import type { PageServerLoad } from './$types'
  import { redirect } from '@sveltejs/kit'
  import defaultLang from '$lib/i18n'

  const { defaultLocale, supportedLocales } = defaultLang

  export const load: PageServerLoad = async ({ params: { lang } }) => {
    if (lang === undefined || !supportedLocales.includes(lang)) {
      redirect(307, `/${defaultLocale}`)
    }
  }
  ```

## Layout (+layout.svelte)

Det er fornuftig å ha en layout-fil på roten i `src/routes`. Den inneholder plassering av
header, footer sidebar og sier hvor hvovedsiden skal rendres.

Hovedsiden er i dette eksempelet den første `+page.svelte` der vi har bestemt at
applikasjonen skal starte, altså i `src/routes/[lang/]`

- Opprett `src/routes/+layout.svelte`. I sin enkleste form ser den ut som vist under. Vi velger å importere app.css her, men den kunne også ligget i en annen `+layout.server`. Nå sikrer vi at `app.css` gjelder for alle undersider.
  ```sveltehtml
  <script>
    import '../app.css'
    let { children } = $props()
  </script>

  <div class="app">
    <main>
      {@render children()}
    </main>
  </div>
  ```

## daisyUI og @tailwindcss/typography

- installer daisyUi
  ```bash
  npm i -D daisyui@latest
  ```
- Installer @tailwindcss/typography
  ```bash
  npm i -D @tailwindcss/typography
  ```
- Oppdater plugins i tailwind.config.js
   ```javascript
    /** @type {import('tailwindcss').Config} */
    import daisyui from 'daisyui'
    import typography from '@tailwindcss/typography'
    import themes from 'daisyui/src/theming/themes'
    export default {
      content: ['./src/**/*.{html,js,svelte,ts}'],
      theme: {
        extend: {},
      },
      plugins: [typography(), daisyui],
      daisyui: {
        themes: [
          {
            light: {
              ...themes['light'], // customizing light theme
              primary: 'blue',
              secondary: 'teal',
            },
          },
          'light',
          'dark',
          'cupcake',
          'bumblebee',
          'emerald',
          'corporate',
          'synthwave',
          'retro',
          'cyberpunk',
          'valentine',
          'halloween',
          'garden',
          'forest',
          'aqua',
          'lofi',
          'pastel',
          'fantasy',
          'wireframe',
          'black',
          'luxury',
          'dracula',
          'cmyk',
          'autumn',
          'business',
          'acid',
          'lemonade',
          'night',
          'coffee',
          'winter',
          'dim',
          'nord',
          'sunset',
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: 'dui-', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ':root', // The element that receives theme color CSS variables
      },
    }
    ```
