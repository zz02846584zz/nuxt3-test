import{a as o,ar as r,o as a,b as l,q as e,y as n,u as t,Y as i}from"./entry.d78a7e75.js";const c="nuxt3-awesome-starter",u="0.1.0",p="a Nuxt 3 starter template or boilerplate with a lot of useful features. Nuxt3 + Tailwindcss 3",d={type:"git",url:"git://github.com/viandwi24/nuxt3-awesome-starter"},x="viandwi24",m="MIT",h={build:"nuxt build",dev:"nuxt dev",generate:"nuxt generate",preview:"nuxt preview",start:"node .output/server/index.mjs",serve:"serve dist/",postinstall:"husky install",lint:'eslint --ext ".ts,.js,.vue" --ignore-path .eslintignore .',lintfix:'eslint --fix --ext ".ts,.js,.vue" --ignore-path .eslintignore .',prepare:"husky install",clean:"rm -rf .nuxt dist .output","generate:locales":"node tools/translator.js ./locales en.yml"},g={"@babel/core":">=7.13.0 <8.0.0","@commitlint/cli":"^17.0.3","@commitlint/config-conventional":"^17.0.3","@headlessui/vue":"^1.7.2","@iconify/json":"^2.1.70","@intlify/nuxt3":"^0.2.4","@nuxt/content":"^2.2.0","@nuxt/test-utils-edge":"3.0.0-rc.13-27772354.a0a59e2","@nuxtjs/eslint-config-typescript":"^10.0.0","@nuxtjs/eslint-module":"3.1.0","@pinia/nuxt":"^0.4.2","@types/multer":"^1.4.7","@types/store":"^2.0.2","@vueuse/nuxt":"^9.2.0",eslint:"^8.23.1","eslint-config-prettier":"^8.5.0","eslint-plugin-nuxt":"^3.2.0","eslint-plugin-prettier":"^4.2.1",husky:"^8.0.1","js-yaml":"^4.1.0","lint-staged":"^13.0.3",nuxt:"npm:nuxt3@3.0.0-rc.13-27772354.a0a59e2","nuxt-windicss":"^2.5.1",pinia:"^2.0.18",postcss:"8.4.14","postcss-loader":"^7.0.0",prettier:"^2.7.1",sass:"1.53.0","sass-loader":"^13.0.2",serve:"^13.0.2",three:"^0.143.0",translate:"^1.4.1",typescript:"^4.8.3","unplugin-icons":"^0.14.12","unplugin-vue-components":"^0.22.8",vite:">=2.9.0 <3.0.0 || >=3.0.0-0 <3.0.0",vitest:"^0.23.4",vue:"^3.2.41","vue-tsc":"^1.0.9",webpack:">=5.0.0 <6.0.0"},v={axios:"^1.1.3","form-data":"^4.0.0",multer:"1.4.5-lts.1",store:"^2.0.12"},f={name:c,version:u,description:p,repository:d,author:x,license:m,scripts:h,devDependencies:g,"lint-staged":{"**/*.{js,ts,vue,html}":["pnpm lintfix"]},dependencies:v},_={class:"border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]"},y={class:"max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"},w={class:"w-full py-4 text-center md:text-left"},b={class:"mb-1"},k={class:"text-xs text-gray-600 dark:text-gray-400"},j=["href"],D=e("span",{class:"text-red-500"},"\u2764",-1),N={class:"flex flex-col md:flex-row space-x-2 items-center md:float-right"},A=e("span",{class:"text-center md:text-right"},[i(" design by "),e("a",{href:"https://github.com/viandwi24"},"viandwi24")],-1),B={class:"block bg-blue-500 rounded px-1 py-0.5 text-white text-xs"},q=o({__name:"Footer",setup(C){const s=r();return(T,M)=>(a(),l("footer",_,[e("section",y,[e("div",w,[e("div",b,n(t(s).name),1),e("div",k,[i(" Copyright \xA9 2022 "),e("a",{href:t(s).author.link},n(t(s).author.name),9,j),i(". All rights reserved. Made with "),D,e("div",N,[A,e("span",B,n(t(f).devDependencies.nuxt),1)])])])])]))}});export{q as _};
