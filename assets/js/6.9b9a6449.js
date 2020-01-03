(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(t,s,e){"use strict";var a=e(73),n=e.n(a);s.default=n.a},210:function(t,s,e){"use strict";e.r(s);var a={mounted:function(){document.querySelector(".".concat(this.$style.example)).textContent="This is rendered by inline script and styled by inline CSS"}},n=e(206),r=e(0);var o=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-vue-in-markdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-vue-in-markdown"}},[t._v("#")]),t._v(" Using Vue in Markdown")]),t._v(" "),e("h2",{attrs:{id:"browser-api-access-restrictions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser-api-access-restrictions"}},[t._v("#")]),t._v(" Browser API Access Restrictions")]),t._v(" "),e("p",[t._v("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),e("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("universal code requirements"),e("OutboundLink")],1),t._v(". In short, make sure to only access Browser / DOM APIs in "),e("code",[t._v("beforeMount")]),t._v(" or "),e("code",[t._v("mounted")]),t._v(" hooks.")]),t._v(" "),e("p",[t._v("If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),e("code",[t._v("<ClientOnly>")]),t._v(" component:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Note this does not fix components or libraries that access Browser APIs "),e("strong",[t._v("on import")]),t._v(" - in order to use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"templating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),e("h3",{attrs:{id:"interpolation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interpolation"}},[t._v("#")]),t._v(" Interpolation")]),t._v(" "),e("p",[t._v("Each markdown file is first compiled into HTML and then passed on as a Vue component to "),e("code",[t._v("vue-loader")]),t._v(". This means you can use Vue-style interpolation in text:")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("{{ 1 + 1 }}\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language-text"},[e("pre",[e("code",[t._v(t._s(2))])])]),t._v(" "),e("h3",{attrs:{id:"directives"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directives"}},[t._v("#")]),t._v(" Directives")]),t._v(" "),e("p",[t._v("Directives also work:")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language-text"},[e("pre",[e("code",t._l(3,(function(s){return e("span",[t._v(t._s(s)+" ")])})),0)])]),t._v(" "),e("h3",{attrs:{id:"access-to-site-page-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-to-site-page-data"}},[t._v("#")]),t._v(" Access to Site & Page Data")]),t._v(" "),e("p",[t._v("The compiled component does not have any private data but does have access to the "),e("router-link",{attrs:{to:"/guide/custom-themes.html#site-and-page-metadata"}},[t._v("site metadata")]),t._v(". For example:")],1),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("{{ $page }}\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"escaping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#escaping"}},[t._v("#")]),t._v(" Escaping")]),t._v(" "),e("p",[t._v("By default, fenced code blocks are automatically wrapped with "),e("code",[t._v("v-pre")]),t._v(". If you want to display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the "),e("code",[t._v("v-pre")]),t._v(" custom container:")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("::: v-pre\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`{{ This will be displayed as-is }}`")]),t._v("\n:::\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("div",{pre:!0},[e("p",[e("code",[t._v("{{ This will be displayed as-is }}")])])]),e("h2",{attrs:{id:"using-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-components"}},[t._v("#")]),t._v(" Using Components")]),t._v(" "),e("p",[t._v("Any "),e("code",[t._v("*.vue")]),t._v(" files found in "),e("code",[t._v(".vuepress/components")]),t._v(" are automatically registered as "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-registration.html#Global-Registration",target:"_blank",rel:"noopener noreferrer"}},[t._v("global"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("async"),e("OutboundLink")],1),t._v(" components. For example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      ├─ OtherComponent.vue\n      └─ Foo\n         └─ Bar.vue\n")])])]),e("p",[t._v("Inside any markdown file you can then directly use the components (names are inferred from filenames):")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo-Bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("demo-1"),t._v(" "),e("OtherComponent"),t._v(" "),e("Foo-Bar"),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),e("p",[t._v("Make sure a custom component's name either contains a hyphen or is in PascalCase. Otherwise it will be treated as an inline element and wrapped inside a "),e("code",[t._v("<p>")]),t._v(" tag, which will lead to hydration mismatch because "),e("code",[t._v("<p>")]),t._v(" does not allow block elements to be placed inside it.")])]),t._v(" "),e("h3",{attrs:{id:"using-components-in-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-components-in-headers"}},[t._v("#")]),t._v(" Using Components In Headers")]),t._v(" "),e("p",[t._v("You can use Vue components in the headers, but note the difference between the following two ways:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("markdown")]),t._v(" "),e("th",[t._v("Output HTML")]),t._v(" "),e("th",[t._v("Parsed Header")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("pre",{pre:!0},[e("code",[t._v(" # text <Tag/> ")])])]),t._v(" "),e("td",[e("code",[t._v("<h1>text <Tag/></h1>")])]),t._v(" "),e("td",[e("code",[t._v("text")])])]),t._v(" "),e("tr",[e("td",[e("pre",{pre:!0},[e("code",[t._v(" # text `<Tag/>` ")])])]),t._v(" "),e("td",[e("code",[t._v("<h1>text <code>&lt;Tag/&gt;</code></h1>")])]),t._v(" "),e("td",[e("code",[t._v("text <Tag/>")])])])])]),t._v(" "),e("p",[t._v("The HTML wrapped by "),e("code",[t._v("<code>")]),t._v(" will be displayed as is, only the HTML that is not wrapped will be parsed by Vue.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The output HTML is accomplished by "),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),e("OutboundLink")],1),t._v(", while the parsed headers are done by VuePress, and used for the "),e("router-link",{attrs:{to:"/default-theme-config/#sidebar"}},[t._v("sidebar")]),t._v(" and the document title.")],1)]),t._v(" "),e("h2",{attrs:{id:"using-pre-processors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-pre-processors"}},[t._v("#")]),t._v(" Using Pre-processors")]),t._v(" "),e("p",[t._v("VuePress has built-in webpack config for the following pre-processors: "),e("code",[t._v("sass")]),t._v(", "),e("code",[t._v("scss")]),t._v(", "),e("code",[t._v("less")]),t._v(", "),e("code",[t._v("stylus")]),t._v(" and "),e("code",[t._v("pug")]),t._v(". All you need to do is installing the corresponding dependencies. For example, to enable "),e("code",[t._v("sass")]),t._v(", install the following in your project:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D sass-loader node-sass\n")])])]),e("p",[t._v("Now you can use the following in markdown and theme components:")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n.title\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Using "),e("code",[t._v('<template lang="pug">')]),t._v(" requires installing "),e("code",[t._v("pug")]),t._v(" and "),e("code",[t._v("pug-plain-loader")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D pug pug-plain-loader\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you are a Stylus user, you don't need to install "),e("code",[t._v("stylus")]),t._v(" and "),e("code",[t._v("stylus-loader")]),t._v(" in your project because VuePress uses Stylus internally.")]),t._v(" "),e("p",[t._v("For pre-processors that do not have built-in webpack config support, you will need to "),e("router-link",{attrs:{to:"/config/#configurewebpack"}},[t._v("extend the internal webpack config")]),t._v(" in addition to installing the necessary dependencies.")],1)]),t._v(" "),e("h2",{attrs:{id:"script-style-hoisting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#script-style-hoisting"}},[t._v("#")]),t._v(" Script & Style Hoisting")]),t._v(" "),e("p",[t._v("Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases you can directly write root-level "),e("code",[t._v("<script>")]),t._v(" or "),e("code",[t._v("<style>")]),t._v(" blocks in the markdown file, and they will be hoisted out of the compiled HTML and used as the "),e("code",[t._v("<script>")]),t._v(" and "),e("code",[t._v("<style>")]),t._v(" blocks for the resulting Vue single-file component.")]),t._v(" "),e("p",{staticClass:"demo",class:t.$style.example}),t._v(" "),e("h2",{attrs:{id:"built-in-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#built-in-components"}},[t._v("#")]),t._v(" Built-In Components")]),t._v(" "),e("h3",{attrs:{id:"outboundlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outboundlink"}},[t._v("#")]),t._v(" OutboundLink "),e("Badge",{attrs:{text:"stable"}})],1),t._v(" "),e("p",[t._v("It("),e("OutboundLink"),t._v(") is used to indicate that this is an external link. In VuePress this component have been followed by every external link.")],1),t._v(" "),e("h3",{attrs:{id:"clientonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clientonly"}},[t._v("#")]),t._v(" ClientOnly "),e("Badge",{attrs:{text:"stable"}})],1),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"#browser-api-access-restrictions"}},[t._v("Browser API Access Restrictions")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content "),e("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Props")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("custom")]),t._v(" - boolean")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Usage")]),t._v("：")])])]),t._v(" "),e("p",[t._v("The compiled content of the current "),e("code",[t._v(".md")]),t._v(" file being rendered. This will be very useful when you use "),e("router-link",{attrs:{to:"/default-theme-config/#custom-layout-for-specific-pages"}},[t._v("Custom Layout")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("Also see:")])]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/guide/custom-themes.html#content-outlet"}},[t._v("Custom Themes > Content Outlet")])],1)]),t._v(" "),e("h3",{attrs:{id:"badge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[t._v("#")]),t._v(" Badge "),e("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),e("Badge",{attrs:{text:"0.10.1+"}})],1),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Props")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("text")]),t._v(" - string")]),t._v(" "),e("li",[e("code",[t._v("type")]),t._v(" - string, optional value: "),e("code",[t._v('"tip"|"warn"|"error"')]),t._v(", defaults to "),e("code",[t._v('"tip"')]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("vertical")]),t._v(" - string, optional value: "),e("code",[t._v('"top"|"middle"')]),t._v(", defaults to "),e("code",[t._v('"top"')]),t._v(".")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Usage")]),t._v(":")])])]),t._v(" "),e("p",[t._v("You can use this component in header to add some status for some API:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(' Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>')]),t._v("\n")])])]),e("p",[e("strong",[t._v("Also see:")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#using-components-in-headers"}},[t._v("Using Components In Headers")])])])],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);s.default=o.exports},73:function(t,s,e){t.exports={example:"example_2DuOfB6G"}}}]);