import{u as r,f as m,g as v,j as c}from"./iframe-BUvYQMU_.js";import{p as s,r as i}from"./reset-styles-XQx5unOT.js";import{s as d,o as h}from"./slot-Bc7md0cd.js";const f=s(function({as:n="div",intent:t,size:a,elevation:e,indicator:u,content:o,...p}){const T=r();return m(n,{css:[i,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"stretch",[h("content")]:{flex:1}},v(T.component.banner.base,{size:a,elevation:e}),"",""],...p,children:[u({intent:t,size:a,elevation:e}),o({size:a,...d("content")})]})});try{f.displayName="Banner",f.__docgenInfo={description:"A message in the page about its content or state, which the user can dismiss.",displayName:"Banner",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner.tsx",methods:[],props:{elevation:{defaultValue:null,description:"",name:"elevation",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"none" | "overlay">',value:[{value:'"none"'},{value:'"overlay"'},{value:'BreakpointsMap<"none" | "overlay">',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},intent:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner.tsx",name:"TypeLiteral"}],description:"",name:"intent",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"danger" | "info" | "neutral" | "success" | "warning">',value:[{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'BreakpointsMap<"danger" | "info" | "neutral" | "success" | "warning">',description:"",fullComment:"",tags:{}}]}},indicator:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner.tsx",name:"TypeLiteral"}],description:"shows the message's intent",name:"indicator",required:!0,tags:{},type:{name:"Slot<BannerIndicatorConfig>"}},content:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner.tsx",name:"TypeLiteral"}],description:"message, actions and dismiss",name:"content",required:!0,tags:{},type:{name:"Slot<BannerContentConfig>"}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}const g=s(function({as:n="div",size:t,words:a,actions:e,dismiss:u,...o}){const p=r();return m(n,{css:[i,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",[h("words")]:{flex:1}},v(p.component.banner.content.base,{size:t}),"",""],...o,children:[a({size:t,...d("words")}),e==null?void 0:e({size:"sm"}),u==null?void 0:u({size:"sm",emphasis:"low"})]})});try{g.displayName="BannerContent",g.__docgenInfo={description:"",displayName:"BannerContent",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner-content.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},words:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-content.tsx",name:"TypeLiteral"}],description:"title and description",name:"words",required:!0,tags:{},type:{name:"Slot<BannerContentWordsConfig>"}},actions:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-content.tsx",name:"TypeLiteral"}],description:"",name:"actions",required:!1,tags:{},type:{name:"enum",raw:"Slot<BannerContentActionsConfig>",value:[{value:"Slot<BannerContentActionsConfig>",description:"",fullComment:"",tags:{}}]}},dismiss:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-content.tsx",name:"TypeLiteral"}],description:"closes the banner",name:"dismiss",required:!1,tags:{},type:{name:"enum",raw:"Slot<BannerContentDismissConfig>",value:[{value:"Slot<BannerContentDismissConfig>",description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}const y=s(function({as:n="div",size:t,title:a,description:e,...u}){const o=r();return m(n,{css:[i,"display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;",v(o.component.banner.content.words.base,{}),"",""],...u,children:[a({size:t}),e==null?void 0:e({size:t})]})});try{y.displayName="BannerContentWords",y.__docgenInfo={description:"",displayName:"BannerContentWords",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner-content-words.tsx",methods:[],props:{size:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-content-words.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},title:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-content-words.tsx",name:"TypeLiteral"}],description:"",name:"title",required:!0,tags:{},type:{name:"Slot<BannerContentWordsTitleConfig>"}},description:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-content-words.tsx",name:"TypeLiteral"}],description:"",name:"description",required:!1,tags:{},type:{name:"enum",raw:"Slot<BannerContentWordsDescriptionConfig>",value:[{value:"Slot<BannerContentWordsDescriptionConfig>",description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}const b=s(function({as:n="span",size:t,...a}){const e=r();return c(n,{css:[i,v(e.component.banner.content.words.description.base,{size:t}),"",""],...a})});try{b.displayName="BannerContentWordsDescription",b.__docgenInfo={description:"",displayName:"BannerContentWordsDescription",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner-content-words-description.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}const C=s(function({as:n="span",size:t,...a}){const e=r();return c(n,{css:[i,v(e.component.banner.content.words.title.base,{size:t}),"",""],...a})});try{C.displayName="BannerContentWordsTitle",C.__docgenInfo={description:"",displayName:"BannerContentWordsTitle",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner-content-words-title.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}const x=s(function({as:n="div",intent:t,size:a,elevation:e,line:u,...o}){const p=r();return c(n,{css:[i,{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",[h("line")]:{flex:1}},v(p.component.banner.indicator.base,{size:a}),"",""],...o,children:u({intent:t,size:a,elevation:e,...d("line")})})});try{x.displayName="BannerIndicator",x.__docgenInfo={description:"",displayName:"BannerIndicator",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner-indicator.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},intent:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-indicator.tsx",name:"TypeLiteral"}],description:"",name:"intent",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"danger" | "info" | "neutral" | "success" | "warning">',value:[{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'BreakpointsMap<"danger" | "info" | "neutral" | "success" | "warning">',description:"",fullComment:"",tags:{}}]}},elevation:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-indicator.tsx",name:"TypeLiteral"}],description:"",name:"elevation",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"none" | "overlay">',value:[{value:'"none"'},{value:'"overlay"'},{value:'BreakpointsMap<"none" | "overlay">',description:"",fullComment:"",tags:{}}]}},line:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/banner/banner-indicator.tsx",name:"TypeLiteral"}],description:"the intent cue itself",name:"line",required:!0,tags:{},type:{name:"Slot<BannerIndicatorLineConfig>"}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}const k=s(function({as:n="div",intent:t,size:a,elevation:e,...u}){const o=r();return c(n,{css:[i,v(o.component.banner.indicator.line.base,{intent:t,size:a,elevation:e}),"",""],...u})});try{k.displayName="BannerIndicatorLine",k.__docgenInfo={description:"",displayName:"BannerIndicatorLine",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/banner/banner-indicator-line.tsx",methods:[],props:{elevation:{defaultValue:null,description:"",name:"elevation",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"none" | "overlay">',value:[{value:'"none"'},{value:'"overlay"'},{value:'BreakpointsMap<"none" | "overlay">',description:"",fullComment:"",tags:{}}]}},intent:{defaultValue:null,description:"",name:"intent",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"danger" | "info" | "neutral" | "success" | "warning">',value:[{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'BreakpointsMap<"danger" | "info" | "neutral" | "success" | "warning">',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
@template P The props the component accepts.
@template S The internal state of the component.`,tags:{template:`P The props the component accepts.
S The internal state of the component.`}},{value:"FunctionComponent<unknown>",description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,fullComment:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.
@template P The props the component accepts.
@see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
@example \`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
@example \`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:`\`\`\`tsx
// With props:
type Props = { name: string }

const MyComponent: FunctionComponent<Props> = (props) => {
 return <div>{props.name}</div>
}
\`\`\`
\`\`\`tsx
// Without props:
const MyComponentWithoutProps: FunctionComponent = () => {
  return <div>MyComponentWithoutProps</div>
}
\`\`\``}}]}}},tags:{}}}catch{}export{f as B,g as a,y as b,b as c,C as d,x as e,k as f};
