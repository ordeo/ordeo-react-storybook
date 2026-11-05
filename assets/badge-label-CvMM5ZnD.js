import{u as v,f as y,g as s,j as d}from"./iframe-BUvYQMU_.js";import{p as r,r as i}from"./reset-styles-XQx5unOT.js";const p=r(function({as:n="span",intent:e,numeric:o,emphasis:a,size:l,prepend:t,label:h,...f}){const g=v();return y(n,{css:[i,"display:inline-flex;flex-direction:row;justify-content:center;align-items:center;",s(g.component.badge.base,{intent:e,numeric:o,emphasis:a,size:l}),"",""],...f,children:[t==null?void 0:t({intent:e,emphasis:a,size:l}),h({intent:e,emphasis:a,size:l})]})});try{p.displayName="Badge",p.__docgenInfo={description:"A status or count in a word or two.",displayName:"Badge",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/badge/badge.tsx",methods:[],props:{emphasis:{defaultValue:null,description:"",name:"emphasis",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"high" | "medium">',value:[{value:'"high"'},{value:'"medium"'},{value:'BreakpointsMap<"high" | "medium">',description:"",fullComment:"",tags:{}}]}},intent:{defaultValue:null,description:"",name:"intent",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"danger" | "info" | "neutral" | "success" | "warning">',value:[{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'BreakpointsMap<"danger" | "info" | "neutral" | "success" | "warning">',description:"",fullComment:"",tags:{}}]}},numeric:{defaultValue:null,description:"",name:"numeric",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm" | "xs">',value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'},{value:'BreakpointsMap<"md" | "sm" | "xs">',description:"",fullComment:"",tags:{}}]}},prepend:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/badge/badge.tsx",name:"TypeLiteral"}],description:"icon or status dot",name:"prepend",required:!1,tags:{},type:{name:"enum",raw:"Slot<BadgePrependConfig>",value:[{value:"Slot<BadgePrependConfig>",description:"",fullComment:"",tags:{}}]}},label:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/badge/badge.tsx",name:"TypeLiteral"}],description:"",name:"label",required:!0,tags:{},type:{name:"Slot<BadgeLabelConfig>"}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const c=r(function({as:n="svg",intent:e,emphasis:o,size:a,...l}){const t=v();return d(n,{css:[i,s(t.component.badge.icon.base,{intent:e,emphasis:o,size:a}),"",""],...l})});try{c.displayName="BadgeIcon",c.__docgenInfo={description:"",displayName:"BadgeIcon",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/badge/badge-icon.tsx",methods:[],props:{emphasis:{defaultValue:null,description:"",name:"emphasis",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"high" | "medium">',value:[{value:'"high"'},{value:'"medium"'},{value:'BreakpointsMap<"high" | "medium">',description:"",fullComment:"",tags:{}}]}},intent:{defaultValue:null,description:"",name:"intent",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"danger" | "info" | "neutral" | "success" | "warning">',value:[{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'BreakpointsMap<"danger" | "info" | "neutral" | "success" | "warning">',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm" | "xs">',value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'},{value:'BreakpointsMap<"md" | "sm" | "xs">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const m=r(function({as:n="span",intent:e,emphasis:o,size:a,...l}){const t=v();return d(n,{css:[i,"display:block;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",s(t.component.badge.label.base,{intent:e,emphasis:o,size:a}),"",""],...l})});try{m.displayName="BadgeLabel",m.__docgenInfo={description:"",displayName:"BadgeLabel",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/badge/badge-label.tsx",methods:[],props:{emphasis:{defaultValue:null,description:"",name:"emphasis",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"high" | "medium">',value:[{value:'"high"'},{value:'"medium"'},{value:'BreakpointsMap<"high" | "medium">',description:"",fullComment:"",tags:{}}]}},intent:{defaultValue:null,description:"",name:"intent",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"danger" | "info" | "neutral" | "success" | "warning">',value:[{value:'"danger"'},{value:'"info"'},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'BreakpointsMap<"danger" | "info" | "neutral" | "success" | "warning">',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm" | "xs">',value:[{value:'"md"'},{value:'"sm"'},{value:'"xs"'},{value:'BreakpointsMap<"md" | "sm" | "xs">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}export{p as B,m as a,c as b};
