import{u as c,j as r,e as b,g as d,r as C}from"./iframe-BUvYQMU_.js";import{p as m,r as h}from"./reset-styles-XQx5unOT.js";import{c as k}from"./create-state-context-DGdTHjbV.js";import{w as x}from"./with-root-selector-xjsTQW7-.js";const v=".ordeo-drag-indicator",l=k("DragIndicatorState",v),s=m(function({as:n="div",className:o,orientation:a,disabled:t,mark:u,parentSelector:i,...f}){const g=c();return r(n,{className:x(v,o),css:[h,"display:flex;flex-direction:row;justify-content:center;align-items:center;cursor:pointer;",b(t,y=>y?{cursor:"not-allowed"}:{}),d(g.component["drag-indicator"].base,{orientation:a},{parentSelector:i}),"",""],...f,children:r(l,{value:i??v,children:u({orientation:a,disabled:t})})})});try{l.displayName="DragIndicatorState",l.__docgenInfo={description:"",displayName:"DragIndicatorState",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/drag-indicator/drag-indicator.tsx",methods:[],props:{},tags:{}}}catch{}try{s.displayName="DragIndicator",s.__docgenInfo={description:"",displayName:"DragIndicator",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/drag-indicator/drag-indicator.tsx",methods:[],props:{orientation:{defaultValue:null,description:"",name:"orientation",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"horizontal" | "vertical">',value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'BreakpointsMap<"horizontal" | "vertical">',description:"",fullComment:"",tags:{}}]}},disabled:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/drag-indicator/drag-indicator.tsx",name:"TypeLiteral"}],description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},parentSelector:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/states/parent-selector.d.ts",name:"TypeLiteral"}],description:"",name:"parentSelector",required:!1,tags:{},type:{name:"enum",raw:"`.${string}`",value:[{value:"`.${string}`"}]}},mark:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/drag-indicator/drag-indicator.tsx",name:"TypeLiteral"}],description:"shows it can be dragged",name:"mark",required:!0,tags:{},type:{name:"Slot<DragIndicatorMarkConfig>"}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const p=m(function({as:n="div",orientation:o,disabled:a,...t}){const u=c();return r(n,{css:[h,d(u.component["drag-indicator"].mark.base,{orientation:o,disabled:a},{parentSelector:C.use(l)}),"",""],...t})});try{p.displayName="DragIndicatorMark",p.__docgenInfo={description:"",displayName:"DragIndicatorMark",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/drag-indicator/drag-indicator-mark.tsx",methods:[],props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},orientation:{defaultValue:null,description:"",name:"orientation",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"horizontal" | "vertical">',value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'BreakpointsMap<"horizontal" | "vertical">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}export{s as D,p as a};
