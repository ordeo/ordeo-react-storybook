import{u as v,f as y,e as S,g as s,j as c}from"./iframe-BUvYQMU_.js";import{p as i,r as p}from"./reset-styles-XQx5unOT.js";import{s as W,o as V}from"./slot-Bc7md0cd.js";const b=i(function({as:u="div",invalid:a,size:e,side:l,readonly:n,disabled:o,label:r,choice:m,content:d,error:f,hint:h,...R}){const L=v();return y(u,{css:[p,"display:flex;justify-content:flex-start;",S(l,g=>({flexDirection:g==="block-start"?"column":"row",alignItems:g==="block-start"?"stretch":g==="inline-start"?"flex-start":"center"})),s(L.component["form-field"].base,{size:e,side:l}),"",""],...R,children:[r==null?void 0:r({size:e,side:l,readonly:n,disabled:o}),m==null?void 0:m({size:e,readonly:n,disabled:o}),d({invalid:a,size:e,readonly:n,disabled:o}),f==null?void 0:f({size:e}),h==null?void 0:h({invalid:a,size:e,readonly:n,disabled:o})]})});try{b.displayName="FormField",b.__docgenInfo={description:"",displayName:"FormField",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field.tsx",methods:[],props:{side:{defaultValue:null,description:"",name:"side",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"inline-start" | "inline-end" | "block-start">',value:[{value:'"inline-start"'},{value:'"inline-end"'},{value:'"block-start"'},{value:'BreakpointsMap<"inline-start" | "inline-end" | "block-start">',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},invalid:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"",name:"invalid",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},readonly:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"",name:"readonly",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},disabled:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},label:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"",name:"label",required:!1,tags:{},type:{name:"enum",raw:"Slot<FormFieldLabelConfig>",value:[{value:"Slot<FormFieldLabelConfig>",description:"",fullComment:"",tags:{}}]}},choice:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"label beside checkbox, radio, switch",name:"choice",required:!1,tags:{},type:{name:"enum",raw:"Slot<FormFieldChoiceConfig>",value:[{value:"Slot<FormFieldChoiceConfig>",description:"",fullComment:"",tags:{}}]}},content:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"the control being labelled",name:"content",required:!0,tags:{},type:{name:"Slot<FormFieldContentConfig>"}},error:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"",name:"error",required:!1,tags:{},type:{name:"enum",raw:"Slot<FormFieldErrorConfig>",value:[{value:"Slot<FormFieldErrorConfig>",description:"",fullComment:"",tags:{}}]}},hint:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field.tsx",name:"TypeLiteral"}],description:"",name:"hint",required:!1,tags:{},type:{name:"enum",raw:"Slot<FormFieldHintConfig>",value:[{value:"Slot<FormFieldHintConfig>",description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const C=i(function({as:u="span",size:a,readonly:e,disabled:l,...n}){const o=v();return c(u,{css:[p,s(o.component["form-field"].choice.base,{size:a,readonly:e,disabled:l}),"",""],...n})});try{C.displayName="FormFieldChoice",C.__docgenInfo={description:"For a checkbox, radio or switch, instead of the label.",displayName:"FormFieldChoice",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-choice.tsx",methods:[],props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},readonly:{defaultValue:null,description:"",name:"readonly",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const F=i(function({as:u="div",size:a,message:e,...l}){const n=v();return c(u,{css:[p,"display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;",s(n.component["form-field"].error.base,{size:a}),"",""],...l,children:e({size:a})})});try{F.displayName="FormFieldError",F.__docgenInfo={description:"",displayName:"FormFieldError",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-error.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},message:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-error.tsx",name:"TypeLiteral"}],description:"",name:"message",required:!0,tags:{},type:{name:"Slot<FormFieldErrorMessageConfig>"}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const k=i(function({as:u="span",size:a,...e}){const l=v();return c(u,{css:[p,s(l.component["form-field"].error.message.base,{size:a}),"",""],...e})});try{k.displayName="FormFieldErrorMessage",k.__docgenInfo={description:"",displayName:"FormFieldErrorMessage",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-error-message.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const x=i(function({as:u="div",invalid:a,size:e,readonly:l,disabled:n,description:o,append:r,...m}){const d=v();return y(u,{css:[p,{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",[V("description")]:{flex:1}},s(d.component["form-field"].hint.base,{invalid:a,size:e}),"",""],...m,children:[o({size:e,readonly:l,disabled:n,...W("description")}),r==null?void 0:r({invalid:a,size:e})]})});try{x.displayName="FormFieldHint",x.__docgenInfo={description:"",displayName:"FormFieldHint",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-hint.tsx",methods:[],props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},readonly:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-hint.tsx",name:"TypeLiteral"}],description:"",name:"readonly",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},disabled:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-hint.tsx",name:"TypeLiteral"}],description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},description:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-hint.tsx",name:"TypeLiteral"}],description:"",name:"description",required:!0,tags:{},type:{name:"Slot<FormFieldHintDescriptionConfig>"}},append:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-hint.tsx",name:"TypeLiteral"}],description:"character count",name:"append",required:!1,tags:{},type:{name:"enum",raw:"Slot<FormFieldHintAppendConfig>",value:[{value:"Slot<FormFieldHintAppendConfig>",description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const T=i(function({as:u="span",invalid:a,size:e,...l}){const n=v();return c(u,{css:[p,s(n.component["form-field"].hint.counter.base,{invalid:a,size:e}),"",""],...l})});try{T.displayName="FormFieldHintCounter",T.__docgenInfo={description:"",displayName:"FormFieldHintCounter",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-hint-counter.tsx",methods:[],props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const M=i(function({as:u="span",size:a,readonly:e,disabled:l,...n}){const o=v();return c(u,{css:[p,s(o.component["form-field"].hint.description.base,{size:a,readonly:e,disabled:l}),"",""],...n})});try{M.displayName="FormFieldHintDescription",M.__docgenInfo={description:"",displayName:"FormFieldHintDescription",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-hint-description.tsx",methods:[],props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},readonly:{defaultValue:null,description:"",name:"readonly",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const P=i(function({as:u="div",size:a,side:e,readonly:l,disabled:n,text:o,necessity:r,...m}){const d=v();return y(u,{css:[p,"display:flex;flex-direction:row;justify-content:flex-start;align-items:center;",s(d.component["form-field"].label.base,{size:a,side:e}),"",""],...m,children:[o({size:a,readonly:l,disabled:n}),r==null?void 0:r({size:a})]})});try{P.displayName="FormFieldLabel",P.__docgenInfo={description:"",displayName:"FormFieldLabel",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-label.tsx",methods:[],props:{side:{defaultValue:null,description:"",name:"side",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"inline-start" | "inline-end" | "block-start">',value:[{value:'"inline-start"'},{value:'"inline-end"'},{value:'"block-start"'},{value:'BreakpointsMap<"inline-start" | "inline-end" | "block-start">',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},readonly:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-label.tsx",name:"TypeLiteral"}],description:"",name:"readonly",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},disabled:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-label.tsx",name:"TypeLiteral"}],description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},text:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-label.tsx",name:"TypeLiteral"}],description:"",name:"text",required:!0,tags:{},type:{name:"Slot<FormFieldLabelTextConfig>"}},necessity:{defaultValue:null,declarations:[{fileName:"ordeo-react/src/components/form-field/form-field-label.tsx",name:"TypeLiteral"}],description:"required or optional note",name:"necessity",required:!1,tags:{},type:{name:"enum",raw:"Slot<FormFieldLabelNecessityConfig>",value:[{value:"Slot<FormFieldLabelNecessityConfig>",description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const w=i(function({as:u="span",size:a,...e}){const l=v();return c(u,{css:[p,s(l.component["form-field"].label.necessity.base,{size:a}),"",""],...e})});try{w.displayName="FormFieldLabelNecessity",w.__docgenInfo={description:"",displayName:"FormFieldLabelNecessity",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-label-necessity.tsx",methods:[],props:{size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}const _=i(function({as:u="span",size:a,readonly:e,disabled:l,...n}){const o=v();return c(u,{css:[p,s(o.component["form-field"].label.text.base,{size:a,readonly:e,disabled:l}),"",""],...n})});try{_.displayName="FormFieldLabelText",_.__docgenInfo={description:"",displayName:"FormFieldLabelText",filePath:"/home/runner/work/ordeo-react/ordeo-react/src/components/form-field/form-field-label-text.tsx",methods:[],props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},readonly:{defaultValue:null,description:"",name:"readonly",required:!0,tags:{},type:{name:"enum",raw:"ResponsiveValue<boolean>",value:[{value:"false"},{value:"true"},{value:"BreakpointsMap<boolean>",description:"",fullComment:"",tags:{}}]}},size:{defaultValue:null,description:"",name:"size",required:!0,tags:{},type:{name:"enum",raw:'ResponsiveValue<"md" | "sm">',value:[{value:'"md"'},{value:'"sm"'},{value:'BreakpointsMap<"md" | "sm">',description:"",fullComment:"",tags:{}}]}},as:{defaultValue:null,declarations:[{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"},{fileName:"ordeo-react/node_modules/@ordeo/cdk-react-dom/dist/polymorphic/polymorphic.d.ts",name:"TypeLiteral"}],description:"",name:"as",required:!1,tags:{},type:{name:"enum",raw:'"symbol" | "object" | "section" | "base" | "search" | "big" | "link" | "small" | "sub" | "sup" | "div" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | ... 160 more ...',value:[{value:'"symbol"'},{value:'"object"'},{value:'"section"'},{value:'"base"'},{value:'"search"'},{value:'"big"'},{value:'"link"'},{value:'"small"'},{value:'"sub"'},{value:'"sup"'},{value:'"div"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"select"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"summary"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'},{value:"ComponentClass<unknown, any>",description:"Represents a component class in React.",fullComment:`Represents a component class in React.
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
\`\`\``}}]}}},tags:{}}}catch{}export{b as F,x as a,T as b,M as c,F as d,k as e,C as f,P as g,w as h,_ as i};
